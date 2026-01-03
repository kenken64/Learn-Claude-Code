$ErrorActionPreference = "Stop"
$scriptPath = $PSScriptRoot
$rootPath = Split-Path -Parent $scriptPath

Write-Host "Starting Claude Code Environment..." -ForegroundColor Cyan

# Start Server
$serverPath = Join-Path $rootPath "server"
if (Test-Path $serverPath) {
    Write-Host "Launching Server in new window..." -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$serverPath'; npm start"
} else {
    Write-Error "Server directory not found at $serverPath"
}

# Start Frontend
$frontendPath = Join-Path $rootPath "frontend"
if (Test-Path $frontendPath) {
    Write-Host "Launching Frontend in new window..." -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontendPath'; npm run dev"
} else {
    Write-Error "Frontend directory not found at $frontendPath"
}

Write-Host "Environment started!" -ForegroundColor Cyan
