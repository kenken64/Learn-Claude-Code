# Claude Code Terminal Server

A separate Node.js WebSocket server that provides PTY (pseudo-terminal) support for running Claude Code in the browser.

## Why separate?

The main backend uses Bun, which doesn't support `node-pty` properly. This Node.js service provides proper PTY support for interactive terminal applications like Claude Code.

## Installation

```bash
npm install
```

## Running

```bash
npm start
```

The server will start on `ws://localhost:3001`

## Development

```bash
npm run dev  # Auto-restarts on file changes
```
