#!/bin/bash

echo "Stopping Claude Code Environment..."

# Function to kill process on port
kill_port() {
    PORT=$1
    NAME=$2
    echo -n "Checking port $PORT for $NAME... "
    
    # Find PID using lsof (works on macOS and most Linux distros)
    if command -v lsof >/dev/null 2>&1; then
        PID=$(lsof -ti:$PORT)
    else
        # Fallback to netstat/awk if lsof is missing
        PID=$(netstat -nlp 2>/dev/null | grep ":$PORT " | awk '{print $7}' | cut -d'/' -f1)
    fi

    if [ -n "$PID" ]; then
        echo "Found PID $PID. Killing..."
        kill -9 $PID
        echo "Stopped $NAME."
    else
        echo "No active listener found."
    fi
}

# Stop Server (Port 3001)
kill_port 3001 "Server"

# Stop Frontend (Port 5173)
kill_port 5173 "Frontend"

echo "Done."
