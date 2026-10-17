# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- **Services section on homepage**: Add "What can I provide?" services grid to the homepage, using data and layout from `components/Services` and `public/data/services.json` (6 service cards: Web Development, Presentation, Game Development, Teamwork, Web Design, Illustration)

---

## [2.0.0] — 2024-10-04

### Added
- App Router route groups: `(vertical)` for homepage, about, stories; `(horizontal)` for projects
- `(vertical)/layout.js` — wires `UIProvider` with `direction="vertical"`
- `(horizontal)/layout.js` — wires `UIProvider` with `direction="horizontal"`
- `(vertical)/page.js` — new homepage with `UIContext`, `SideNav`, `FeatureMedia`, `ViewProjects`, `ViewStories`, `ContactMe`, `ContactAddress`
- `(vertical)/about/page.js` — about page with `UIContext` lifecycle and `SideNav`
- `(vertical)/stories/page.js` — stories placeholder page with `SideNav`
- `(horizontal)/projects/page.js` — projects page with keen-slider horizontal carousel and GSAP animations
- `(horizontal)/projects/[slug]/page.js` — project detail page
- `ProjectItem` and `UIProjectDetail` components for projects page
- `nickname` field in `public/data/about.json` for homepage greeting

### Removed
- Legacy `app/page.js` (CRA-style homepage with `ParallaxProvider`)
- Legacy `app/about/page.js` (no UIContext, no `handlePageLoaded`)
- Legacy `app/projects/page.js` (basic `ParallaxProvider` layout)
- Dead components: `components/Features/`, `components/ServiceImage/`
- Unused dependency: `react-scroll-parallax`

### Changed
- Hero image updated from placeholder to actual portrait (`TopGroup7895.jpg`)

---

## [1.2.1] — 2023-12-09

### Fixed
- Remove ScrollTrigger pin marker

---

## [1.2.0] — 2023-12-09

### Added
- Projects UI with horizontal scroll
- Updated loading structure

---

## [1.1.8] — 2023-12-05

### Added
- Loading strategy in UIContext

---

## [1.1.7] — 2023-12-05

### Fixed
- `npm ci` can only install packages when package.json and package-lock.json are in sync

---

## [1.1.6] — 2023-12-05

### Fixed
- Update Node version in nextjs.yml for locomotive-scroll requirement

---

## [1.1.5] — 2023-12-02

### Added
- Init horizontal scroll
- Add Storybook
- Init project detail page
- Projects page animation
- Update loading tasks with reducer
- Init projects page interaction

### Changed
- Update metadata and viewport in layout.js
- Upgrade next@13.3.4 → @13.4.4
- Use all local fonts

### Fixed
- GSAP cannot tween null element

---

## [1.1.4] — 2023-11-25

### Fixed
- Sometime `playfair_display` font cannot be downloaded from `next/font/google`

---

## [1.1.3] — 2023-11-24

### Fixed
- Add block layout for mobile version

---

## [1.1.2] — 2023-11-24

### Added
- Submit form on ContactMe
- Add events helper

### Changed
- Remove unfinished routes from menu
- Update downloadable CV

### Fixed
- Cannot load serif font from global SCSS

---

## [1.1.1] — 2023-11-20

### Added
- Load `next/font/google`
- Hero image on homepage

---

## [1.1.0] — 2023-11-20

### Added
- New homepage layout
- Downloadable CV
- Running text animation

---

## [1.0.2] — 2023-11-07

### Fixed
- Cannot use metadata on client components

---

## [1.0.1] — 2023-11-07

### Added
- Create nextjs.yml workflow for CI/CD on `release` branch

---

## [0.2.1] — 2023-03-24

### Added
- Next.js framework (`next`, `eslint-config-next`)
- SCSS support (`sass`, `postcss`, `autoprefixer`)
- `@styled-jsx/plugin-sass`, `@babel/core`, `@babel/plugin-proposal-private-methods`
- `pages/` directory, `app/layout.js`
- `components/AppLink` as replacement for `next/link` (with `legacyBehavior` prop for Next.js 13)
- `.babelrc`, `postcss.config.js`
- Tailwind CSS

### Changed
- `react` ^16.4.1 → ^18.2.0
- `react-dom` ^16.4.1 → ^18.2.0
- Move images, fonts, and static assets to `public/`
- Move all CSS files into `styles/`
- Move `src/theme/` into `styles/theme/`
- Move `src/components` into `components/`
- Use SCSS instead of styled-components
- `eslint` 4.10.0 → 8.44.0
- `next` 13.2 → 13.3.4

### Removed
- `react-router-dom`, `bootstrap`, `eslint-config-react-app`, `styled-components`
- Old CRA scripts (`node scripts/start.js`, `node scripts/build.js`)
- `react-hot-loader` (Next.js supports fast refresh)
- CRA build tooling: `@babel/core`, `babel-core`, `babel-eslint`, `babel-jest`, `babel-loader`, `babel-preset-react-app`, `babel-runtime`, `case-sensitive-paths-webpack-plugin`, `chalk`, `css-loader`, `dotenv`, `dotenv-expand`, `eslint-loader`, `extract-text-webpack-plugin`, `file-loader`, `fs-extra`, `html-webpack-plugin`, `jest`, `node-sass`, `object-assign`, `postcss-flexbugs-fixes`, `postcss-loader`, `raf`, `react-dev-utils`, `resolve`, `style-loader`, `sw-precache-webpack-plugin`, `url-loader`, `webpack`, `webpack-dev-server`, `webpack-manifest-plugin`, `whatwg-fetch`
- `asset-manifest.json`, `index.html`, `.babelrc`, `scripts/`, `config/`, `registerServiceWorker.js`, `routes.js`

---

## [0.2.0]

### Added
- Footer information
- Updated README

---

## [0.1.1]

### Added
- About page
- Services for desktop
- Responsive with styled-components
- Navbar
- Google Analytics (`gtag.js`)
- Home page build

### Changed
- Organized files and module paths
- Optimized images
