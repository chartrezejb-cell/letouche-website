import fs from 'fs'
import path from 'path'

fs.copyFileSync('index.html', 'dist/index.html')

const distImagesDir = 'dist/images'
if (!fs.existsSync(distImagesDir)) fs.mkdirSync(distImagesDir, { recursive: true })

fs.readdirSync('images').forEach(file => {
  fs.copyFileSync(path.join('images', file), path.join(distImagesDir, file))
})

console.log('Static files copied to dist/')
