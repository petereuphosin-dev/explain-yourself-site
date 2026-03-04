import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "username/repo-name").split("/");
const isUserPagesRepo = repo === `${owner}.github.io`;
const base = isUserPagesRepo ? "/" : `/${repo}`;
const site = `https://${owner}.github.io${isUserPagesRepo ? "/" : `${base}/`}`;

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false
    })
  ]
});
