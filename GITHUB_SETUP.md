# GitHub Setup Instructions

Follow these steps to push your project to GitHub:

## Step 1: Install Git (if not installed)

Download and install Git from: https://git-scm.com/download/win

After installation, restart your terminal/PowerShell.

## Step 2: Initialize Git Repository

Open PowerShell in your project directory and run:

```bash
git init
```

## Step 3: Add All Files

```bash
git add .
```

## Step 4: Create Initial Commit

```bash
git commit -m "Initial commit: Ravefolio portfolio website"
```

## Step 5: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `ravefolio` (or any name you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 6: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ravefolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 7: Verify

Visit your GitHub repository URL to see your code online!

---

## Troubleshooting

### If you get authentication errors:

1. Use GitHub Personal Access Token instead of password:
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select `repo` scope
   - Copy the token
   - Use it as password when pushing

### If git is still not recognized:

1. Make sure Git is installed
2. Restart your terminal/PowerShell
3. Try using Git Bash instead of PowerShell

