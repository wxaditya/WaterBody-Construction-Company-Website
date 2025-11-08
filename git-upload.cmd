@echo off
echo -----------------------------------------
echo 🚀 Git Project Uploader by Aditya Nayak
echo -----------------------------------------

:: Ask for repo URL
set /p repo="👉 Enter your GitHub repo URL (e.g. https://github.com/wxaditya/project-name.git): "

:: Initialize git if not already
git rev-parse --is-inside-work-tree >nul 2>&1
if %errorlevel% neq 0 (
    git init
)

:: Add .gitignore if not exists
if not exist ".gitignore" (
    echo node_modules/ > .gitignore
    echo .env >> .gitignore
    echo .DS_Store >> .gitignore
)

:: Stage all files
git add .

:: Commit
git commit -m "Initial commit"

:: Set branch and remote
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %repo%

:: Push to GitHub
git push -u origin main --force

echo -----------------------------------------
echo ✅ Push complete! Check your GitHub repo now.
echo -----------------------------------------
pause
