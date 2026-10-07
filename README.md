# Md. Gulam Mustafa — Academic Portfolio

A complete, responsive portfolio based on the supplied CV and portrait. Built with plain HTML, CSS, and JavaScript. No installation, build command, API key, paid service, or external font is required.

## Preview on your computer

1. Extract this ZIP completely.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. Try the publication search, year filters, visible Current Research section, and mobile navigation.

The copy-email button needs clipboard permission and may be restricted when opening a local file. The visible email links still work. Email links open the visitor's configured email application.

## Upload to GitHub Pages

**Upload the extracted files and the assets folder — do not upload the ZIP itself.**

1. Sign into the GitHub account that will own this portfolio.
2. Create a public repository named `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with that account's actual username. If the repository already exists, use it. Download a backup before replacing an existing website.
3. Open the repository and choose **Add file → Upload files**.
4. Drag the contents of this extracted folder into the upload area. Include `index.html`, `styles.css`, `script.js`, and the entire `assets` folder. Do not upload an outer folder containing these files; `index.html` must sit at the repository root.
5. Click **Commit changes**.
6. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/ (root)**, then **Save**.
7. When deployment finishes, use **Visit site** on that page. Your address will be `https://YOUR-USERNAME.github.io/`.

You can instead use a repository called `portfolio`; its address will be `https://YOUR-USERNAME.github.io/portfolio/`. All internal asset paths are relative and support either setup.

The empty `.nojekyll` file is included for branch publishing. If your file manager hides it, the rest of this buildless HTML portfolio also works with GitHub's default processing.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Customize later

| Change | File / location |
| --- | --- |
| Biography, affiliation, dates, degrees, grants, skills | `index.html`, in the relevant named section |
| Publications | `index.html`, inside `.paper-list` |
| Research agenda | `index.html`, inside `.ongoing-grid` |
| Main colors | `styles.css`, the `:root` block at the top |
| Spacing, typography, responsive layout | `styles.css` |
| Animation, menu, filters, email-copy behavior | `script.js` |
| Photo | Replace `assets/portrait.jpeg` |
| Downloadable CV | Replace `assets/Md-Gulam-Mustafa-CV.pdf` |
| Browser icon | `assets/favicon.svg` |

To add a publication, duplicate one `<article class="paper" data-year="2026">` block and update its year, title, authors, journal, issue information, and DOI link. For a new year, also add a matching filter button. Update the static publication count for visitors without JavaScript; the interactive count is calculated automatically.

If changing the primary contact email, update its visible text and `mailto:` link in `index.html`, plus the address used by the copy button in `script.js`.

## Included features

- Coordinated midnight navy, deep sapphire, white, and cool gray palette; enlarged supporting text and consistent academic/contact icons.
- Subtle entrance and hover animation; automatic reduced-motion support and a visitor motion toggle.
- Responsive navigation and layouts.
- Searchable publications with year filters.
- Permanently visible Current Research section and expandable earlier education.
- Downloadable original CV and unchanged supplied portrait.
- Keyboard focus indicators, semantic sections, skip navigation, and accessible control states.
- Readable core content without JavaScript.
- Print styling.
- No trackers, third-party form service, or remote font dependencies.

## Content notes

Content, dates, publication details, and ongoing statuses follow the supplied CV. The Diamond and Related Materials paper retains its listed November 2026 issue date. The portfolio does not invent citation counts or publication metrics. Update current roles and manuscript statuses as they change. Education dates are labeled as sessions, not graduation dates.

The original CV PDF is included unchanged, including its referee section. The webpage itself presents professional contact details and does not repeat referee contact information.

## Verification

Local file references, section anchors, HTML structure, JavaScript syntax, publication filtering, ZIP integrity, and selected text/background contrast pairs were checked during preparation. No live browser layout preview was available; open `index.html` and review desktop/mobile presentation before publishing. External profile and DOI links are transcribed from the CV and were not independently validated.

## Coordinated professional edition

Includes Aspiring PhD Candidate in the hero, LinkedIn in the first section and contact area, permanently visible Current Research, and a subtle animated portrait frame. Photo-frame animation runs for three gentle cycles and honors both the visitor motion toggle and reduced-motion accessibility settings. All ten research topics are visible without clicking or JavaScript.

Replace index.html, styles.css, script.js and assets with this version when updating GitHub Pages. The stylesheet version query helps avoid a cached old design. No build is needed.
