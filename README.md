# Raza Welfare Society — Website

A multi-page website for Raza Welfare Society (Gurdahan Khurd, Raza Nagar,
Manjhi, Saran, Bihar — Estd. 2021), built with React + Vite + Tailwind CSS.

## Pages
- **Home** (`/`) — hero, stats, programme highlights
- **About Us** (`/about`) — story, mission & vision, values, committee
- **Our Work** (`/our-work`) — the Society's programmes
- **Contribute** (`/contribute`) — the contribution form
- **Contact** (`/contact`) — address, phone, WhatsApp, map
- **Admin** (`/admin`) — read-back of contribution requests saved on this device (passphrase: `raza2021`)

## Running it locally
```bash
npm install
npm run dev       # start a local dev server
npm run build     # build the production site into dist/
npm run preview   # preview the production build locally
```

## About the Contribute form — please read
The form on `/contribute` saves each submission to the visitor's own browser
**localStorage**. That means:

- It works instantly, with no backend or hosting cost.
- BUT it only saves on the device the visitor used — you (the Society) will
  **not** automatically receive it on your own phone or computer, since
  localStorage never leaves that browser.

To make sure contributions actually reach you, the success screen also gives
the visitor a **"Send via WhatsApp"** button, which opens a pre-filled
WhatsApp message to your number. That's the part that reliably gets you the
message — treat localStorage as a nice-to-have local record, not the primary
delivery method.

**Before you publish the site**, update the placeholder phone number:
search the project for `910000000000` (in `src/pages/Contribute.jsx` and
`src/pages/Contact.jsx`) and replace it with your real WhatsApp/contact
number in international format (no `+`, no spaces).

Also update:
- The email address `info@razawelfaresociety.org` (Footer.jsx, Contact.jsx)
- The committee names in `src/pages/About.jsx` (currently "Add Name")
- The map query in `src/pages/Contact.jsx` if you want an exact pin

### If you want submissions to reach you from ANY visitor's device
localStorage alone can't do that — you'd need a real backend. The easiest
upgrades, in order of effort:
1. Keep the WhatsApp button as the main channel (already built in).
2. Swap the form's submit handler for a free form backend like Formspree or
   Google Forms, so every submission emails you directly.
3. Add a small server (e.g. a Google Sheet via Apps Script, or a Firebase
   project) if you want a real dashboard instead of the `/admin` page.

## Logo
The Society's crest (`src/assets/logo.png`) was extracted from the scan you
provided and given a transparent background.
