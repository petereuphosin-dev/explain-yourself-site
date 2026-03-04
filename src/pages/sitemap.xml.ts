const pages = ["", "privacy", "terms", "press"];

export function GET() {
  const site = new URL(import.meta.env.SITE || "https://username.github.io/repo-name/");
  const urls = pages
    .map((path) => {
      const href = path ? new URL(`${path}/`, site).toString() : site.toString();
      return `<url><loc>${href}</loc></url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
