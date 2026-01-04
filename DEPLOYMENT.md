# Deployment Guide

This project is containerized and ready for deployment on platforms like Railway, Render, or any Docker-compatible hosting service.

## Docker Structure

- **Frontend**: Built with Vite, served by Nginx.
- **Server**: Node.js application with `node-pty` and `claude-code` installed.

## Local Development with Docker

To run the entire stack locally using Docker Compose:

```bash
docker-compose up --build
```

- Frontend: http://localhost:8080
- Server: http://localhost:3001

## Deploying to Railway

### 1. Server Service

1. Create a new service in Railway from your GitHub repository.
2. Select the `server` directory as the root directory (or configure the build command to use `server/Dockerfile`).
3. Railway should automatically detect the Dockerfile in `server/Dockerfile`.
4. Set the environment variable `PORT` to `3001` (or let Railway assign one and update the code/config).
   - Note: Railway usually assigns a random port and provides it as `$PORT`. The server code `const PORT = process.env.PORT || 3001;` handles this.
5. **Important**: The server needs a persistent volume for the playground if you want to keep the files between restarts.
   - Add a volume mount to `/app/../playground` (which resolves to `/playground`).

### 2. Frontend Service

1. Create another service in Railway from the same repository.
2. Select the `frontend` directory as the root.
3. Railway should detect `frontend/Dockerfile`.
4. Add an environment variable `VITE_WS_URL` pointing to your deployed Server URL.
   - Format: `wss://<your-server-url>` (Note: use `wss://` for secure WebSocket if served over HTTPS).
   - You need to set this variable *before* the build, as Vite embeds it during build time.

### 3. Networking

- Ensure the Frontend service can talk to the Server service.
- On Railway, services are exposed via public domains. Use the public domain of the Server for `VITE_WS_URL`.

## Notes

- The server runs `claude-code` which might require authentication. You may need to pass authentication tokens or handle the login flow within the terminal session.
- `node-pty` requires native build tools, which are included in the `server/Dockerfile`.
