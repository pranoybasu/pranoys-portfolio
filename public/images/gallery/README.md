# Gallery Images

This directory should contain 8 personal gallery images. Replace the placeholder images with your actual photos.

## Required Images

1. **adventure-1.jpg** - Adventure category (e.g., hiking, trekking)
2. **adventure-2.jpg** - Adventure category (e.g., rock climbing, camping)
3. **travel-1.jpg** - Travel category (e.g., city landscapes, landmarks)
4. **travel-2.jpg** - Travel category (e.g., cultural sites, street photography)
5. **nature-1.jpg** - Nature category (e.g., landscapes, sunsets)
6. **nature-2.jpg** - Nature category (e.g., wildlife, natural scenery)
7. **hobby-1.jpg** - Hobbies category (e.g., photography, sports)
8. **hobby-2.jpg** - Hobbies category (e.g., creative projects, activities)

## Image Specifications

- **Format**: JPG or PNG
- **Aspect Ratio**: 4:3 or 16:9 (landscape orientation recommended)
- **Resolution**: Minimum 1200x800px for high quality
- **File Size**: Optimize to under 500KB per image for better performance
- **Naming**: Use lowercase with hyphens (as shown above)

## Temporary Placeholders

Until you add your actual images, the gallery will show gradient placeholders with emoji icons. Simply replace these placeholder files with your photos using the exact filenames listed above.

## How to Add Images

1. Place your 8 images in this directory (`public/images/gallery/`)
2. Ensure they match the filenames exactly (case-sensitive)
3. The Next.js Image component will automatically optimize them
4. Restart the dev server to see your images

## Optional: Additional Categories

You can add more images and categories by:
1. Adding more image files to this directory
2. Updating the `galleryImages` array in `components/sections/GallerySection.tsx`
3. Following the same naming pattern