/**
 * Favicon suite generator for Sarte Global.
 *
 * Source: public/images/logo.png (gold mark on transparent background).
 * Output: public/favicon/* plus root-level favicon.ico & apple-touch-icon.png
 *         for fixed-path discovery by browsers/crawlers.
 *
 * Run: node scripts/generate-favicons.mjs
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { mkdir, writeFile, copyFile, rm } from "node:fs/promises";
import sharp from "sharp";
import pngToIco from "png-to-ico";
import potrace from "potrace";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const OUT = join(PUBLIC, "favicon");

// Brand palette (matches SITE.themeColor and the gold logo mark).
const DARK = "#0D0D0D";
const GOLD = "#C8A848";
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

const SRC = join(PUBLIC, "images", "logo.png");

/** Trim the transparent margin off the source once and reuse it. */
async function loadTrimmedLogo() {
  return sharp(SRC)
    .ensureAlpha()
    .trim({ threshold: 1 })
    .toBuffer();
}

/**
 * Compose the logo onto a square (or rect) canvas.
 * @param logo trimmed logo buffer
 * @param w canvas width
 * @param h canvas height
 * @param frac fraction of the *smaller* dimension the logo should occupy
 * @param bg background color (object or css string) — null = transparent
 */
async function compose(logo, w, h, frac, bg) {
  const inner = Math.round(Math.min(w, h) * frac);
  const resized = await sharp(logo)
    .resize(inner, inner, { fit: "contain", background: TRANSPARENT })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: w,
      height: h,
      channels: 4,
      background: bg ?? TRANSPARENT,
    },
  })
    .composite([{ input: resized, gravity: "centre" }])
    .png()
    .toBuffer();
}

async function writePng(name, buffer) {
  const p = join(OUT, name);
  await writeFile(p, buffer);
  console.log("  ✓", name);
}

/** Build the monochrome Safari pinned-tab silhouette from the gold shape. */
function traceSilhouette(logo) {
  return new Promise((resolve, reject) => {
    // Flatten the gold mark to solid black on white so potrace traces the shape.
    sharp(logo)
      .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .flatten({ background: "#ffffff" })
      // Anything not white becomes black -> clean two-tone input for the tracer.
      .threshold(250)
      .toBuffer()
      .then((bmp) => {
        const tracer = new potrace.Potrace({
          color: "#000000",
          background: "transparent",
          threshold: 128,
          turdSize: 20,
          optTolerance: 0.4,
        });
        tracer.loadImage(bmp, (err) => {
          if (err) return reject(err);
          resolve(tracer.getSVG());
        });
      })
      .catch(reject);
  });
}

async function main() {
  // Fresh output dir.
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const logo = await loadTrimmedLogo();

  console.log("Standard favicons (gold on transparent):");
  const sizes = { 16: null, 32: null, 48: null, 64: null };
  for (const s of [16, 32, 48, 64]) {
    const buf = await compose(logo, s, s, 0.92, null);
    sizes[s] = buf;
    await writePng(`favicon-${s}x${s}.png`, buf);
  }

  console.log("favicon.ico (16/32/48):");
  const ico = await pngToIco([sizes[16], sizes[32], sizes[48]]);
  await writeFile(join(OUT, "favicon.ico"), ico);
  await writeFile(join(PUBLIC, "favicon.ico"), ico); // root fallback for /favicon.ico
  console.log("  ✓ favicon.ico (+ root copy)");

  console.log("Apple touch icons (gold on dark, opaque):");
  for (const s of [152, 167, 180]) {
    await writePng(`apple-touch-icon-${s}x${s}.png`, await compose(logo, s, s, 0.78, DARK));
  }
  const appleDefault = await compose(logo, 180, 180, 0.78, DARK);
  await writePng("apple-touch-icon.png", appleDefault);
  await writeFile(join(PUBLIC, "apple-touch-icon.png"), appleDefault); // root fallback (iOS auto-discovery)
  console.log("  ✓ apple-touch-icon.png root copy");

  console.log("Android / PWA icons:");
  await writePng("android-chrome-192x192.png", await compose(logo, 192, 192, 0.8, DARK));
  await writePng("android-chrome-512x512.png", await compose(logo, 512, 512, 0.8, DARK));
  // Maskable: logo kept within the inner 80% safe zone (use ~0.66 for margin).
  await writePng("maskable-icon-192x192.png", await compose(logo, 192, 192, 0.66, DARK));
  await writePng("maskable-icon-512x512.png", await compose(logo, 512, 512, 0.66, DARK));

  console.log("Microsoft tiles (gold on transparent, shown on TileColor):");
  await writePng("mstile-70x70.png", await compose(logo, 70, 70, 0.7, null));
  await writePng("mstile-144x144.png", await compose(logo, 144, 144, 0.7, null));
  await writePng("mstile-150x150.png", await compose(logo, 150, 150, 0.7, null));
  await writePng("mstile-310x150.png", await compose(logo, 310, 150, 0.7, null));
  await writePng("mstile-310x310.png", await compose(logo, 310, 310, 0.7, null));

  console.log("Safari pinned tab (monochrome SVG):");
  const svg = await traceSilhouette(logo);
  await writeFile(join(OUT, "safari-pinned-tab.svg"), svg);
  console.log("  ✓ safari-pinned-tab.svg");

  console.log("\nDone. Brand colors -> dark:", DARK, "gold:", GOLD);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
