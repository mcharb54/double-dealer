# The Double Dealer

A literary magazine about the South. Live at [thedoubledealer.com](https://www.thedoubledealer.com).

## Stack

- **[Gatsby 5](https://www.gatsbyjs.com/)** — static site generator
- **[React 18](https://react.dev/)** — UI
- **[Decap CMS](https://decapcms.org/)** — Git-based headless CMS (`/admin`)
- **[Emotion](https://emotion.sh/)** — CSS-in-JS
- **[React Bootstrap](https://react-bootstrap.github.io/)** — UI components (Bootstrap 4)
- **[Typography.js](https://kyleamathews.github.io/typography.js/)** — type scale (Kirkham theme)

## Development

```bash
# Requires Node 20+
nvm use        # reads .nvmrc
npm install
npm run develop
```

Visit `http://localhost:8000` (light theme) or `http://localhost:8000/xedni` (dark theme).

The CMS admin runs at `http://localhost:8000/admin`.

## Content

Content is stored as Markdown in `src/pages/`:

| Folder | Section |
|---|---|
| `src/pages/archives/` | Historical archive pieces |
| `src/pages/fiction/` | Fiction |
| `src/pages/articles/` | Features / articles |

Each piece has a frontmatter `backroad` field — a custom URL for the dark-theme version of that article.

To add content via the CMS, push to `master` and visit `/admin` on the live site.

## Deployment

Deployments are automated via GitHub Actions on every push to `master`. The built site is deployed to the `gh-pages` branch, which GitHub Pages serves.

To deploy manually:
```bash
npm run deploy
```

## Analytics

Google Analytics UA-145067224-1 has been removed (Universal Analytics was sunset July 2023).
To re-enable tracking, create a GA4 property, get your `G-XXXXXXXX` measurement ID, install
`gatsby-plugin-gtag`, and add it to `gatsby-config.js`.

## Theme

The site has a dual-theme design — a light theme (standard routes) and a dark "backroad" theme
(alternate routes). The layout is controlled by a single `Layout` component in
`src/components/layout.js` that accepts a `dark` prop. Dark theme pages live at `/xedni`,
`/archives2`, `/features2`, `/fiction2`, `/latest2`.
