import sharp from 'sharp';
import fs from 'fs';

// Read the SVG
const svgBuffer = fs.readFileSync('./public/favicon.svg');

// Create favicon.ico (multi-size PNG for modern browsers)
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(`./public/${name}`);
  console.log(`Created ${name}`);
}

console.log('Favicons created!');
