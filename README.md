# PCM Employment Agencies Pte. Ltd. - Website Prototype

Static HTML5 + CSS3 + Bootstrap 5 (CDN) + vanilla JS. No build step.

## Run locally (VS Code Live Server)
1. Open the `pcm-employment-website` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` -> **Open with Live Server**.

## Add your images (required)
Place files in `assets/images/`:
`pcm-logo.png` (the supplied logo - not included), `hero-workforce.jpg`, `construction.jpg`, `manufacturing.jpg`, `marine.jpg`, `landscape.jpg`, `service-sector.jpg`, `about-team.jpg`.
Until added, branded gradient placeholders appear (and the logo falls back to text). Use licensed or royalty-free photos only.

## Update contact details
Edit `assets/scrypt/config.js` (the folder name follows the brief's spelling). The old number +65 8221 1682 is intentionally NOT listed.

## Before production launch
- Contact form is a **frontend demo**: it validates only and sends nothing. Connect a backend or form service (e.g. Formspree) to deliver enquiries.
- Verify both phone numbers; add a verified WhatsApp number in config.js to show the WhatsApp button.
- Add real photos and logo; confirm licence and address; add a map embed if desired.
- No statistics, testimonials or guarantees are included by design.

## Structure
index.html | assets/pages/{about,services,industries,process,contact}.html | assets/images | assets/style/style.css | assets/scrypt/{config,main}.js
