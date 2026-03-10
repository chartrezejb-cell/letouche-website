import fs from 'fs'
import path from 'path'

// Copy landing page
fs.copyFileSync('index.html', 'dist/index.html')

// Copy images
const distImagesDir = 'dist/images'
if (!fs.existsSync(distImagesDir)) fs.mkdirSync(distImagesDir, { recursive: true })
fs.readdirSync('images').forEach(file => {
  fs.copyFileSync(path.join('images', file), path.join(distImagesDir, file))
})

// Move dist/styling.html → dist/styling/index.html so /styling/ route works with static serving
const distStylingDir = 'dist/styling'
if (!fs.existsSync(distStylingDir)) fs.mkdirSync(distStylingDir, { recursive: true })
fs.renameSync('dist/styling.html', 'dist/styling/index.html')

console.log('Static files copied and routing structure ready.')
