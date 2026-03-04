export function GET() {
  const site = import.meta.env.SITE || "https://username.github.io/repo-name/";
  const robots = `User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap.xml", site).toString()}\n`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
