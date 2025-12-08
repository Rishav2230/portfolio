# Push Ravefolio Portfolio to GitHub
# Repository: https://github.com/Rishav2230/portfolio.git

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Pushing Ravefolio to GitHub" -ForegroundColor Cyan
Write-Host "Repository: https://github.com/Rishav2230/portfolio.git" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Try to find Git
$gitPaths = @(
    "C:\Program Files\Git\cmd\git.exe",
    "C:\Program Files (x86)\Git\cmd\git.exe",
    "$env:ProgramFiles\Git\cmd\git.exe",
    "$env:ProgramFiles(x86)\Git\cmd\git.exe"
)

$gitCmd = $null
foreach ($path in $gitPaths) {
    if (Test-Path $path) {
        $gitCmd = $path
        break
    }
}

# Check if git is in PATH
if (-not $gitCmd) {
    try {
        $null = Get-Command git -ErrorAction Stop
        $gitCmd = "git"
    } catch {
        Write-Host "ERROR: Git is not installed or not in PATH!" -ForegroundColor Red
        Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
        Write-Host "After installation, restart PowerShell and run this script again." -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit 1
    }
}

Write-Host "Git found! Proceeding..." -ForegroundColor Green
Write-Host ""

# Initialize git if not already done
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    & $gitCmd init
}

# Add remote repository
Write-Host "Adding remote repository..." -ForegroundColor Yellow
& $gitCmd remote remove origin 2>$null
& $gitCmd remote add origin https://github.com/Rishav2230/portfolio.git

# Add all files
Write-Host "Adding all files..." -ForegroundColor Yellow
& $gitCmd add .

# Commit
Write-Host "Committing changes..." -ForegroundColor Yellow
& $gitCmd commit -m "Add Ravefolio portfolio website with 3D animations and interactive profile panel"

# Set main branch
Write-Host "Setting main branch..." -ForegroundColor Yellow
& $gitCmd branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
Write-Host ""
Write-Host "NOTE: You will be prompted for GitHub credentials." -ForegroundColor Cyan
Write-Host "Username: Rishav2230" -ForegroundColor Cyan
Write-Host "Password: Use a Personal Access Token (not your GitHub password)" -ForegroundColor Cyan
Write-Host "Create token at: https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host ""

& $gitCmd push -u origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Push failed!" -ForegroundColor Red
    Write-Host "Make sure you have:" -ForegroundColor Yellow
    Write-Host "1. Created a Personal Access Token at https://github.com/settings/tokens" -ForegroundColor Yellow
    Write-Host "2. Used the token as your password (not your GitHub password)" -ForegroundColor Yellow
    Write-Host "3. Have write access to the repository" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "SUCCESS! Project pushed to GitHub!" -ForegroundColor Green
    Write-Host "View at: https://github.com/Rishav2230/portfolio" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
}

Read-Host "Press Enter to exit"

