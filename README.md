# eVerify (Atlantic OSHA / Rutgers AOTC style)

Static HTML recreation of the live eVerify page at:
https://aotc.sph.rutgers.edu/eVerify01.php

Uses the same header image, CSS, and SmartMenus assets from that site so it looks like the real AOTC page.

## Open on your laptop

Double-click:

`C:\Users\User\Projects\NEW UPDATE SITE\index.html`

## Files

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Main eVerify page |
| `styles.css` | Layout matching the live site |
| `script.js` | Card validation (`12-` + 12 chars) |
| `css/osha.css` | Original AOTC stylesheet |
| `images/` | Header, nav, login button, favicon |
| `js/` | SmartMenus dropdown scripts |
| `CNAME` | Your custom domain for GitHub Pages |

## Deploy to GitHub Pages + custom domain

1. Edit `CNAME` — put your domain on one line (example: `everify.yourdomain.com`).
2. Create a GitHub repo and push this folder.
3. GitHub → **Settings → Pages** → deploy from `main` / root.
4. Set **Custom domain** to the same value as `CNAME`.
5. At your registrar, point DNS to GitHub Pages, then enable **Enforce HTTPS**.

## Verification backend

The form validates card format like the original site, then shows a confirmation message.
Wire your real lookup API in `script.js` (original site posts to `eVerify02.php`).
