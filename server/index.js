import { WebSocketServer } from 'ws';
import * as pty from 'node-pty';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import { existsSync, readFileSync, mkdirSync, rmSync } from 'fs';
import { execSync } from 'child_process';
import express from 'express';
import cors from 'cors';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sessions = new Map();

const PORT = 3001;
const app = express();
app.use(cors());

// Serve workshop content
app.get('/api/workshops/:id', (req, res) => {
  const workshopId = req.params.id;
  const workshopPath = resolve(__dirname, `../frontend/public/workshops/Workshop${workshopId}/README.md`);
  
  if (existsSync(workshopPath)) {
    try {
      const content = readFileSync(workshopPath, 'utf-8');
      res.json({ content });
    } catch (error) {
      res.status(500).json({ error: 'Failed to read workshop file' });
    }
  } else {
    res.status(404).json({ error: 'Workshop not found' });
  }
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');
  let sessionId = null;

  ws.on('message', (message) => {
    try {
      const msg = JSON.parse(message.toString());

      if (msg.type === 'start-session') {
        const { cols = 80, rows = 24, workshopId } = msg;
        
        // Base playground directory
        const playgroundDir = resolve(__dirname, '../playground');
        if (!existsSync(playgroundDir)) {
          mkdirSync(playgroundDir);
        }

        // Workshop specific directory
        let cwd = playgroundDir;
        if (workshopId) {
          const workshopDir = join(playgroundDir, `workshop${workshopId}`);
          if (!existsSync(workshopDir)) {
            mkdirSync(workshopDir);
          }
          cwd = workshopDir;
        }

        console.log(`Starting PTY session in: ${cwd}`);

        const shell = process.platform === 'win32' ? 'powershell.exe' : '/bin/zsh';
        const args = process.platform === 'win32' ? [] : ['-l'];

        // Spawn shell with PTY
        const ptyProcess = pty.spawn(shell, args, {
          name: 'xterm-256color',
          cols,
          rows,
          cwd,
          env: process.env,
        });

        sessionId = Math.random().toString(36).substring(7);
        sessions.set(sessionId, { ptyProcess, ws });

        console.log(`PTY session ${sessionId} created with PID: ${ptyProcess.pid}`);

        // Send welcome message
        const welcome = '\r\n\x1b[32m=== Claude Code Terminal ===\x1b[0m\r\n' +
                       '\x1b[36mDirectory:\x1b[0m ' + cwd + '\r\n' +
                       '\x1b[33mAuto-starting Claude Code...\x1b[0m\r\n\r\n';
        ws.send(JSON.stringify({ type: 'output', data: welcome }));

        // Auto-run claude command
        setTimeout(() => {
          if (process.platform === 'win32') {
            ptyProcess.write('claude --dangerously-skip-permissions --continue; if (!$?) { claude --dangerously-skip-permissions }\r');
          } else {
            ptyProcess.write('claude --dangerously-skip-permissions --continue || claude --dangerously-skip-permissions\r');
          }
        }, 1000);

        // Forward PTY output to WebSocket
        ptyProcess.onData((data) => {
          if (ws.readyState === 1) {
            ws.send(JSON.stringify({ type: 'output', data }));
          }
        });


        // Handle PTY exit
        ptyProcess.onExit(({ exitCode, signal }) => {
          console.log(`PTY session ${sessionId} exited with code ${exitCode}, signal ${signal}`);
          if (ws.readyState === 1) {
            ws.send(JSON.stringify({ type: 'exit', exitCode }));
          }
          sessions.delete(sessionId);
        });

        ws.send(JSON.stringify({ type: 'session-started', sessionId }));

      } else if (msg.type === 'cleanup') {
        const { workshopId } = msg;
        if (workshopId) {
          const playgroundDir = resolve(__dirname, '../playground');
          const workshopDir = join(playgroundDir, `workshop${workshopId}`);
          
          console.log(`Cleaning up directory: ${workshopDir}`);
          
          // Kill the PTY process first if it exists for this session
          const session = sessions.get(sessionId);
          if (session) {
            try {
              if (process.platform === 'win32') {
                try {
                  execSync(`taskkill /F /T /PID ${session.ptyProcess.pid}`);
                } catch (e) {
                  // Process might be gone already or access denied
                }
              }
              session.ptyProcess.kill();
            } catch (e) {
              console.error('Error killing process:', e);
            }
            sessions.delete(sessionId);
          }

          if (existsSync(workshopDir)) {
            try {
              // Small delay to allow process to release locks
              setTimeout(() => {
                let retries = 3;
                const tryDelete = () => {
                    try {
                      if (existsSync(workshopDir)) {
                          rmSync(workshopDir, { recursive: true, force: true });
                          console.log(`Deleted ${workshopDir}`);
                          mkdirSync(workshopDir);
                      }
                    } catch (err) {
                      console.error(`Failed to delete directory ${workshopDir}:`, err);
                      if (retries > 0) {
                          retries--;
                          setTimeout(tryDelete, 1000);
                      }
                    }
                };
                tryDelete();
              }, 500);
            } catch (error) {
              console.error('Error during cleanup:', error);
            }
          }
        }

      } else if (msg.type === 'input') {
        const session = sessions.get(sessionId);
        if (session) {
          session.ptyProcess.write(msg.data);
        }
      } else if (msg.type === 'resize') {
        const session = sessions.get(sessionId);
        if (session) {
          session.ptyProcess.resize(msg.cols, msg.rows);
          console.log(`Resized PTY to ${msg.cols}x${msg.rows}`);
        }
      } else if (msg.type === 'kill-session') {
        const session = sessions.get(sessionId);
        if (session) {
          session.ptyProcess.kill();
          sessions.delete(sessionId);
        }
      }
    } catch (e) {
      console.error('Error processing message:', e);
    }
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
    if (sessionId) {
      const session = sessions.get(sessionId);
      if (session) {
        session.ptyProcess.kill();
        sessions.delete(sessionId);
      }
    }
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});
