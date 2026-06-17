import sitemap from "../app/sitemap";

const entries = sitemap();
console.log(`Generated ${entries.length} sitemap entries.`);

// Let's print out how many fall under each URL prefix
const prefixes: Record<string, number> = {};
for (const entry of entries) {
  const url = entry.url;
  const path = url.replace("https://spacehr.net", "");
  const segment = path.split("/")[1] || "root";
  prefixes[segment] = (prefixes[segment] || 0) + 1;
}

console.log("\nBreakdown by path prefix:");
console.log(JSON.stringify(prefixes, null, 2));
