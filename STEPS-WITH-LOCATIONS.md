# EZTeach Setup — Exact Steps (Where You Are on Each Step)

Every step below says **where you should be** (which app, site, or folder) before you do it.

---

## Step 0 — Git & GitHub (website repo)

Do this **first** if you get **`fatal: not a git repository`** when you run `git push` from `ezteach-website`. It sets up git and a GitHub repo so you can push and deploy via Netlify.

**Where you are:** **Terminal** on your **Mac**

1. Open **Terminal**. Run:
   ```bash
   cd /Users/brianbruce/Desktop/EZTeach/ezteach-website
   git init
   git add -A
   git commit -m "Initial commit — EZTeach website"
   ```
2. **Where you go next:** **https://github.com** in your **browser**.

3. On GitHub: **Log in** → click **+** (top right) → **New repository**.
4. **Repository name:** `ezteach-website` (or another name you prefer).
5. **Public** → leave **Add a README** unchecked → **Create repository**.
6. GitHub shows “quick setup” commands. You need the **remote URL**. It looks like:
   - **HTTPS:** `https://github.com/YOUR_USERNAME/ezteach-website.git`
   - **SSH:** `git@github.com:YOUR_USERNAME/ezteach-website.git`  
   Use **YOUR** GitHub username. Copy that URL.

7. **Where you are:** **Terminal** again (still in `ezteach-website`). Run (replace with **your** repo URL):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/ezteach-website.git
   git branch -M main
   git push -u origin main
   ```
   If GitHub prompts for login, use your GitHub username and a **Personal Access Token** (not your password). Create one: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Generate new token**.

8. After **push** succeeds, the `ezteach-website` folder is a git repo and GitHub has your site files. You can continue with **FormGrid Step 1** (deploy via Netlify).

---

## FormGrid (contact form)

FormGrid is **only** for the website contact form. Not for signup, password-reset, or payment emails.

---

### FormGrid Step 1 — Keep changes and deploy

**Where you are:** Your **Mac** (Cursor/VS Code or Finder) → folder **`/Users/brianbruce/Desktop/EZTeach/ezteach-website`**

**If you got `fatal: not a git repository`:** do **Step 0** above first, then come back here.

1. **Save** `index.html` and `styles.css` (FormGrid embed is already in the contact section).
2. Open **Terminal** (or Cursor terminal). Run (only if **Step 0** is done — you already have `git init` and `origin`):
   ```bash
   cd /Users/brianbruce/Desktop/EZTeach/ezteach-website
   git add -A && git commit -m "FormGrid contact form" && git push
   ```
3. **Where you go next:** **https://app.netlify.com** (Netlify dashboard).

4. In Netlify: **Sites** → your **ezteach** site → **Deploys**. Wait until the latest deploy shows **Published** (or **Building** → **Published**).

5. **Where you go next:** Your **live site** — **https://ezteach.org** (or your Netlify URL, e.g. `https://yoursite.netlify.app`).

6. On the live site, scroll to the **Contact** section. You should see the FormGrid form (Email, Message, Submit).

---

### FormGrid Step 2 — Test the form

**Where you are:** **https://ezteach.org** (or your live site URL) in your **browser**

1. Scroll to **Contact**.
2. You should see the FormGrid form (Email, Message, Submit).
3. Enter a **test email** and **message** → click **Submit**.
4. Confirm you get a success message or that it submits without error.

**Important:** Test on **https://** (live) or **http://localhost** (local server). **Do not** open `index.html` as a **file** (`file://`).

---

### FormGrid Step 3 — Find submissions

**Where you are:** **https://formgrid.dev** in your **browser** (or **https://formgrid.com** if you use that)

1. **Go to** **https://formgrid.dev** → **Log in**.
2. You should see **Dashboard** or **Forms**.
3. Click your **EZTeach contact** form (or the form that matches **https://share.formgrid.com/KJRfUkF4NMnWlHhQ**).
4. Look for **Submissions**, **Responses**, or **Data** and open it. Your test submission should be there.

**If you use formgrid.com instead:** **https://formgrid.com** → log in → **Forms** → your form → **Submissions** (or similar).

---

### FormGrid Step 4 — Optional: email, Sheets, webhook

**Where you are:** **https://formgrid.dev** (or **formgrid.com**) → **your form** → **Settings** / **Configure** / **Integrations**

1. Stay in FormGrid, on the **form you use** for EZTeach contact.
2. Open **Settings**, **Configure**, or **Integrations** (or **Connect**).
3. Look for **Email**, **Notifications**, **Google Sheets**, or **Webhook**.
4. For **email:** add **support@ezteach.org** (or your email) so you get an email when someone submits.

---

### FormGrid Step 5 — If you create a *new* form

**Where you are:** **https://formgrid.dev** in your **browser**

1. **Go to** **https://formgrid.dev** → sign up / log in.
2. **Create form** → choose **“From scratch”** or **“Start with AI”**.
3. Add **Email** and **Message** fields (required). Use names `email` and `message`.
4. Save → go to **Share** or the form’s share page.
5. Copy the **embed URL** (e.g. `https://share.formgrid.com/embed/XXXXXX`). The part after `/embed/` is the form ID.
6. **Where you go next:** **Your Mac** → **`/Users/brianbruce/Desktop/EZTeach/ezteach-website/index.html`** in your editor.
7. Find the iframe `src="https://share.formgrid.com/embed/KJRfUkF4NMnWlHhQ"` and replace **KJRfUkF4NMnWlHhQ** with your **new** form ID.
8. Save → commit → push (GitHub) → wait for Netlify to deploy.

---

## Full production steps (1–8) — with locations

---

### Step 1 — FormGrid (contact form)

**Where you are:**  
- **Mac** → `ezteach-website` folder (for deploy); **https://ezteach.org** (to test); **https://formgrid.dev** (to check submissions).

- Contact form uses the **FormGrid embed**. Embed URL: `https://share.formgrid.com/embed/KJRfUkF4NMnWlHhQ` (already in `index.html`).
- **Keep & deploy** (GitHub → Netlify). **Test** on **https://ezteach.org** → Contact.
- **FormGrid:** **https://formgrid.dev** (or formgrid.com) → your form → **Submissions**.
- Optional: form **settings** → **Email** / **Sheets** / **Webhook** → e.g. **support@ezteach.org**.

---

### Step 2 — Stripe (subscriptions)

**Where you are:** **https://dashboard.stripe.com** in your **browser**

1. **Go to** **https://dashboard.stripe.com** → log in (or sign up).
2. **Products** → **Add product**.
3. **School monthly:** name, **$75/month** recurring → **Add price** → copy **Price ID** (e.g. `price_xxx`).
4. **Add product** again → **School yearly:** **$575/year** recurring → **Add price** → copy **Price ID**.
5. **Developers** (left sidebar) → **Webhooks** → **Add endpoint**.
6. **Endpoint URL:** your `stripeWebhook` Cloud Function URL (e.g. `https://us-central1-ezteach-cdf5c.cloudfunctions.net/stripeWebhook` — use your project).
7. **Events to send:** `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.deleted` → **Add endpoint**.
8. Open the new webhook → **Signing secret** → **Reveal** → copy (`whsec_...`).

**Where you go next:** **Terminal** on your **Mac**

9. **Go to** Terminal. Run:
   ```bash
   cd /Users/brianbruce/Desktop/EZTeach
   firebase functions:config:set stripe.secret_key="sk_live_..."
   firebase functions:config:set stripe.webhook_secret="whsec_..."
   firebase deploy --only functions
   ```
   (Use your real Stripe **secret key** and **webhook signing secret**.)

10. **Where you are:** **Mac** → **`/Users/brianbruce/Desktop/EZTeach/functions/index.js`** in your editor.  
    Ensure `createCheckoutSession` (and district checkout, if used) use your **Price IDs** from Stripe.

---

### Step 3 — Firebase (Auth, Firestore, Storage)

**Where you are:** **https://console.firebase.google.com** in your **browser**

1. **Go to** **https://console.firebase.google.com** → select your project (e.g. **ezteach-cdf5c**).
2. **Authentication** → **Sign-in method** → **Email/Password** → **Enable** → **Save**.

**Where you are:** **Terminal** on your **Mac**

3. **Go to** Terminal:
   ```bash
   cd /Users/brianbruce/Desktop/EZTeach
   firebase deploy --only firestore:rules
   firebase deploy --only storage
   ```

---

### Step 4 — Promo codes (Firestore)

**Where you are:** **https://console.firebase.google.com** → **Firestore Database** in your **browser**

1. **Go to** **https://console.firebase.google.com** → your project → **Firestore Database**.
2. **Start collection** (or **Add collection**) → **Collection ID:** `promoCodes` → **Next**.
3. **Document ID:** `EZT6X7K2M9QPN4LR`.  
   **Fields:**  
   - `isActive` (boolean) **true**  
   - `yearlyOnly` (boolean) **true**  
   - `discountPercent` (number) **1**  
   - `description` (string) **100% off yearly**  
   → **Save**.
4. **Add document** → **Document ID:** `EZT4Y9N2QR7LKP3M`.  
   **Fields:**  
   - `isActive` **true**, `yearlyOnly` **true**, `discountPercent` **0.25**, `description` **25% off yearly**  
   → **Save**.
5. Keep these codes **private**. One use per school/account, **yearly** only.

---

### Step 5 — District subscriptions (flow)

**Where you are:** **In the EZTeach app** (iOS/Mac) as a **district** user

- Flow: District name → **Add schools** (link by 6‑digit code or create new) → Pay.
- Link existing: enter code; if school has **districtId**, show “Already in another district.”
- Create new: “Create new school” → form → school created with code → add to list.
- **onDistrictCreated** Cloud Function links schools and owner when the district doc is created. No extra dashboard step.

---

### Step 6 — Website (ezteach.org)

**Where you are:**  
- **Mac** → **`/Users/brianbruce/Desktop/EZTeach/ezteach-website`** (files);  
- **https://github.com** (repo);  
- **https://app.netlify.com** (deploy);  
- **https://ezteach.org** (live site).

1. **`firebase-config.js`** in `ezteach-website`: your Firebase **web** config (from Firebase Console → Project settings → Your apps → Web).
2. **Pricing** on site: **$75/mo**, **$575/yr**; generic promo note; **no** codes on public pages.
3. **Contact form:** FormGrid embed (already in `index.html`).
4. **Deploy:** Push `ezteach-website` to **GitHub** → Netlify builds from that repo. Updates go live when you push.

---

### Step 7 — App Store Connect

**Where you are:** **https://appstoreconnect.apple.com** in your **browser**

1. **Go to** **https://appstoreconnect.apple.com** → log in.
2. **My Apps** → your **EZTeach** app.
3. **App Information** (or **General**) → set:
   - **Support URL:** **https://ezteach.org/support.html**
   - **Marketing URL:** **https://ezteach.org**
   - **Privacy Policy URL:** **https://ezteach.org/privacy.html**

---

### Step 8 — Production checklist

**Where you are:** mix of **Mac** (code), **FormGrid**, **Stripe**, **Firebase**, **Netlify**, **App Store Connect** — as in the steps above.

- [ ] **FormGrid:** Embed in `index.html`; keep & deploy; optional email → **support@ezteach.org**.
- [ ] **Firebase:** Web config in `firebase-config.js`; **Email/Password** auth enabled.
- [ ] **Stripe:** **$75/mo** and **$575/yr** products/prices; webhook + config; **functions** deployed.
- [ ] **Firebase rules:** `firebase deploy --only firestore:rules` and `firebase deploy --only storage`.
- [ ] **Promo codes:** In **`promoCodes`** in Firestore; kept **private**.
- [ ] **District flow:** Add schools first, then pay; **onDistrictCreated** deployed.
- [ ] **Website:** **$75/mo**, **$575/yr**; FormGrid contact; **ezteach.org** live via Netlify.
- [ ] **App Store Connect:** Support, Marketing, Privacy URLs → **ezteach.org**.

---

## Quick reference — sites & locations

| Step | Where you are / site to use |
|------|-----------------------------|
| **Step 0 Git** | Terminal (Mac); **https://github.com** → New repo; then Terminal → `git remote` / `git push` |
| **FormGrid 1** | Mac → `ezteach-website` folder; Terminal; **https://app.netlify.com**; **https://ezteach.org** |
| **FormGrid 2** | **https://ezteach.org** (live site) → Contact |
| **FormGrid 3** | **https://formgrid.dev** (or formgrid.com) → your form → Submissions |
| **FormGrid 4** | **https://formgrid.dev** (or formgrid.com) → form → Settings / Integrations |
| **FormGrid 5** | **https://formgrid.dev** → create form; then Mac → `index.html` |
| **Step 2 Stripe** | **https://dashboard.stripe.com**; then Terminal; then `functions/index.js` |
| **Step 3 Firebase** | **https://console.firebase.google.com**; then Terminal |
| **Step 4 Promo** | **https://console.firebase.google.com** → Firestore |
| **Step 5 District** | EZTeach app (iOS/Mac) |
| **Step 6 Website** | Mac `ezteach-website`; **https://github.com**; **https://app.netlify.com**; **https://ezteach.org** |
| **Step 7 App Store** | **https://appstoreconnect.apple.com** |
| **Step 8 Checklist** | All of the above |

---

**Embed URL (FormGrid):** `https://share.formgrid.com/embed/KJRfUkF4NMnWlHhQ`  
**Share link:** `https://share.formgrid.com/KJRfUkF4NMnWlHhQ`
