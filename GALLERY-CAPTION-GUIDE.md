# Gallery Caption Guide

## Where to Add Captions

All gallery captions are located in: **`components/sections/GallerySection.tsx`**

Starting at **line 17**, you'll find the `galleryImages` array with all 12 images.

## How to Add Your Captions

For each image (1-12), simply replace the placeholder text with your own caption:

### Image 1
```typescript
{
  id: 1,
  src: '/images/gallery/1.jpeg',
  alt: 'Gallery Image 1',
  caption: 'Add your caption for image 1 here', // ← EDIT THIS
  category: 'Adventure', // ← You can also change the category
},
```

### Image 2
```typescript
{
  id: 2,
  src: '/images/gallery/2.jpeg',
  alt: 'Gallery Image 2',
  caption: 'Add your caption for image 2 here', // ← EDIT THIS
  category: 'Travel', // ← You can also change the category
},
```

### Image 3
```typescript
{
  id: 3,
  src: '/images/gallery/3.jpeg',
  alt: 'Gallery Image 3',
  caption: 'Add your caption for image 3 here', // ← EDIT THIS
  category: 'Nature', // ← You can also change the category
},
```

### Image 4
```typescript
{
  id: 4,
  src: '/images/gallery/4.jpeg',
  alt: 'Gallery Image 4',
  caption: 'Add your caption for image 4 here', // ← EDIT THIS
  category: 'Hobbies', // ← You can also change the category
},
```

### Image 5
```typescript
{
  id: 5,
  src: '/images/gallery/5.jpeg',
  alt: 'Gallery Image 5',
  caption: 'Add your caption for image 5 here', // ← EDIT THIS
  category: 'Travel', // ← You can also change the category
},
```

### Image 6
```typescript
{
  id: 6,
  src: '/images/gallery/6.jpeg',
  alt: 'Gallery Image 6',
  caption: 'Add your caption for image 6 here', // ← EDIT THIS
  category: 'Adventure', // ← You can also change the category
},
```

### Image 7
```typescript
{
  id: 7,
  src: '/images/gallery/7.jpeg',
  alt: 'Gallery Image 7',
  caption: 'Add your caption for image 7 here', // ← EDIT THIS
  category: 'Nature', // ← You can also change the category
},
```

### Image 8
```typescript
{
  id: 8,
  src: '/images/gallery/8.jpeg',
  alt: 'Gallery Image 8',
  caption: 'Add your caption for image 8 here', // ← EDIT THIS
  category: 'Hobbies', // ← You can also change the category
},
```

### Image 9
```typescript
{
  id: 9,
  src: '/images/gallery/9.jpeg',
  alt: 'Gallery Image 9',
  caption: 'Add your caption for image 9 here', // ← EDIT THIS
  category: 'Adventure', // ← You can also change the category
},
```

### Image 10
```typescript
{
  id: 10,
  src: '/images/gallery/10.jpeg',
  alt: 'Gallery Image 10',
  caption: 'Add your caption for image 10 here', // ← EDIT THIS
  category: 'Travel', // ← You can also change the category
},
```

### Image 11
```typescript
{
  id: 11,
  src: '/images/gallery/11.jpeg',
  alt: 'Gallery Image 11',
  caption: 'Add your caption for image 11 here', // ← EDIT THIS
  category: 'Nature', // ← You can also change the category
},
```

### Image 12
```typescript
{
  id: 12,
  src: '/images/gallery/12.jpeg',
  alt: 'Gallery Image 12',
  caption: 'Add your caption for image 12 here', // ← EDIT THIS
  category: 'Hobbies', // ← You can also change the category
},
```

## Available Categories

You can use any of these categories (or create your own):
- **Adventure** (⛰️ emoji)
- **Travel** (✈️ emoji)
- **Nature** (🌅 emoji)
- **Hobbies** (📸 emoji)

## Caption Examples

Here are some caption style ideas:

**Short & Sweet:**
- "Golden hour in the city"
- "Mountain memories"
- "Weekend adventures"

**Descriptive:**
- "Watching the sunset from the peak"
- "Exploring hidden gems in Tokyo"
- "Coffee and conversations"

**Inspirational:**
- "Life is either a daring adventure or nothing"
- "Collecting moments, not things"
- "Finding beauty in the journey"

## How to Test

1. Save your changes to `GallerySection.tsx`
2. Visit `http://localhost:3000/gallery`
3. Your images should now display with your custom captions
4. Click any image to see the full-size lightbox with caption

## Notes

- The caption appears on hover over the image thumbnail
- The caption also appears in the lightbox when you click an image
- Categories are displayed as colored tags
- You can edit captions anytime - just refresh the page to see changes