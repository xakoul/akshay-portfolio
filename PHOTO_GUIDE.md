# Adding Your Personal Photo

To replace the default avatar with your personal photo:

## Option 1: Replace the SVG avatar

1. Save your photo as `avatar.jpg`, `avatar.png`, or `avatar.webp` in the `public/` folder
2. Update the Image component in `src/components/ChatInterface.tsx`:

```tsx
<Image
  src="/avatar.jpg"  // Change this to your image filename
  alt="Akshay Koul"
  width={48}
  height={48}
  className="sm:w-14 sm:h-14 rounded-full border-2 border-gray-200 dark:border-gray-600 shadow-sm object-cover"
/>
```

## Option 2: Use a hosted image

If you have your photo hosted online (like GitHub, LinkedIn, etc.):

```tsx
<Image
  src="https://your-image-url.com/photo.jpg"
  alt="Akshay Koul"
  width={48}
  height={48}
  className="sm:w-14 sm:h-14 rounded-full border-2 border-gray-200 dark:border-gray-600 shadow-sm object-cover"
/>
```

## Tips for best results:

- **Square aspect ratio**: Use a square image (1:1 ratio) for best results
- **High quality**: Use at least 200x200 pixels for crisp display
- **Professional**: Use a professional headshot or clear photo
- **File size**: Keep under 500KB for fast loading

## Note:

The `object-cover` class ensures your photo fits nicely within the circular frame, cropping if necessary to maintain the circle shape.

The current SVG avatar is a placeholder that works well if you prefer not to use a personal photo.