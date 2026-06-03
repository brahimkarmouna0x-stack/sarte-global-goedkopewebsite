/**
 * Generate every favicon / app-icon variant from a single source logo.
 *
 *   node scripts/generate-icons.mjs
 *
 * Source : public/images/logo.png  (512x512, transparent)
 * Output : public/  (favicons, touch icons, android-chrome, mstile, ico)
 *
 * OPTIMIZATION (2026-06-03):
 * ─────────────────────────────
 * 1. Trim transparent edges from source logo before any resize.
 *    The original 512×512 logo had 40px top + 63px bottom of empty space,
 *    causing the actual mark to occupy only ~63 % of the 32×32 favicon.
 *
 * 2. Reduce padding aggressively:
 *    - Browser favicons:  2–3 %  (logo fills 94–96 % of canvas)
 *    - Apple touch icon:  6 %    (safe for iOS rounding)
 *    - Android/PWA:       3 %
 *    - Maskable:         15 %    (keeps logo inside the mask safe-zone)
 *    - Windows tile:      8 %
 *
 * 3. Browser-tab "sharp" variants are generated with gamma + sharpen
 *    for extra crispness at 16px.
 *
 * 4. Aspect ratio is always preserved (sharp `fit: contain`).
 *    Logo is centered — nothing is ever stretched, distorted, or cropped.
 */

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC = join(ROOT, "public", "images", "logo.png");
const OUT = join(ROOT, "public");

// Brand background for opaque icons.
const BRAND_BG = { r: 0x0d, g: 0x0d, b: 0x0d, alpha: 1 };
const TRANSPARENT = { r: 0, g: 0, b: 0, alpha: 0 };

// ── Step 0 : Trim transparent edges from the source logo ────────────────
async function loadTrimmedLogo() {
  const meta = await sharp(SRC).metadata();
  const w = meta.width;
  const h = meta.height;

  // Get full pixel data
  const { data, info } = await sharp(SRC)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixels = new Uint8ClampedArray(data);

  // Find bounding box of non-transparent pixels (alpha > 10)
  let minX = w, minY = h, maxX = 0, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (pixels[(y * w + x) * 4 + 3] > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Extract the trimmed logo region
  const trimmed = await sharp(SRC)
    .extract({
      left: minX,
      top: minY,
      width: maxX - minX + 1,
      height: maxY - minY + 1,
    })
    .toBuffer();

  console.log(
    `✓ Trimmed source logo: was ${w}×${h}, content area is ${maxX - minX + 1}×${maxY - minY + 1}`,
    `(removed ${minY}px top, ${h - 1 - maxY}px bottom padding)`,
  );

  return trimmed;
}

// ── Render the trimmed logo centered on a `size`×`size` canvas ──────────
async function render(
  trimmedSrc,
  size,
  { bg = null, padding = 0.03, sharpen = false, gamma = false } = {},
) {
  const inner = Math.max(1, Math.round(size * (1 - padding * 2)));

  let pipeline = sharp(trimmedSrc)
    .resize(inner, inner, {
      fit: "contain",
      background: TRANSPARENT,
      kernel: "lanczos3",
    });

  // Gamma correction can help mid-tone contrast at small sizes
  if (gamma) {
    pipeline = pipeline.gamma(1.4, 1.0);
  }

  // Light sharpen for browser-tab crispness
  if (sharpen) {
    pipeline = pipeline.sharpen({
      sigma: 0.6,
      m1: 1.2,
      m2: 0.6,
    });
  }

  const logo = await pipeline.png().toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg ?? TRANSPARENT,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9, palette: size <= 64 })
    .toBuffer();
}

async function writePng(name, size, opts) {
  const buf = await render(trimmed, size, opts);
  await writeFile(join(OUT, name), buf);
  console.log(`✓ ${name} (${size}×${size})`);
}

/** Build a multi-resolution .ico (PNG-compressed entries: 16/32/48/64). */
async function writeIco(name, sizes, opts) {
  const images = await Promise.all(
    sizes.map(async (size) => ({
      size,
      data: await render(trimmed, size, { ...opts, sharpen: true, gamma: true }),
    })),
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
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width  (0 ⇒ 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 ⇒ 256)
    entry.writeUInt8(0, 2); // palette colours
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt32LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset
    entries.push(entry);
    blobs.push(data);
    offset += data.length;
  }

  await writeFile(join(OUT, name), Buffer.concat([header, ...entries, ...blobs]));
  console.log(`✓ ${name} (${sizes.join("/")} multi-size, sharpened)`);
}

// ── Main ────────────────────────────────────────────────────────────────

let trimmed;

async function main() {
  // Load and trim the source logo once
  trimmed = await loadTrimmedLogo();

  // ── Browser tab favicons ──────────────────────────────────────────
  // Minimal padding (2-3%) so the mark fills 94-96 % of the canvas.
  // Gamma + sharpen for crisp rendering at tiny sizes.
  console.log("\n── Browser tab favicons ──");
  await writePng("favicon-16x16.png", 16, {
    padding: 0.02,
    sharpen: true,
    gamma: true,
  });
  await writePng("favicon-32x32.png", 32, {
    padding: 0.03,
    sharpen: true,
    gamma: true,
  });
  await writePng("favicon-48x48.png", 48, {
    padding: 0.03,
    sharpen: true,
    gamma: true,
  });
  await writePng("favicon-64x64.png", 64, {
    padding: 0.03,
    sharpen: true,
    gamma: true,
  });
  await writeIco("favicon.ico", [16, 32, 48, 64], { padding: 0.03 });

  // ── Apple touch icon ──────────────────────────────────────────────
  // Opaque (iOS ignores transparency and applies its own mask).
  // Slightly more padding so iOS rounding doesn't clip the mark.
  console.log("\n── Apple touch icon ──");
  await writePng("apple-touch-icon.png", 180, {
    bg: BRAND_BG,
    padding: 0.06,
  });

  // ── Android / PWA (transparent "any" purpose) ────────────────────
  console.log("\n── Android / PWA ──");
  await writePng("android-chrome-192x192.png", 192, { padding: 0.03 });
  await writePng("android-chrome-512x512.png", 512, { padding: 0.03 });

  // ── Maskable (brand bg, respects the ~20% safe-zone) ─────────────
  console.log("\n── Maskable ──");
  await writePng("maskable-icon-192x192.png", 192, {
    bg: BRAND_BG,
    padding: 0.15,
  });
  await writePng("maskable-icon-512x512.png", 512, {
    bg: BRAND_BG,
    padding: 0.15,
  });

  // ── Windows tile ──────────────────────────────────────────────────
  console.log("\n── Windows tile ──");
  await writePng("mstile-150x150.png", 150, { bg: BRAND_BG, padding: 0.08 });

  // ── Summary ───────────────────────────────────────────────────────
  console.log("\n✓ All icons regenerated from trimmed source.");
  console.log("  Logo now fills ~94–96 % of browser favicon canvases.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
