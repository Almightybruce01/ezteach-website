# FormGrid form — what to create (for you or AI)

Copy the block below and paste it into an AI assistant, or use it yourself when building the form in FormGrid.

---

## Prompt to give AI

```
I need a contact form for FormGrid (formgrid.dev) that will receive submissions from my website.

**Form name:** EZTeach contact

**Fields (exactly 2):**
1. **email** — type: email, required, label "Email", placeholder "you@school.edu"
2. **message** — type: textarea, required, label "Message", placeholder "How can we help?"

**What I need from you:**
- Step-by-step instructions to create this form in FormGrid using "From scratch" (not "Start with AI" or "Upload").
- Exact clicks: FormGrid → Create form → From scratch → add the two fields above → where to find the form endpoint/API URL to use as the form action on my site.
- Remind me to add Email notifications → support@ezteach.org.

The form will POST to FormGrid; my HTML form uses method="POST" and input names "email" and "message". The FormGrid form must accept those same field names so submissions map correctly.
```

---

## If you’re doing it yourself (no AI)

1. FormGrid → **Create form** → **From scratch**.
2. Add **Field 1:** Label **Email**, name **email**, type **email**, required. Placeholder: `you@school.edu`.
3. Add **Field 2:** Label **Message**, name **message**, type **textarea**, required. Placeholder: `How can we help?`
4. Save the form (e.g. name **EZTeach contact**).
5. Open **Integration** / **API** → copy the **form endpoint URL**.
6. In your site’s `index.html`, set the contact form `action` to that URL.
7. FormGrid → **Notifications** / **Emails** → add **Email notification** → **support@ezteach.org**.

Your HTML form uses `name="email"` and `name="message"`. FormGrid must use those same names so submissions match.
