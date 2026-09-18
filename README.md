# Light & Pixel Web Works

Static website: `index.html`, `styles.css`, `logo.css`, and `script.js`. Serve this directory with any static web server for local preview. No build step is required.

## Launch audit — September 18, 2026

**Launch blocker:** https://lightandpixelwebworks.com currently serves a GoDaddy Airo contact page, not this repository. HTTP and www redirect to the HTTPS apex domain, but to that GoDaddy site. This repository is publicly served at https://joey2522.github.io/Light-Pixel-Web-Works/.

Canonical URL, Open Graph URL/image, and sitemap intentionally use the working GitHub Pages address until the custom domain actually serves this site. No CNAME was added because switching Pages before DNS is ready could disrupt the working site.

### Domain cutover

1. Connect `lightandpixelwebworks.com` in this repository's GitHub Pages settings and configure the domain's web DNS records for GitHub Pages, following https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site. Verify domain ownership as recommended there. Preserve all existing email MX/TXT records.
2. Once the custom domain serves this exact site with a valid certificate, enable HTTPS enforcement and verify both HTTP and www redirect to the HTTPS apex domain.
3. Replace `https://joey2522.github.io/Light-Pixel-Web-Works/` in `index.html` and `sitemap.xml` with `https://lightandpixelwebworks.com/`. Check the absolute social image URL after the change.
4. Submit a clearly labeled test inquiry from the custom domain and confirm receipt at `hello@lightandpixelwebworks.com`, including any FormSubmit activation required for the new origin.

### Implemented

- Added canonical, Open Graph and Twitter metadata, sitemap, and PNG favicon using the original approved logo. The logo image is unchanged; a dedicated square favicon/social card can be supplied later.
- Improved description, removed prelaunch form placeholder, and added a direct email link.
- Added native POST fallback, required-field explanation, free review choice, and optional website URL.
- Preserved the existing FormSubmit AJAX address. Accept success only on explicit positive provider confirmation, preserve inputs on failures, and recover from requests that exceed 20 seconds. A timeout may still mean the provider received the inquiry.
- Added keyboard skip link, visible focus, Escape-to-close menu, reduced-motion support, decorative icon hiding, and sticky-header anchor spacing.
- Improved blue/white text contrast, mobile hero contrast, font fallbacks, mobile control sizing, and tablet header fit.
- Labeled Haynes Striping as an in-progress concept and removed the unverified 45+ years claim. Confirm completion, approved copy, and a live project URL before presenting it as completed work.

### Verification and limits

- Browser layout checked at 320, 375, 768, 1024, and 1440 pixels; no horizontal page overflow found.
- Local anchors and logo load checked; desktop/mobile navigation and contact CTA checked.
- JavaScript syntax checked. Seven simulated provider responses covered success, failure, unexpected responses, HTTP errors, and network errors without sending email.
- Previous conversation records user-confirmed inbox delivery. No new real submission was sent during this audit; receipt and domain activation require a final owner test after cutover.
- Google Fonts and the Unsplash hero remain external resources. System-font and solid-color fallbacks are present.
- No complete assistive-technology audit or search/social crawler indexing guarantee is implied.
