/**
 * Diagnostic only — measures the visible logo-to-canvas ratio of the source
 * logo and every generated icon. Does not modify any asset.
 *
 *   node scripts/analyze-icons.mjs
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUB = join(ROOT, "public");

// Brand bg used by opaque icons — treated as "empty" when measuring content.
const BG = { r: 0x0d, g: 0x0d, b: 0x0d };

async function analyze(rel) {
  const path = join(PUB, rel);
  let img;
  try {
    img = sharp(path);
    await img.metadata();
  } catch {
    return console.log(`  ${rel.padEnd(30)}  (missing)`);
  }
  const { data, info } = await sharp(path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;

  let minX = w, minY = h, maxX = -1, maxY = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const a = data[i + 3];
      if (a <= 12) continue; // transparent => empty
      // opaque pixel that equals brand bg => empty
      const isBg =
        Math.abs(data[i] - BG.r) < 14 &&
        Math.abs(data[i + 1] - BG.g) < 14 &&
        Math.abs(data[i + 2] - BG.b) < 14;
      if (isBg) continue;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    }
  }
  if (maxX < 0) return console.log(`  ${rel.padEnd(30)}  (no content)`);

  const cw = maxX - minX + 1;
  const ch = maxY - minY + 1;
  const wPct = ((cw / w) * 100).toFixed(1);
  const hPct = ((ch / h) * 100).toFixed(1);
  const areaPct = (((cw * ch) / (w * h)) * 100).toFixed(1);
  console.log(
    `  ${rel.padEnd(30)} ${`${w}x${h}`.padEnd(9)} content ${`${cw}x${ch}`.padEnd(9)}` +
      ` W:${wPct}% H:${hPct}% bbox:${areaPct}%  margins T${minY} B${h - 1 - maxY} L${minX} R${w - 1 - maxX}`,
  );
}

console.log("\nSOURCE:");
await analyze("images/logo.png");
console.log("\nGENERATED ICONS (content = non-transparent, non-brand-bg):");
for (const f of [
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "favicon-64x64.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "maskable-icon-192x192.png",
  "maskable-icon-512x512.png",
  "mstile-150x150.png",
]) {
  await analyze(f);
}
