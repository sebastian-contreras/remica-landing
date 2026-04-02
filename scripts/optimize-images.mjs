import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const imagesDir = './public/images';
const outputDir = './public/images/optimized';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg'));

for (const file of files) {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(outputDir, file.replace('.jpg', '.webp'));
  
  await sharp(inputPath)
    .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);
  
  // Also create a thumbnail
  const thumbPath = outputDir + '/' + file.replace('.jpg', '-thumb.webp');
  await sharp(inputPath)
    .resize(400, 300, { fit: 'cover' })
    .webp({ quality: 70 })
    .toFile(thumbPath);
    
  console.log(`Optimized: ${file}`);
}

console.log('Done!');
