# FormGrid – Contact Form Setup

**For each step with “where you should be” (which site, app, or folder), see `STEPS-WITH-LOCATIONS.md`.**

FormGrid is used **only** for the website contact form. It does **not** send signup, password-reset, or payment emails.

---

## What’s already done

Your contact form uses the **FormGrid embed**.

- **Embed URL:** `https://share.formgrid.com/embed/KJRfUkF4NMnWlHhQ`
- The Contact section loads this form in an **iframe**. FormGrid hosts it and receives submissions.
- **No API endpoint or form `action`** — embed only.

---

## What you do (step-by-step)

### 1. Keep your changes and deploy

1. **Save** all edits to `index.html` and `styles.css` (FormGrid embed is already in place).
2. **Commit and push** your `ezteach-website` folder to GitHub.
3. Let **Netlify** deploy (auto-deploys if the repo is connected).
4. Open your **live site** (e.g. **https://ezteach.org**) and scroll to **Contact**.

If you don’t keep and deploy these changes, the live site won’t show the FormGrid form.

---

### 2. Test the form

1. On your **live site** (or **http://localhost** if you use a local server), go to the **Contact** section.
2. You should see the FormGrid form (Email, Message, Submit).
3. Enter a test email and message → click **Submit**.
4. Confirm you get a success message or that it submits without error.

**Note:** Test on **https://** or **http://localhost**. Don’t open `index.html` as a **file** (`file://`); that can cause odd behavior.

---

### 3. Find your submissions

FormGrid stores submissions. Where you see them depends on where you manage your form:

- **https://formgrid.dev** (builder/dashboard):
  1. Log in.
  2. Open **Dashboard** or **Forms**.
  3. Click your **EZTeach contact** form (or the form that matches the share link).
  4. Look for **Submissions**, **Responses**, or **Data**.

- **https://formgrid.com** (main app):
  1. Log in.
  2. Go to **Forms** → your form.
  3. Open **Submissions** / **Responses** / **Data**.

- **https://share.formgrid.com/KJRfUkF4NMnWlHhQ** (share page):
  - Some layouts have **View submissions** or a similar link on the share page. Use that if you see it.

---

### 4. Optional: email, Google Sheets, webhook

FormGrid can send **email notifications**, connect **Google Sheets**, or use **webhooks**. Menus vary by product.

- On the form’s **settings** or **configure** page, look for **Connect**, **Integrations**, **Webhook**, **Google Sheets**, or **Notifications** / **Email**.
- For **email**: add **support@ezteach.org** (or your email) so you get an email when someone submits.

---

### 5. If you create a *new* FormGrid form

If you need a new form (e.g. the current one was deleted):

1. Go to **https://formgrid.dev** → sign up / log in.
2. **Create form** → **“From scratch”** or **“Start with AI”**.
3. Add **Email** and **Message** fields (required). Use names `email` and `message` if you ever switch to a custom HTML form.
4. Save and go to **Share** or the form’s share page.
5. Copy the **embed URL** (e.g. `https://share.formgrid.com/embed/XXXXXX`) or **share link**.
6. In **`index.html`**, find the iframe:
   ```html
   <iframe src="https://share.formgrid.com/embed/KJRfUkF4NMnWlHhQ" ...>
   ```
   Replace `KJRfUkF4NMnWlHhQ` with the **new** form’s ID from the embed URL (the part after `/embed/`).
7. Save, then commit, push, and redeploy.

---

## Summary

| Step | Action |
|------|--------|
| 1 | **Keep & deploy** changes (FormGrid embed is already in the site). |
| 2 | **Test** form on Contact (live site or localhost). |
| 3 | In FormGrid (formgrid.dev or formgrid.com), find **Submissions** for your form. |
| 4 | Optional: set **Email** / **Sheets** / **Webhook** in form settings. |
| 5 | If you create a new form, update the iframe `src` in `index.html` with the new embed URL. |

---

**Embed URL in use:**  
`https://share.formgrid.com/embed/KJRfUkF4NMnWlHhQ`

**Share link (full page):**  
`https://share.formgrid.com/KJRfUkF4NMnWlHhQ`
