# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio. Next.js 10 (pages router) + React 17 + styled-components, statically exported and deployed to Firebase Hosting (project `tanveer-e09d4`, live at https://tanveer-e09d4.web.app).

No tests, no linter, no TypeScript, no `next.config.js`. Prettier is the only tooling: `yarn format` / `yarn format:check` (config in `.prettierrc`, scope in `.prettierignore`). Package manager: yarn (`yarn.lock` is committed).

## Commands

```bash
yarn dev      # dev server, :3000
yarn build    # next build && next export -> out/
yarn start    # serve the build
```

Scripts were originally written with Windows `SET NODE_OPTIONS=... &&` syntax, which on Linux/macOS fails with `SET: command not found` (exit 127) and short-circuits the `&&`, so Next never launched. They now use the POSIX inline-env form (`NODE_OPTIONS=--openssl-legacy-provider next dev`) — this will not work on cmd.exe; add `cross-env` if Windows support is ever needed.

`--openssl-legacy-provider` is required, not optional. Without it Next 10 crashes on startup under Node 17+ with `ERR_OSSL_EVP_UNSUPPORTED` (legacy MD4 hashing vs. OpenSSL 3). Verified on Node 24.

With no `next.config.js`, Next 10.2 defaults to webpack 5.

Deploy — `firebase.json` serves `out/`, so a build+export must run first:

```bash
firebase deploy --only hosting
```

## Architecture

**Content lives in `src/constants/constants.js`.** `projects`, `TimeLineData`, and all social/contact URLs are exported from there and consumed by components. Adding or editing a project, timeline year, or profile link is a constants-file edit, not a component edit. Older projects are commented out rather than deleted. Achievement tiles are the exception — they live in `defaultData` inside `Acomplishments.js`.

**Two sections are item-count-bound.** Adding entries breaks their layout, so match the content to the container or change the CSS deliberately:

- `TimeLineData` must stay at **5 entries**. `CarouselItem` is `max-width: 196px` inside a 1040px track with `justify-content: space-between` and no overflow scroll above the `sm` breakpoint, so a 6th entry overflows the section. The years are re-scoped rather than appended (currently 2020, 2022, 2023, 2024, 2026).
- Achievement tiles are **3 static + 1 appended at runtime**. `Boxes` uses `repeat(auto-fit, minmax(200px, 1fr))` specifically so both 3 and 4 tiles fill the row — it was `repeat(4, 1fr)` with an `nth-child(2n){grid-row:2}` mobile hack that assumed an even count.

**The PartyCade** has `source: null` because its Play Store listing is delisted (404, verified with a browser user-agent); the card renders without links rather than shipping a 404. Two others were recovered onto new hosts and should not be reverted to their old URLs: Dreamhub moved off the dead `dreamhub.art` domain to `dreamhub-frontend.vercel.app`, and KC-Elite is linked to its **iOS App Store** listing since the Play Store one is also delisted. Re-verify any store or demo URL before adding it — several in this file have rotted.

The résumé now lives only as a PDF at `public/Tanveer_Khan_Resume.pdf`, linked from the Hero
via `ResumeUrl` and served by `next export` (previously a CakeResume link). The markdown
source docs that used to sit at the repo root (`Tanveer-info.md`, `Tanveer-resume.md`,
`Tanveer-resume-org.md`) were deleted — the PDF is the single source of truth, so there is
no in-repo text to diff the site copy against. When the PDF is replaced, update the site
copy by hand and bump `ResumeUpdated` in `src/constants/constants.js`, which is displayed
under the Hero buttons as "Resume last updated …" and will otherwise go stale.

Claims the site deliberately does **not** make, and must not regain:

- **"50K requests/second"** was retired from the résumé. It used to appear in the Hero, the
  About copy, the Technologies intro, the 2026 timeline entry and an achievement tile; all
  five were reworded. Do not reintroduce it.
- The Tumi Labs title is **"Solana & Backend Engineer"** (older drafts said "MERN & Solana
  Engineer"). Backend-Template is listed at "36+ stars" in the PDF; the repo actually has 38.

**Project card images are local, in `public/images/`, snake_case.** They were once Firebase Storage URLs on bucket `bucket-a2d0b.appspot.com`, which no longer exists — every object 404s and so does the bucket root. Do not reintroduce Firebase Storage URLs; no bucket for this project is reachable, and the `firebase` npm package was removed from dependencies (only the `firebase` CLI is used, for deploys).

All 10 active projects have an image. Source ratios span 1.50 (the 3:2 webp marketing composites) to 2.13 (raw screenshots), so `Img` pins `aspect-ratio: 16 / 9` with `object-fit: cover` — a compromise that crops either extreme by roughly 8% rather than 25%. Normalise the assets to one ratio and this can be tightened. Images are `loading="lazy"`; `Projects.js` renders `Img` only when `image` is set, and `BlogCard` takes a `hasImage` prop that drops its top padding when one is present.

`BlogCard` is a flex column with `UtilityList` pinned via `margin-top: auto`, and `GridContainer` uses `place-items: stretch`, so rows stay even despite uneven description lengths.

Screenshots for the commented-out legacy projects are still committed (`postman.png`, `todo_app.png`, …) and are paired to their project inside the commented block via a `// image:` line.

**Styling is styled-components only.** No CSS files, no CSS modules.

- `src/pages/_app.js` wraps everything in `src/styles/theme.js`, which is `ThemeProvider` + `GlobalStyles`.
- `src/themes/default.js` holds the design tokens: `fonts`, `colors`, and `breakpoints` (media-query strings, all `max-width` — mobile-last). Consume via `${props => props.theme.breakpoints.md}`.
- `src/styles/globals.js` sets `html { font-size: 62.5% }` — so `1rem` = 10px.
- `src/styles/GlobalComponents/index.js` is the shared primitive library (`Section`, `SectionTitle`, `SectionText`, `SectionDivider`, `ButtonBack`/`ButtonFront`, link/icon containers). Reuse these rather than adding new section-level styled components.
- Per-component styles live in a sibling `<Name>Styles.js`. Every styled export in these files is used; unused ones were deleted, so treat a new unreferenced export as dead code.
- `_document.js` does the styled-components SSR dance (`ServerStyleSheet`), paired with the `styled-components` babel plugin (`ssr: true`) in `.babelrc`. Both must stay in sync or class names hydrate mismatched.

**Page composition.** `src/pages/index.js` is the only real page: `Layout` (Header + `<main>` + Footer) wrapping `Hero`, `Projects`, `Technologies`, `Timeline`, `Acomplishments` in order. Header nav uses hash links matched to `id` props on `Section` (`#projects`, `#tech`, `#about`) — renaming a section id breaks nav.

Note `Timeline` renders under the heading "About Me" (`id="about"`) — the component name and the visible heading differ.

There is **no Experience, Education or Open Source section**. The résumé's four employers, the BSCS degree, the godot-solana-sdk contribution, Backend-Template and the Medium article are documented in the two root markdown files but deliberately absent from the site — the largest remaining gap if hiring signal matters.

**Buttons.** One variant: `LinkButton.js` renders `ButtonBack` + `LinkButtonFront` (an `<a>`, uses `href`/`target`) — the layered-gradient effect is the outer div plus an inner element that fades on hover. A `<button>` twin (`Button.js` + `ButtonFront`, driven by `onClick`) existed but was never imported; both were removed. Recover them from git history if a real button is ever needed.

**Runtime data.** `Acomplishments.js` renders its static `defaultData` tiles, then fetches `https://api.github.com/users/tanv33` via axios on mount and appends a live "Github Followers" tile. The call is wrapped in try/catch — an unauthenticated GitHub API request is rate-limited at 60/hour per IP, so failure is expected and must degrade to the static tiles rather than throw. Tile values carry their own suffix (`"$100K"`, `"4+"`); `BoxNum` renders `card.number` verbatim rather than appending `+`. Because the site is statically exported, this is the only live data on the page — the CRA-style `pages/api/` scaffold was deleted, since API routes cannot work under `next export`.
