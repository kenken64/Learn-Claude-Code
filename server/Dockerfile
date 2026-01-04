FROM node:18

# Install build dependencies for node-pty and tools
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code globally
RUN npm install -g @anthropic-ai/claude-code

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Create playground directory structure expected by the server
RUN mkdir -p ../playground

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "start"]
