# Explain Yourself Site

Premium static marketing site for the **Explain Yourself** mobile app, built with **Astro + Tailwind** and designed to deploy free on GitHub Pages.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open the local URL Astro prints in the terminal.

## Replace store links

Edit [src/consts.ts](/Users/peuphosin/ExplainYourselfGameWEBSITE/explain-yourself-site/src/consts.ts):

- Replace `GOOGLE_PLAY_URL_PLACEHOLDER` with your live Android URL.
- Replace `APPLE_APPSTORE_URL_PLACEHOLDER` with your live iOS URL when ready. Until then, the App Store button stays in a Coming Soon state.
- Replace `THIRD_STORE_NAME_PLACEHOLDER` and `THIRD_STORE_URL_PLACEHOLDER` only if you want a third store button. The third button renders only when the URL is not the placeholder value.
- Replace `support@yourdomain.com` with your real support address.

## Add screenshots

Put these files in [public/screenshots/README.md](/Users/peuphosin/ExplainYourselfGameWEBSITE/explain-yourself-site/public/screenshots/README.md)'s folder:

- `s1.png`
- `s2.png`
- `s3.png`
- `s4.png`
- `s5.png`
- `s6.png`

The home page gallery automatically swaps from placeholders to the real images if those files exist.

## Add hero video

Put your hero poster at:

- `public/hero/hero-poster.png`

Optional trailer video:

- `public/hero/hero.mp4`

If `hero.mp4` is missing, the modal shows a placeholder message instead of a video player.

## Deploy with GitHub Pages Actions

1. Push this folder to a GitHub repository.
2. Run `npm install` locally so `package-lock.json` is generated.
3. Commit `package-lock.json` to the repository. Astro’s official Pages action detects the package manager from a lockfile.
4. In GitHub, open your repository settings.
5. Go to **Pages**.
6. Set **Source** to **GitHub Actions**.
7. Push to `main`.
8. GitHub Actions will run [.github/workflows/deploy.yml](/Users/peuphosin/ExplainYourselfGameWEBSITE/explain-yourself-site/.github/workflows/deploy.yml) and publish the `dist/` output.

## Base path notes for repo pages

This project is configured for repository Pages URLs like:

- `https://username.github.io/repo-name`

The dynamic `site` and `base` logic lives in [astro.config.mjs](/Users/peuphosin/ExplainYourselfGameWEBSITE/explain-yourself-site/astro.config.mjs).

- For normal repo Pages, `base` becomes `/<repo-name>`.
- For the special `username.github.io` repository, `base` becomes `/`.
- Internal links already use `import.meta.env.BASE_URL`.

## Troubleshooting base path issues

- If assets look broken after deployment, confirm the repository name is correct and that you are deploying from the repository root.
- If you move the Astro app into a monorepo subfolder later, update the workflow `path` input to point at that folder.
- If you switch to a custom domain, remove the repo-style `base` logic and set `site` to the custom domain.

## Exactly what you must change

- `GOOGLE_PLAY_URL_PLACEHOLDER`
- `APPLE_APPSTORE_URL_PLACEHOLDER`
- `THIRD_STORE_NAME_PLACEHOLDER` and `THIRD_STORE_URL_PLACEHOLDER` if you want a third store
- `support@yourdomain.com`
- Replace the screenshots in `public/screenshots/`
- Replace `public/hero/hero-poster.png` and optionally add `public/hero/hero.mp4`
- Replace `public/favicon.svg`
