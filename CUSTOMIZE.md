# Customize your website

This is a standalone website. Open `index.html` in a browser to preview it; no framework or build step is required.

## The quickest changes

1. Open `script.js` and edit `SITE_CONFIG` at the top:
   - `brand`: the business name used in the header and footer.
   - `monogram`: the short mark shown beside the final call to action.
   - `tagline`: the browser tab title and hero eyebrow text.
   - `pageDescription`: the search and link-preview description in the page metadata.
   - `contactEmail`: the email address used by contact links and the application form.
   - `heroImage`: the main photo URL. Use a direct image URL; the current Unsplash URL can be replaced with your own hosted image.
   - `destinations`: the countries shown in the destination grid and application dropdown.
2. Open `index.html` to change the headings, descriptions, button labels, and section content. The page sections are marked with IDs: `what-we-do`, `how-it-works`, `destinations`, and `application`.
3. Open `styles.css` to adjust colors and layout. The main colors are the CSS variables at the top (`--paper`, `--ink`, `--green`, `--coral`, and `--sun`). Responsive layouts are in the `@media` rules near the bottom.

## Images and components

- Change the hero image using `heroImage` in `script.js`.
- Change the lower city photo in the `.cta-image` rule in `styles.css`.
- Edit the three service items directly in `index.html` under `#what-we-do`.
- Edit the three process steps directly in `index.html` under `#how-it-works`.
- The navigation menu collapses to a button on small screens. Its open/close behavior is in `script.js` and its mobile layout is in the final media query in `styles.css`.

## Application form

The form builds an email draft addressed to `contactEmail`; it does not store or submit data to a server. To collect applications online, connect the form to a form service or your own backend before publishing.

## Publish

Upload `index.html`, `styles.css`, and `script.js` together to a static host such as GitHub Pages, Netlify, or Cloudflare Pages. Keep the filenames and their relative locations unchanged unless you also update the links in `index.html`.