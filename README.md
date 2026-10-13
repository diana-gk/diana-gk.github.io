# Diana Prokopenko — Portfolio Website

Static, GitHub Pages-ready HTML/CSS/JS site with a black-and-purple theme. No installation, build process, or dependencies.

## Files
- `index.html` — homepage and featured projects
- `projects.html` — nine projects with functional category filters
- `expertise.html` — six technical specialties
- `services.html` — freelance services
- `about.html` — bio, education, experience
- `contact.html` — mailto contact form
- `style.css` — **all design variables and responsive styles**
- `script.js` — mobile menu, project filtering, and email draft
- `assets/*.svg` — **editable illustrative placeholder graphics** (not actual project screenshots)

## Quick edits
1. Edit `style.css` `:root` variables to change colors, or edit any HTML directly.
2. Replace `assets/*.svg` with your own screenshots, then change the corresponding `<img src>` references in the HTML. For example, `assets/durak.svg` -> `assets/durak.png`.
3. To add a headshot, replace the `.portrait-placeholder` section in `about.html` with `<img src="assets/profile.jpg" alt="Portrait of Diana">` and add styling as desired.
4. Replace the contact email in `contact.html` **and** `script.js` if your email changes.
5. Add your Instagram link once the account is ready. Add a resume PDF and link it if you want to publish it.
6. Edit project descriptions, statuses, metrics, and external links as work evolves. Never imply a concept is a finished client deployment.

## Deploy to GitHub Pages
1. Create a repository or use your existing Pages repository.
2. Upload the **contents of this folder** into the repository root (not a nested folder).
3. Go to repository Settings → Pages → Deploy from a branch → main / (root).
4. If replacing an existing site, back up the existing files first. GitHub Pages only serves one homepage at the root of a given Pages repository.
5. Visit the URL GitHub shows in Pages settings.

## Notes
- Project graphics are SVG illustrations designed specifically for this template. They are not real screenshots of the projects.
- NYU administrative visuals are illustrative to avoid exposing internal systems.
- The contact form opens the visitor's email client; it does not submit to a server.
- The Instagram handle and some live-demo links have intentionally been left unset rather than invented.
- The portfolio is written from the resume and project details provided; check every statement before publishing.
