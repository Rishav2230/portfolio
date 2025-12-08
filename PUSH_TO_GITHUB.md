# Push Portfolio to GitHub - Step by Step Guide

Your repository: **https://github.com/Rishav2230/portfolio.git**

## Option 1: Using GitHub Desktop (Easiest - Recommended)

1. **Download GitHub Desktop**
   - Go to: https://desktop.github.com/
   - Download and install GitHub Desktop

2. **Clone your repository**
   - Open GitHub Desktop
   - Click "File" → "Clone Repository"
   - Go to "URL" tab
   - Paste: `https://github.com/Rishav2230/portfolio.git`
   - Choose a local path (e.g., `C:\Users\Risha_mi7y0fy\Downloads\portfolio`)
   - Click "Clone"

3. **Copy your project files**
   - Copy ALL files from `C:\Users\Risha_mi7y0fy\Downloads\Ravefolio-Live\Ravefolio-Live` 
   - Paste them into the cloned repository folder (except `.git` folder)

4. **Commit and Push**
   - Open GitHub Desktop
   - You'll see all your files listed
   - Write commit message: "Add Ravefolio portfolio website"
   - Click "Commit to main"
   - Click "Push origin" button

## Option 2: Using Git Command Line

### Step 1: Install Git

1. Download Git for Windows: https://git-scm.com/download/win
2. Install with default settings
3. **Restart PowerShell** after installation

### Step 2: Navigate to Project

```powershell
cd "C:\Users\Risha_mi7y0fy\Downloads\Ravefolio-Live\Ravefolio-Live"
```

### Step 3: Initialize Git (if not already done)

```powershell
git init
```

### Step 4: Add Remote Repository

```powershell
git remote add origin https://github.com/Rishav2230/portfolio.git
```

### Step 5: Add All Files

```powershell
git add .
```

### Step 6: Commit

```powershell
git commit -m "Add Ravefolio portfolio website with 3D animations and interactive profile panel"
```

### Step 7: Set Main Branch

```powershell
git branch -M main
```

### Step 8: Push to GitHub

```powershell
git push -u origin main
```

**Note:** You'll be prompted for GitHub credentials:
- Username: `Rishav2230`
- Password: Use a **Personal Access Token** (not your GitHub password)
  - Create token at: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Select `repo` scope
  - Copy the token and use it as password

## Option 3: Using VS Code (If you have VS Code)

1. Open VS Code
2. Open folder: `C:\Users\Risha_mi7y0fy\Downloads\Ravefolio-Live\Ravefolio-Live`
3. Click Source Control icon (left sidebar)
4. Click "Initialize Repository"
5. Click "..." menu → "Remote" → "Add Remote"
6. Name: `origin`, URL: `https://github.com/Rishav2230/portfolio.git`
7. Stage all files (click "+" next to files)
8. Write commit message
9. Click "Commit"
10. Click "..." → "Push" → "Push to..."

## Troubleshooting

### If you get "repository already exists" error:

```powershell
git remote remove origin
git remote add origin https://github.com/Rishav2230/portfolio.git
```

### If you get authentication errors:

Use Personal Access Token instead of password:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Copy token and use as password

### If files are too large:

The repository already has a `.gitignore` file that excludes:
- `node_modules/` (don't push this)
- `dist/` (build files)
- Other unnecessary files

---

**Recommended:** Use **GitHub Desktop** (Option 1) - it's the easiest and most user-friendly!
