$ErrorActionPreference = "SilentlyContinue"

function Kill-ProcessOnPort {
    param([int]$Port, [string]$Name)

    Write-Host "Checking port $Port for $Name..." -NoNewline
    
    $connection = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    
    if ($connection) {
        $processId = $connection.OwningProcess
        $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
        
        if ($process) {
            Write-Host " Found PID $processId ($($process.ProcessName)). Killing..." -ForegroundColor Yellow
            Stop-Process -Id $processId -Force
            Write-Host "Stopped $Name." -ForegroundColor Green
        } else {
            Write-Host " Process not found." -ForegroundColor Red
        }
    } else {
        Write-Host " No active listener found." -ForegroundColor Gray
    }
}

Write-Host "Stopping Claude Code Environment..." -ForegroundColor Cyan

# Stop Server (Port 3001)
Kill-ProcessOnPort -Port 3001 -Name "Server"

# Stop Frontend (Port 5173)
Kill-ProcessOnPort -Port 5173 -Name "Frontend"

Write-Host "Done." -ForegroundColor Cyan
