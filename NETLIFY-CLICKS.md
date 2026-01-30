# Netlify — Exact Click-by-Click Steps

**Where you are:** Your **browser**. Always start at **https://app.netlify.com**.

---

## Part A — You don’t have a Netlify site yet (first-time setup)

### 1. Open Netlify

1. Open your **browser** (Chrome, Safari, etc.).
2. Go to **https://app.netlify.com**.
3. **Log in** (or sign up with **GitHub** if you prefer).
4. You land on the **Netlify** app. You might see **Team overview**, **Sites**, or **Projects**.

### 2. Find “Add new site” or “Add new project”

Netlify sometimes says **Sites**, sometimes **Projects**. Look for one of these:

- **Left sidebar:** Click **“Sites”** or **“Projects”**.
- **Top of page:** If you see **“Sites”** or **“Projects”** as a tab, click it.
- **Main area:** Look for a green or dark button: **“Add new site”**, **“Add new project”**, or **“Import from Git”**.

**Click** that button. A menu or new page opens.

### 3. Import from Git

1. You should see options like **“Import an existing project”**, **“Deploy manually”**, **“Start from a template”**, etc.
2. Click **“Import an existing project”** (or **“Import from Git”**).
3. **“Connect to Git provider”** or similar: click **“GitHub”** (or **“Connect to GitHub”**).
4. If asked, **authorize** Netlify to use your GitHub account. Pick **Almightybruce01** (or the org that has the repo).
5. **“Pick a repository”** or **“Select repository”**: find **“ezteach-website”** in the list.
6. Click **“ezteach-website”** (or **“Select”** / **“Import”** next to it).

### 4. Build settings

1. You’ll see **“Build settings”** or **“Configure build”**.
2. **Build command:** leave **empty** (delete anything there if needed).
3. **Publish directory:** type **`.`** or **`/`** or **`./`** (root folder). Some UIs say “Directory” or “Base directory.”
4. **Branch to deploy:** leave **`main`** (or **master** if that’s your default).
5. Click **“Deploy site”** or **“Deploy ezteach-website”** (or **“Save”** then **“Deploy”**).

### 5. Wait for deploy

1. You’re taken to the **site** or **Deploys** page.
2. You’ll see **“Building”** or **“Published”**.
3. Wait until it says **“Published”** (can take 1–2 minutes).
4. You’ll see a **site URL** like **`https://something-random.netlify.app`** or **`https://ezteach-website.netlify.app`**. **Click it** or copy it.

### 6. Check the Contact form

1. Open that **site URL** in your browser (or **https://ezteach.org** if you’ve already connected your domain).
2. Scroll down to the **“Contact”** section.
3. You should see the **FormGrid** form (Email, Message, Submit).

---

## Part B — You already have a Netlify site (EzTeach / ezteach-website)

### 1. Open Netlify

1. Browser → **https://app.netlify.com**.
2. **Log in**.

### 2. Open the list of sites

- **Left sidebar:** click **“Sites”** (or **“Projects”**).
- If you don’t see a sidebar, look at the **top** for **“Sites”** or **“Projects”** and click it.

You should see a **list of sites** (cards or rows with names like **ezteach-website**, **playful-otter-…**, etc.).

### 3. Open your EZTeach site

1. Find the site that’s connected to **ezteach-website** (same name or the one you use for ezteach.org).
2. **Click** that site’s **name** (or the card/row).  
   You’re now on that site’s **dashboard** or **overview**.

### 4. Open Deploys

1. In the **top tabs** or **left menu** for that site, look for **“Deploys”** (or **“Build & deploy”** → **“Deploys”**).
2. Click **“Deploys”**.
3. You’ll see a list of **deploys** (e.g. **“Published”**, **“Building”**, **“Failed”**).
4. Wait until the **latest** one shows **“Published”** (not “Building” or “Failed”).

### 5. Open the live site

1. At the top of the site dashboard you often see **“Domain management”** or **“Open production deploy”** or a **site URL** (e.g. **`https://yoursite.netlify.app`** or **https://ezteach.org**).
2. **Click** that URL (or **“Open production deploy”**) to open the live site.
3. Scroll to **“Contact”** and confirm the **FormGrid** form is there.

---

## If you still don’t see “Sites” or “Projects”

- You might be on **Team overview**. Look for a **“Sites”** or **“Projects”** link or tab and click it.
- Try the **hamburger menu** (☰) or **“Team”** / **“Switch team”** if you have more than one team; **Sites** is usually under the team.
- **URL:** going to **https://app.netlify.com/sites** often opens the sites list directly.

---

## Quick reference

| What you want | Where to click |
|---------------|----------------|
| List of sites | **Sites** or **Projects** (sidebar or top) |
| Add a new site | **Add new site** / **Add new project** → **Import an existing project** |
| Connect GitHub | **GitHub** → authorize → pick **ezteach-website** |
| Build settings | **Build command:** empty · **Publish directory:** `.` or `/` |
| Deploy | **Deploys** tab for that site · wait for **Published** |
| Open live site | Site URL (e.g. **ezteach.org** or **something.netlify.app**) |
