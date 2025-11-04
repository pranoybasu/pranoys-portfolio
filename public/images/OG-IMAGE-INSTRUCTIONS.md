# OpenGraph Image Instructions

An OpenGraph (OG) image is needed for social media sharing. When someone shares your portfolio on Twitter, LinkedIn, Facebook, etc., this image will appear.

## Required Specifications
- **Filename**: `og-image.jpg`
- **Location**: `public/images/og-image.jpg`
- **Dimensions**: 1200x630 pixels
- **Format**: JPG or PNG
- **File Size**: Under 1MB (recommended)

## Design Suggestions

Create an image with:
1. **Your Name**: "Pranoy Basu" in large, bold text
2. **Title**: "Software Engineer & Creative Developer"
3. **Background**: Dark cosmic theme matching your portfolio
4. **Colors**: Use cosmic blue (#3b82f6) and cyan (#06b6d4)
5. **Optional**: Include subtle particle effects or geometric shapes

## Quick Creation Methods

### Option 1: Canva (Easiest)
1. Go to https://www.canva.com/
2. Create custom size: 1200x630px
3. Use dark background with gradient
4. Add text with your name and title
5. Download as JPG
6. Save to `public/images/og-image.jpg`

### Option 2: Figma
1. Create new frame: 1200x630px
2. Design with dark cosmic theme
3. Export as JPG
4. Save to `public/images/og-image.jpg`

### Option 3: Use Main Profile Picture
1. Take your profile picture (`public/images/main/Main pic.jpeg`)
2. Use an image editor to:
   - Resize/crop to 1200x630px
   - Add dark overlay
   - Add text with your name and title
3. Save as `public/images/og-image.jpg`

## Temporary Solution

For now, the metadata references `/images/og-image.jpg` but the file doesn't exist yet. This won't break the site, but social media shares won't show a preview image until you add it.

You can add it later before deploying to production.