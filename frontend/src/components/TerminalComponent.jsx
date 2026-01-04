import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent = ({ workshopId, isVisible }) => {
  const terminalRef = useRef(null);
  const wsRef = useRef(null);
  const termRef = useRef(null);
  const fitAddonRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);

  const connect = () => {
    // Clean up existing terminal if any
    if (termRef.current) {
        termRef.current.dispose();
    }
    if (wsRef.current) {
        wsRef.current.close();
    }

    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#0d1117',
        foreground: '#c9d1d9',
        cursor: '#58a6ff',
        selectionBackground: '#264f78',
        black: '#484f58',
        red: '#ff7b72',
        green: '#3fb950',
        yellow: '#d29922',
        blue: '#58a6ff',
        magenta: '#bc8cff',
        cyan: '#39c5cf',
        white: '#b1bac4',
        brightBlack: '#6e7681',
        brightRed: '#ffa198',
        brightGreen: '#56d364',
        brightYellow: '#e3b341',
        brightBlue: '#79c0ff',
        brightMagenta: '#d2a8ff',
        brightCyan: '#56d4dd',
        brightWhite: '#f0f6fc',
      },
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      fontSize: 14,
    });
    
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    fitAddonRef.current = fitAddon;
    
    if (terminalRef.current) {
        terminalRef.current.innerHTML = '';
    }
    term.open(terminalRef.current);
    
    // Initial fit
    try {
        fitAddon.fit();
    } catch (e) {
        console.log('Initial fit failed (likely hidden)', e);
    }
    
    termRef.current = term;

    const wsUrl = import.meta.env.VITE_WS_URL || 'ws://localhost:3001';
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
      term.write('\r\n\x1b[32mConnected to Claude Code Server\x1b[0m\r\n');
      
      // Send start session with dimensions
      const cols = term.cols || 80;
      const rows = term.rows || 24;
      
      ws.send(JSON.stringify({
        type: 'start-session',
        cols,
        rows,
        workshopId
      }));
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'output') {
        term.write(msg.data);
      } else if (msg.type === 'exit') {
        setIsConnected(false);
        term.write(`\r\n\x1b[33mSession ended with exit code ${msg.exitCode}\x1b[0m\r\n`);
        ws.close();
      }
    };

    ws.onclose = () => {
        setIsConnected(false);
    };

    ws.onerror = (err) => {
        console.error('WebSocket error:', err);
        setIsConnected(false);
        term.write('\r\n\x1b[31mConnection error\x1b[0m\r\n');
    };

    term.onData((data) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'input', data }));
      }
    });
  };

  const disconnect = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({
            type: 'cleanup',
            workshopId
        }));
        wsRef.current.close();
    }
    if (termRef.current) {
        termRef.current.write('\r\n\x1b[31mDisconnected by user. Workspace cleared.\x1b[0m\r\n');
    }
    setIsConnected(false);
  };

  // Initial connection
  useEffect(() => {
    connect();

    const handleResize = () => {
      if (fitAddonRef.current && termRef.current) {
        try {
            fitAddonRef.current.fit();
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify({
                    type: 'resize',
                    cols: termRef.current.cols,
                    rows: termRef.current.rows
                }));
            }
        } catch (e) {
            // Ignore resize errors when hidden
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (wsRef.current) {
        wsRef.current.close();
      }
      if (termRef.current) {
        termRef.current.dispose();
      }
    };
  }, [workshopId]);

  // Handle visibility changes
  useEffect(() => {
    if (isVisible && fitAddonRef.current && termRef.current) {
        // Small timeout to ensure container is rendered
        setTimeout(() => {
            try {
                fitAddonRef.current.fit();
                if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                    wsRef.current.send(JSON.stringify({
                        type: 'resize',
                        cols: termRef.current.cols,
                        rows: termRef.current.rows
                    }));
                }
                termRef.current.focus();
            } catch (e) {
                console.log('Fit on visible failed', e);
            }
        }, 50);
    }
  }, [isVisible]);

  return (
    <div className="relative w-full h-full group">
        <div className="absolute top-4 right-6 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {!isConnected && (
                <button 
                    onClick={connect}
                    className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded border border-green-500 shadow-sm transition-colors flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Reconnect
                </button>
            )}
            {isConnected && (
                <button 
                    onClick={disconnect}
                    className="px-3 py-1.5 bg-red-900/80 hover:bg-red-800 text-red-200 text-xs font-medium rounded border border-red-800 shadow-sm transition-colors flex items-center gap-1 backdrop-blur-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Disconnect
                </button>
            )}
        </div>
        <div 
            ref={terminalRef} 
            style={{ width: '100%', height: '100%', overflow: 'hidden' }} 
        />
    </div>
  );
};

export default TerminalComponent;
