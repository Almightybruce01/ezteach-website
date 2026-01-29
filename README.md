# EZTeach Website

Landing site for EZTeach: **same Firebase project** as the app, **login** (Firebase Auth web), **dashboard** (download iOS/Mac), and **logo** throughout. Hosted free on Netlify + GitHub; optional custom domain ~$12/year.

---

## What’s included

- **Logo** — Your app logo in header, footer, login, favicon.
- **Login** — `login.html`: email/password via **Firebase Auth (web)**. Same users as the iOS app.
- **Dashboard** — `dashboard.html`: after sign-in, links to **Download iOS** and **Download Mac** (desktop).
- **Desktop app** — **Mac Catalyst** enabled in the Xcode project. Same codebase; run on Mac.

---

## Quick start (local)

```bash
cd ezteach-website
python3 -m http.server 8080
```

Open `http://localhost:8080`. Login/dashboard require **Firebase web config** (see below).

---

## 1. Firebase Web config (for login)

Login and dashboard use **Firebase Auth (web)** — same project as your iOS app.

1. [Firebase Console](https://console.firebase.google.com) → your project (e.g. **ezteach-cdf5c**).
2. **Project settings** (gear) → **General** → **Your apps**.
3. Click **</>** (Add app) → **Web**.
4. Register app (e.g. nickname "EZTeach Web"). Copy the `firebaseConfig` object.
5. Open `firebase-config.js` and **replace** the placeholder with your config:

```js
window.APP_FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "ezteach-cdf5c.firebaseapp.com",
  projectId: "ezteach-cdf5c",
  storageBucket: "ezteach-cdf5c.firebasestorage.app",
  messagingSenderId: "749802668538",
  appId: "1:749802668538:web:..."
};
```

6. Ensure **Email/Password** sign-in is enabled: **Authentication** → **Sign-in method** → **Email/Password** → Enable.

---

## 2. Before you deploy: update these

| File | Change |
|------|--------|
| `firebase-config.js` | Your Firebase **web** config (see above). |
| `index.html` | App Store URL: replace `https://apps.apple.com/app/ezteach/idXXXXXXXXX` with your real link. |
| `index.html` | Contact form: [FormGrid](https://formgrid.dev) embed. See **FORMGRID-STEPS.md**. Change iframe `src` only if you use a different form. |
| `privacy.html` | Replace `[DATE]` with last-updated date. |
| `index.html` / contact | Support email `support@ezteach.org` (or yours). |

---

## 3. Upload to GitHub

1. [github.com](https://github.com) → **New repository**
2. **Name:** `ezteach-website` · **Public** · **Create** (no README/.gitignore)
3. **Add file** → **Upload files**
4. Drag: `index.html`, `login.html`, `dashboard.html`, `privacy.html`, `support.html`, `styles.css`, `app.js`, `firebase-config.js`, `netlify.toml`, `logo.png`
5. **Commit changes**

---

## 4. Deploy on Netlify (free)

1. [netlify.com](https://www.netlify.com) → **Sign up** → **Continue with GitHub**
2. **Add new site** → **Import an existing project** → **GitHub** → select `ezteach-website`
3. **Build command:** leave **empty** · **Publish directory:** `/`
4. **Deploy site**

Site is live at `https://ezteach-website.netlify.app` (or your custom domain).

---

## 5. Custom domain (optional, ~$12/year)

1. Buy a domain (e.g. [Namecheap](https://www.namecheap.com)): `ezteach.com`, `ezteach.app`, etc.
2. Netlify → **Site settings** → **Domains** → **Add domain** → `ezteach.com`
3. In registrar **DNS**: add **A** `@` → Netlify LB (e.g. `75.2.60.5`); **CNAME** `www` → `yoursite.netlify.app`
4. Netlify provisions **HTTPS** automatically.

---

## 6. Connect website ↔ app

| Where | URL |
|-------|-----|
| **App Store Connect** — Support | `https://yourdomain.com/support.html` |
| **App Store Connect** — Marketing | `https://yourdomain.com` |
| **App Store Connect** — Privacy | `https://yourdomain.com/privacy.html` |
| **Stripe / banks** — Business site | `https://yourdomain.com` |

---

## 7. Mac Catalyst (desktop app) — same Xcode project

**Mac Catalyst** is already enabled in the EZTeach Xcode project. Same Swift codebase; runs on Mac.

1. Open **EZTeach.xcodeproj** in Xcode.
2. Select the **EZTeach** target.
3. **General** → **Destinations**: ensure **My Mac (Mac Catalyst)** is listed.
4. Choose **My Mac** as run destination.
5. **Product** → **Run** to build and run on Mac.

To distribute:

- **TestFlight:** Add Mac as a destination when uploading the build.
- **App Store:** Submit the Mac version; users install from the Mac App Store.

---

## 8. FormGrid (contact form)

See **FORMGRID-STEPS.md** in this folder.

1. Contact form uses the **FormGrid embed** (iframe). No form ID to paste — already wired.
2. **Keep & deploy** your site changes (GitHub → Netlify).
3. **Test** on **https://** or **http://localhost** (not **file://**).
4. In FormGrid (formgrid.dev or formgrid.com), open your form → **Submissions** to see responses.
5. Optional: form **settings** → **Email** / **Sheets** / **Webhook** → e.g. **support@ezteach.org**.

---

## Cost summary

| Item | Cost |
|------|------|
| GitHub | $0 |
| Netlify | $0 |
| SSL | $0 |
| Domain | ~$12/year |
| **Total** | **~$12/year** |

---

## File structure

```
ezteach-website/
├── index.html         # Homepage
├── login.html         # Sign in (Firebase Auth web)
├── dashboard.html     # Post-login: Download iOS / Mac
├── privacy.html       # Privacy policy
├── support.html       # Support & help
├── styles.css         # Styles
├── app.js             # Nav, scroll, reveal
├── firebase-config.js # Firebase web config (you fill in)
├── logo.png           # EZTeach logo
├── netlify.toml       # Publish dir + redirects
└── README.md          # This file
```

---

## Production checklist

- [ ] Firebase web config in `firebase-config.js`
- [ ] Email/Password auth enabled in Firebase
- [ ] App Store URL in **Download** button
- [ ] FormGrid embed live (contact form); optional email notifications set
- [ ] Support email and privacy date updated
- [ ] Custom domain (optional) and App Store Connect URLs set
- [ ] Mac Catalyst build tested on My Mac

---

## Promo codes (reference)

- Use **complex, private** codes (see **SETUP_STEPS.md** §4.3). Don’t publish on the website.
- Example IDs: `EZT6X7K2M9QPN4LR` (100% off yearly), `EZT4Y9N2QR7LKP3M` (25% off yearly).  
