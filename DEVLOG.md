# NVRisk Pro — DevLog & Project Database

> **Author:** Utepov Timur  
> **Project:** Noise & Vibration Risk Analysis PWA  
> **Original:** 2019 (UWL Final Year Project)  
> **Rebuilt:** 2026  
> **Live:** https://timson974.github.io/pwa-app/

---

## 📖 Project History

| Version | Date | Description |
|---------|------|-------------|
| v1.0 | 2019 | Original React.js PWA — UWL Final Year Project |
| v2.0 | Nov 2026 | Full rebuild — zero dependencies, dark theme, new icons |

---

## 🎓 Original Project (v1.0 — 2019)

**University:** University of West London (UWL)  
**Method:** Prototyping → Waterfall → Risk Assessment  
**Tech stack:** React.js, GitHub Pages (gh-pages branch)  
**Tools used:** Noise meter, Vibration meter  

**What it did:**
- Measured noise (dB) and vibration (m/s²) across 7 UWL campus locations
- QRA: Quantitative Risk Analysis (Probability × Impact)
- QFRA: Qualitative Factor Risk Analysis
- Bar chart and Pie chart of results
- Recommended PPE based on OHS standards
- Compared to OHS threshold values (EAV/ELV)

**Research locations (UWL campus):**

| # | Location | Noise dB | Vibration m/s² |
|---|----------|----------|----------------|
| 1 | Library, Level 1 | 48 | 0.8 |
| 2 | Library, Level 2 | 52 | 1.1 |
| 3 | Library, Level 3 | 38 | 0.2 |
| 4 | Printing Area / Street | 78 | 2.4 |
| 5 | Classroom, Floor 3 | 62 | 1.6 |
| 6 | Canteen | 71 | 1.9 |
| 7 | Back Yard | 84 | 2.9 |

---

## 🏗️ Architecture (v2.0)

```
pwa-app/
├── index.html          # Full app — HTML + CSS + JS (zero dependencies)
├── manifest.json       # PWA manifest — installable on Android/iOS
├── sw.js               # Service Worker — offline mode
├── DEVLOG.md           # This file — project database
└── icons/
    ├── icon-192.png          # Circular icon (purpose: any)
    ├── icon-512.png          # Circular icon (purpose: any)
    ├── icon-192-maskable.png # Square icon (purpose: maskable)
    └── icon-512-maskable.png # Square icon (purpose: maskable)
```

---

## 🎨 Design System

### CSS Variables
```css
--bg:       #0a0c14   /* Main background */
--surface:  #13161f   /* Card background */
--surface2: #1a1e2e   /* Input background */
--accent:   #6366f1   /* Indigo — primary */
--accent2:  #a5b4fc   /* Lavender — secondary */
--danger:   #ef4444   /* Red — high risk */
--warn:     #f59e0b   /* Amber — medium risk */
--ok:       #22c55e   /* Green — low risk */
--text:     #e2e8f0   /* Primary text */
--muted:    #64748b   /* Secondary text */
--border:   #1e2235   /* Border color */
```

### Icon Design
- **Style:** Sound waves radiating from TU monogram
- **TU monogram:** T in indigo (#6366f1), U in lavender (#a5b4fc)
- **Background:** Deep navy gradient (#050f1e → #0f1a2d)
- **Accent:** Red danger dot (top right)
- **Generated with:** Python PIL (Pillow)
- **Sizes:** 192px and 512px, circular (any) + square (maskable)

---

## ⚙️ Technical Details

### PWA Manifest
```json
{
  "name": "NVRisk Pro — Noise & Vibration Analysis",
  "short_name": "NVRisk Pro",
  "display": "standalone",
  "background_color": "#0a0c14",
  "theme_color": "#0a0c14",
  "icons": [
    { "src": "icons/icon-192.png", "purpose": "any" },
    { "src": "icons/icon-512.png", "purpose": "any" },
    { "src": "icons/icon-192-maskable.png", "purpose": "maskable" },
    { "src": "icons/icon-512-maskable.png", "purpose": "maskable" }
  ]
}
```

**Key fix:** Separate `any` and `maskable` entries (not combined) — required for Samsung One UI to show correct icon.

### Service Worker
- Cache-first strategy
- Caches all static assets on install
- Fallback to index.html on network error
- Auto-updates on new deploy

### i18n
- Currently English only
- Structure ready for RU/PL expansion (same pattern as ZhazTim)

---

## 📊 Risk Calculation Logic

### QRA (Quantitative Risk Analysis)
```
Risk Score = Probability (1-5) × Impact (1-5)
Max score = 25

Low:       1–4   (green)
Medium:    5–9   (amber)
High:      10–25 (red)
```

### QFRA (Qualitative Risk Analysis)
```
Inputs: Location + Noise dB + Vibration m/s² + Exposure duration
Output: Low / Medium / High / Very High + action list
```

### OHS Thresholds
| Standard | Noise | Vibration (HAV) |
|----------|-------|-----------------|
| EAV (Action Value) | 80 dB(A) | 2.5 m/s² |
| ELV (Limit Value) | 87 dB(A) | 5.0 m/s² |

---

## 🐛 Known Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Old React app still on gh-pages | Separate branch | master branch now serves new app |
| Icon showed github.com favicon | Shared domain | Each repo gets own path on github.io |

---

## 🚀 Future Roadmap

- [ ] Real-time microphone measurement (Web Audio API)
- [ ] Export results to PDF report
- [ ] Save measurement history (localStorage)
- [ ] Multi-language support (RU, PL)
- [ ] Comparison mode — before/after PPE
- [ ] Noise map visualization (canvas)
- [ ] Link with ZhazTim — unified TU portfolio

---

## 🔗 Related Projects

| Project | URL | Description |
|---------|-----|-------------|
| ZhazTim Baker Pro | https://timson974.github.io/zhaztim | Professional baker knowledge base |
| NVRisk Pro | https://timson974.github.io/pwa-app | Noise & Vibration Risk Analysis |

---

*© 2019–2026 Utepov Timur · Built with zero dependencies · Hosted on GitHub Pages*
