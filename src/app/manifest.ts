import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akshay Koul - Software Development Manager Portfolio',
    short_name: 'Akshay Koul Portfolio',
    description: 'Interactive portfolio of Akshay Koul, Software Development Manager with 12+ years experience',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/avatar.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/avatar.jpg', 
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}