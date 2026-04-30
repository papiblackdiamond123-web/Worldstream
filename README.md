# 📡 WorldStream — Live TV & Radio From Every Nation

A professional, AdSense-ready live TV and radio streaming website covering 30+ countries.

## 🌟 Features
- **50+ TV channels** (CNN, BBC, NHK, Al Jazeera, France 24, DW, and more)
- **25+ Radio stations** (NPR, BBC Radio, RFI, CBC, ABC Australia, and more)
- **30+ Countries** — high-CPC markets (USA, UK, Canada, AU, DE, JP...) + high-population (India, China, Brazil, Nigeria...)
- Google AdSense ready (3 ad zones per page)
- SEO optimized (meta tags, Open Graph, sitemap-ready)
- Responsive design — mobile, tablet, desktop
- Search, filter by category, continent, type
- Fast React SPA with React Router
- Vercel-ready with vercel.json

## 🚀 Deploy in 5 Minutes

### Step 1: Push to GitHub

```bash
# In the project folder
git init
git add .
git commit -m "Initial commit - WorldStream"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/worldstream.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `worldstream` repository
4. Framework Preset: **Create React App** (auto-detected)
5. Click **Deploy** ✅

Your site will be live at `https://worldstream.vercel.app` in ~2 minutes!

### Step 3: Add Google AdSense

1. Apply at [adsense.google.com](https://adsense.google.com)
2. Once approved, get your Publisher ID (format: `ca-pub-XXXXXXXXXX`)
3. In `public/index.html`, uncomment and update the AdSense script tag:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID" crossorigin="anonymous"></script>
   ```
4. In `src/components/AdUnit.js`, replace `ca-pub-XXXXXXXXXX` with your real publisher ID
5. Replace `YOUR_AD_SLOT_ID` with your actual ad slot IDs from AdSense dashboard

### Step 4: Custom Domain (Optional)

In Vercel project settings → Domains → Add your domain (e.g. `worldstream.tv`)

## 📁 Project Structure

```
worldstream/
├── public/
│   ├── index.html          # AdSense script tag goes here
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.js/css
│   │   ├── Footer.js/css
│   │   ├── StationCard.js/css
│   │   └── AdUnit.js       # AdSense components
│   ├── data/
│   │   └── stations.js     # All TV/radio station data
│   ├── pages/
│   │   ├── HomePage.js     # Landing page
│   │   ├── TVPage.js       # TV channel listing
│   │   ├── RadioPage.js    # Radio station listing
│   │   ├── CountriesPage.js
│   │   ├── CountryPage.js  # Per-country page
│   │   ├── WatchPage.js    # Player page
│   │   └── StaticPages.js  # About, Contact, Privacy
│   ├── App.js
│   └── index.js
├── vercel.json             # Vercel SPA routing config
└── package.json
```

## ➕ Adding New Stations

Edit `src/data/stations.js` and add to `TV_STATIONS` or `RADIO_STATIONS`:

```js
{
  id: "tv-mystation",          // unique ID
  name: "My Station",
  country: "US",               // ISO country code
  category: "news",            // news|business|music|talk|science|entertainment
  type: "tv",                  // tv | radio
  logo: "📺",
  embedUrl: "https://...",     // YouTube embed for TV
  // streamUrl: "https://...", // MP3/M3U8 stream URL for radio
  description: "Station description"
}
```

## 💰 AdSense Tips for Approval

- Add original "About", "Contact", and "Privacy Policy" pages ✅
- Site must have substantial content ✅
- Must have clear navigation ✅
- robots.txt in place ✅
- HTTPS (Vercel provides this automatically) ✅
- No copyrighted content on site ✅

## 📊 Ad Placement

| Page | Ad Units |
|------|----------|
| Home | Leaderboard (top + bottom), Banner (mid) |
| TV/Radio | Leaderboard (hero), Banner (in grid every 12) |
| Watch | Rectangle (sidebar), Banner (below player) |
| All | Banner in hero areas |

## 🔧 Local Development

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

## 📝 License

MIT — Free to use, modify, and deploy commercially.
