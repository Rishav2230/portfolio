# Final push script - resolves merge conflict and pushes
$gitPaths = @(
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe"
)

$gitCmd = $null
foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        $gitCmd = $path
        break
    }
}

if (-not $gitCmd) {
    try {
        $null = Get-Command git -ErrorAction Stop
        $gitCmd = "git"
    } catch {
        Write-Host "Git not found!" -ForegroundColor Red
        exit 1
    }
}

Write-Host "Resolving merge conflict and pushing..." -ForegroundColor Cyan

# Add resolved README
& $gitCmd add README.md

# Commit the merge
& $gitCmd commit -m "Merge remote README and resolve conflicts"

# Push to GitHub
& $gitCmd push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "SUCCESS! Project pushed to GitHub!" -ForegroundColor Green
    Write-Host "View at: https://github.com/Rishav2230/portfolio" -ForegroundColor Cyan
} else {
    Write-Host "Push failed. You may need to authenticate." -ForegroundColor Yellow
}


