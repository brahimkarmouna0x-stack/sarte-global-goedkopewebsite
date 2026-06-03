/**
 * Generate every favicon / app-icon variant from a single source logo.
 *
 *   node scripts/generate-icons.mjs
 *
 * Source : public/images/logo.png  (512x512, transparent)
 * Output : public/  (favicons, touch icons, android-chrome, mstile, ico)
 *
 * Design rules
 *  - Aspect ratio is always preserved (sharp `fit: contain`).
 *  - Logo is centered with transparent padding so nothing is ever cropped.
 *  - Transparent icons keep the alpha channel (Chrome/Firefox/Edge tabs).
 *  - Apple / Android-maskable / Windows tiles get the brand background so
 *    they look intentional inside rounded / masked containers.
 */
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public", "images", "logo.png");
const OUT = join(ROOT, "public");

// Brand background used for opaque (Apple/Android/Windows) icons.
const BRAND_BG = { r: 0x0d, g: 0x0d, b: 0x0d, alpha: 1 };
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

/**
 * Render the logo centered on a `size`×`size` canvas.
 * @param {number} size    final square size in px
 * @param {object} opts
 * @param {object|null} opts.bg       canvas background (null = transparent)
 * @param {number} opts.padding       fraction of the canvas reserved as padding (0–0.5)
 */
async function render(size, { bg = null, padding = 0.06 }) {
  const inner = Math.max(1, Math.round(size * (1 - padding * 2)));

  // High-quality downscale of the logo, aspect ratio preserved, no crop.
  const logo = await sharp(SRC)
    .resize(inner, inner, { fit: "contain", background: TRANSPARENT, kernel: "lanczos3" })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg ?? TRANSPARENT,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function writePng(name, size, opts) {
  const buf = await render(size, opts);
  await writeFile(join(OUT, name), buf);
  console.log(`✓ ${name} (${size}x${size})`);
}

/** Build a multi-resolution .ico (PNG-compressed entries: 16/32/48). */
async function writeIco(name, sizes) {
  const images = await Promise.all(
    sizes.map(async (size) => ({ size, data: await render(size, { padding: 0.06 }) })),
  );

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  const blobs = [];
  let offset = 6 + images.length * 16;

  for (const { size, data } of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 => 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 => 256)
    entry.writeUInt8(0, 2); // palette colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    blobs.push(data);
    offset += data.length;
  }

  await writeFile(join(OUT, name), Buffer.concat([header, ...entries, ...blobs]));
  console.log(`✓ ${name} (${sizes.join("/")} multi-size)`);
}

async function main() {
  // Browser tab favicons — transparent, minimal padding for legibility at 16px.
  await writePng("favicon-16x16.png", 16, { padding: 0.04 });
  await writePng("favicon-32x32.png", 32, { padding: 0.06 });
  await writeIco("favicon.ico", [16, 32, 48]);

  // Apple touch icon — opaque (iOS ignores transparency and applies its own mask).
  await writePng("apple-touch-icon.png", 180, { bg: BRAND_BG, padding: 0.14 });

  // Android / PWA — transparent "any" purpose icons.
  await writePng("android-chrome-192x192.png", 192, { padding: 0.06 });
  await writePng("android-chrome-512x512.png", 512, { padding: 0.06 });

  // Android / PWA — maskable icons (safe zone ≈ 20% so the logo survives masking).
  await writePng("maskable-icon-192x192.png", 192, { bg: BRAND_BG, padding: 0.2 });
  await writePng("maskable-icon-512x512.png", 512, { bg: BRAND_BG, padding: 0.2 });

  // Windows tile.
  await writePng("mstile-150x150.png", 150, { bg: BRAND_BG, padding: 0.18 });

  console.log("\nAll icons generated from public/images/logo.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
