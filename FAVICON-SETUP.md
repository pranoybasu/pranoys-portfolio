# Favicon Setup Instructions

I've created an SVG favicon (`public/favicon.svg`) with your initials "PB" in a cosmic gradient theme.

## Quick Setup - Generate Favicon Files

To generate all required favicon formats, use one of these online tools:

### Option 1: RealFaviconGenerator (Recommended)
1. Go to https://realfavicongenerator.net/
2. Upload `public/favicon.svg`
3. Customize if needed (or use defaults)
4. Generate and download the favicon package
5. Extract all files to `public/` folder

### Option 2: Favicon.io
1. Go to https://favicon.io/favicon-converter/
2. Upload `public/favicon.svg`
3. Download the generated package
4. Extract all files to `public/` folder

## Required Files

The following files need to be in `public/` folder:
- ✅ `favicon.svg` (already created)
- ✅ `site.webmanifest` (already created)
- ⏳ `favicon.ico` (generate from SVG)
- ⏳ `favicon-16x16.png` (generate from SVG)
- ⏳ `favicon-32x32.png` (generate from SVG)
- ⏳ `apple-touch-icon.png` (180x180, generate from SVG)
- ⏳ `android-chrome-192x192.png` (generate from SVG)
- ⏳ `android-chrome-512x512.png` (generate from SVG)

## Alternative: Manual Creation

If you prefer to create a custom favicon image:

1. Create a 512x512px image with your logo/initials
2. Use the same online tools above to upload your custom image
3. Generate all required sizes
4. Extract to `public/` folder

## Temporary Workaround

For now, the site will work without these files (browsers will show default icons). The metadata is already configured in `app/layout.tsx` and will automatically use the favicon files once they're added to the `public/` folder.