@echo off
echo ========================================
echo Pushing Ravefolio to GitHub
echo Repository: https://github.com/Rishav2230/portfolio.git
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    echo After installation, restart PowerShell and run this script again.
    pause
    exit /b 1
)

echo Git found! Proceeding...
echo.

REM Initialize git if not already done
if not exist .git (
    echo Initializing git repository...
    git init
)

REM Add remote repository
echo Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Rishav2230/portfolio.git

REM Add all files
echo Adding all files...
git add .

REM Commit
echo Committing changes...
git commit -m "Add Ravefolio portfolio website with 3D animations and interactive profile panel"

REM Set main branch
echo Setting main branch...
git branch -M main

REM Push to GitHub
echo Pushing to GitHub...
echo.
echo NOTE: You will be prompted for GitHub credentials.
echo Username: Rishav2230
echo Password: Use a Personal Access Token (not your GitHub password)
echo Create token at: https://github.com/settings/tokens
echo.
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Push failed!
    echo Make sure you have:
    echo 1. Created a Personal Access Token at https://github.com/settings/tokens
    echo 2. Used the token as your password (not your GitHub password)
    echo 3. Have write access to the repository
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo SUCCESS! Project pushed to GitHub!
    echo View at: https://github.com/Rishav2230/portfolio
    echo ========================================
)

pause

