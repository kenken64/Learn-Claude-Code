#!/bin/bash
# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

echo "Starting Claude Code Environment..."

# Start Server
if [ -d "$ROOT_DIR/server" ]; then
    echo "Checking Server dependencies..."
    cd "$ROOT_DIR/server"
    if [ ! -d "node_modules" ]; then
        echo "Installing Server dependencies..."
        npm install
    fi
    echo "Starting Server on port 3001..."
    # Run in background and redirect output to log file
    npm start > "$ROOT_DIR/server.log" 2>&1 &
else
    echo "Error: Server directory not found at $ROOT_DIR/server"
fi

# Start Frontend
if [ -d "$ROOT_DIR/frontend" ]; then
    echo "Checking Frontend dependencies..."
    cd "$ROOT_DIR/frontend"
    if [ ! -d "node_modules" ]; then
        echo "Installing Frontend dependencies..."
        npm install
    fi
    echo "Starting Frontend on port 5173..."
    # Run in background and redirect output to log file
    npm run dev > "$ROOT_DIR/frontend.log" 2>&1 &
else
    echo "Error: Frontend directory not found at $ROOT_DIR/frontend"
fi

echo "Environment started!"
echo "Logs are available in server.log and frontend.log"
