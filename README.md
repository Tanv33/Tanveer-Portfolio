# Tanveer Khan — Portfolio

Single-page personal portfolio. **[tanveer-e09d4.web.app](https://tanveer-e09d4.web.app)**

Next.js 10 (pages router) + React 17 + styled-components, statically exported and
deployed to Firebase Hosting. No CSS files — every style is a styled component,
with design tokens in `src/themes/default.js`.

## Getting started

Requires Node 17+ and yarn (`yarn.lock` is committed — don't use npm).

```bash
yarn install
yarn dev          # http://localhost:3000
```

| Script              | Does                                 |
| ------------------- | ------------------------------------ |
| `yarn dev`          | dev server on :3000                  |
| `yarn build`        | `next build && next export` → `out/` |
| `yarn start`        | serve the production build           |
| `yarn format`       | prettier over the repo               |
| `yarn format:check` | fail if anything is unformatted      |

The four Next scripts set `NODE_OPTIONS=--openssl-legacy-provider`. This is required, not
optional: without it Next 10 crashes on startup under Node 17+ with
`ERR_OSSL_EVP_UNSUPPORTED`. The form used is POSIX-only — add `cross-env` if you
ever need to run this on cmd.exe.

## Deploy

`firebase.json` serves `out/`, so build first:

```bash
yarn build
firebase deploy --only hosting
```

Cache headers are set per asset class in `firebase.json`: hashed Next bundles are
immutable for a year, images get 7 days (their filenames aren't hashed, so
`immutable` would strand viewers on a stale screenshot), and the résumé PDF
revalidates hourly.

## Editing content

Almost nothing lives in the components:

- **`src/constants/constants.js`** — projects, timeline entries, contact details
  and social URLs. Adding a project or changing a link is an edit here, not in a
  component. Retired projects are commented out rather than deleted.
- **`public/images/`** — project screenshots, `snake_case`, named after the
  project. Cards crop them to 16:9.
- **`public/Tanveer_Khan_Resume.pdf`** — the résumé, self-hosted and linked from
  the hero. When you replace it, bump `ResumeUpdated` in `constants.js`; it's
  displayed as "Resume last updated …" and will otherwise go stale.
- Achievement tiles are the exception — they live in `Acomplishments.js`.

Two containers are **item-count-bound**, so match the content to them or change
the CSS deliberately:

- `TimeLineData` must stay at **5 entries** — a 6th overflows the carousel track.
- Achievement tiles are **3 static + 1 fetched at runtime** (GitHub followers).

## Structure

```
src/
  pages/          _app, _document (styled-components SSR), index
  layout/         Header + <main> + Footer wrapper
  components/     one folder per section, styles in a sibling <Name>Styles.js
  constants/      all page content
  styles/         GlobalComponents (shared primitives), globals, theme
  themes/         colors, fonts, breakpoints
```

Header nav uses hash links matched to `id` props on `Section` (`#projects`,
`#tech`, `#about`) — renaming a section id breaks the nav.

`CLAUDE.md` has the longer engineering notes: which external URLs have rotted,
why some project cards have no link, and the constraints worth knowing before
changing layout.
