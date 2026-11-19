# My Portfolio (React + Vite)

## 1. Run කරන හැටි
```
npm install
npm run dev
```
Browser එකේ පෙන්නන link එක (සාමාන්‍යයෙන් http://localhost:5173/my-portfolio/) open කරන්න.

## 2. ඔයාගේ විස්තර දාන්න
`src/data.js` file එක open කරලා නම, intro, projects, email වෙනස් කරන්න. Save කළාම page එක ඉබේම update වෙනවා.

## 3. GitHub එකට දාන්න
1. github.com එකේ `my-portfolio` කියලා අලුත් repo එකක් හදන්න (README, .gitignore එකතු කරන්න එපා).
2. Terminal එකේ:
```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
git push -u origin main
```

## 4. Online දාන්න (GitHub Pages)
```
npm run deploy
```
ඊට පස්සේ GitHub repo එකේ Settings > Pages > Branch: `gh-pages` තෝරන්න.
විනාඩි කීපයකින් ඔයාගේ site එක https://YOUR-USERNAME.github.io/my-portfolio/ එකේ පේනවා.

Repo එකට වෙන නමක් දුන්නොත් `vite.config.js` එකේ `base` එකත් ඒ නමට වෙනස් කරන්න.
