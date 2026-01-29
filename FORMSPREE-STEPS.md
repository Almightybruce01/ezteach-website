# Formspree Contact Form — Exact Steps

**We use FormGrid for the contact form.** See **FORMGRID-STEPS.md** for setup. The below is for reference only if you switch to Formspree.

Use this **only** for the **contact form** on the website. Formspree does **not** send signup, password-reset, or payment emails.

---

## Step 1 — Open Formspree

1. Open your browser.
2. Go to: **https://formspree.io**
3. You should see the Formspree homepage.

---

## Step 2 — Sign Up or Log In

1. Click **“Get Started”** or **“Sign Up”** (top right).
2. Sign up with **Google** or **Email**.
3. Complete signup if needed.
4. You should land on your **Formspree Dashboard** (list of forms, or empty).

---

## Step 3 — Create a New Form

1. Click **“+ New Form”** or **“New Form”** (primary button).
2. **Form name:** type `EZTeach contact` (or any name you like).
3. Click **“Create Form”** or **“Create”**.
4. Formspree creates the form and shows you the form page.

---

## Step 4 — Copy Your Form ID

1. On the form’s page, look for the **form endpoint** or **integration** section.
2. You’ll see a URL like:  
   **`https://formspree.io/f/abcdefgh`**  
   The part **after** `/f/` is your **Form ID** (e.g. `abcdefgh`).
3. **Copy** that Form ID (e.g. `abcdefgh`).  
   - Or copy the **full URL** and use everything after `/f/` as the ID.

---

## Step 5 — Put the Form ID in Your Website

1. On your Mac, open the project folder:  
   **`/Users/brianbruce/Desktop/EZTeach/ezteach-website`**
2. Open **`index.html`** in a text editor (e.g. VS Code, Cursor, TextEdit).
3. Use **Find** (Ctrl+F or Cmd+F) and search for:  
   **`YOUR_FORMSPREE_FORM_ID`**
4. **Replace** `YOUR_FORMSPREE_FORM_ID` with your actual Form ID (e.g. `abcdefgh`).  
   - The line should look like:  
     `action="https://formspree.io/f/abcdefgh"`  
     (with your real ID instead of `abcdefgh`).
5. **Save** the file.

---

## Step 6 — Optional: Set Email Notifications

1. In Formspree, open your **EZTeach contact** form.
2. Look for **“Notifications”**, **“Email”**, or **“Form Settings”**.
3. Add **support@ezteach.org** (or your email) so you get an email when someone submits the form.

---

## Step 7 — Test the Form

**Important:** The form must be served over **https://** (or **http://**), not opened as a **file://** link. Otherwise you can get “Form not found” or odd behavior.

1. **Option A — Live site (Netlify)**  
   - Push your changes to GitHub and let Netlify deploy.  
   - Open **https://ezteach.org** (or your Netlify URL) → scroll to **Contact** → submit a test.

2. **Option B — Local server**  
   - In Terminal:  
     `cd /Users/brianbruce/Desktop/EZTeach/ezteach-website`  
     `python3 -m http.server 8080`  
   - In browser: **http://localhost:8080** → go to **Contact** → submit a test.

3. Submit **Email** + **Message** → click **Send**.
4. You should be redirected to Formspree’s **“Thank you”** page (or your custom redirect if you set one).
5. In Formspree **Dashboard** → your form → **Submissions**: your test should appear.

---

## Step 8 — If You See “Form not found” or Get Sent to Formspree

- **Wrong or old Form ID**  
  - Double‑check you replaced `YOUR_FORMSPREE_FORM_ID` with the **exact** ID from Formspree (no spaces, correct spelling).  
  - Confirm you’re editing the **saved** `index.html` that’s actually deployed or served.

- **Testing as file://**  
  - Don’t open `index.html` directly from the folder (file://). Use a **local server** (Step 7B) or your **live** site.

- **Form deleted**  
  - In Formspree, make sure the form still exists. If you created a new one, use that form’s new ID in `index.html`.

---

## Quick Checklist

| # | What to do |
|---|------------|
| 1 | Go to **https://formspree.io** → Sign up / Log in. |
| 2 | Click **“+ New Form”** → Name: **EZTeach contact** → Create. |
| 3 | Copy the **Form ID** (the part after `/f/` in the form URL). |
| 4 | In **`index.html`**, Find **`YOUR_FORMSPREE_FORM_ID`** → Replace with your Form ID → Save. |
| 5 | Optional: In Formspree, set **Notifications** / **Email** → **support@ezteach.org**. |
| 6 | Test on **https://** or **http://localhost** (not file://). |

---

**Form ID placeholder in `index.html`:**  
`YOUR_FORMSPREE_FORM_ID`  
Replace it with the Form ID from Formspree (e.g. `xyzabc12`).
