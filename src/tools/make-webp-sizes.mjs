import sharp from "sharp";
import { globby } from "globby";
import { dirname, basename, extname, join } from "node:path";
import { mkdirSync } from "node:fs";

const sizes = [900, 1200, 1920];
const quality = 75;

const patterns = process.argv.slice(2);
if (!patterns.length) {
  console.error(
    'Usage: node tools/make-webp-sizes.mjs "src/assets/img/**/*.webp"'
  );
  process.exit(1);
}

const files = await globby(patterns, { onlyFiles: true });

for (const file of files) {
  const dir = dirname(file);
  const base = basename(file, extname(file));
  mkdirSync(dir, { recursive: true });

  for (const w of sizes) {
    const out = join(dir, `${base}-${w}.webp`);
    await sharp(file)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality })
      .toFile(out);
    console.log("→", out);
  }
}
console.log("✅ Done");
