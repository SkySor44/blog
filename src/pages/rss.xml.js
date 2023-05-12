import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Skyler Sorensen | Blog",
    description: "My journey learning Astro",
    site: "https://main--regal-hamster-5bf4a4.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
