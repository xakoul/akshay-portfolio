import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akshay Koul - Software Development Manager | Engineering Leader",
    template: "%s | Akshay Koul - Software Engineer"
  },
  description: "Akshay Koul is a Software Development Manager with 12+ years of experience in scaling teams and systems. Specialized in React, Node.js, AWS, and engineering leadership. Based in Bengaluru, India.",
  keywords: [
    "Akshay Koul",
    "Software Development Manager", 
    "Engineering Leader",
    "Software Engineer",
    "React Developer",
    "Node.js Developer", 
    "AWS Expert",
    "TypeScript Developer",
    "Full Stack Developer",
    "Bengaluru Software Engineer",
    "India Software Developer",
    "Portfolio",
    "Engineering Leadership",
    "System Architecture",
    "DevOps",
    "Microservices",
    "Cloud Computing"
  ],
  authors: [{ name: "Akshay Koul", url: "https://github.com/xakoul" }],
  creator: "Akshay Koul",
  publisher: "Akshay Koul",
  applicationName: "Akshay Koul Portfolio",
  category: "Technology",
  classification: "Portfolio Website",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xakoul.com',
    siteName: 'Akshay Koul Portfolio',
    title: 'Akshay Koul - Software Development Manager | Engineering Leader',
    description: 'Experienced Software Development Manager with 12+ years in scaling teams and systems. Expert in React, Node.js, AWS, and engineering leadership.',
    images: [
      {
        url: '/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Akshay Koul - Software Development Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshay Koul - Software Development Manager',
    description: 'Software Development Manager with 12+ years experience. Expert in React, Node.js, AWS, and engineering leadership.',
    images: ['/avatar.jpg'],
    creator: '@akshaykoul',
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this from Google Search Console
  },
  alternates: {
    canonical: 'https://xakoul.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akshay Koul",
    "jobTitle": "Software Development Manager",
    "description": "Software Development Manager with 12+ years of experience in scaling teams and systems to serve 10M+ users.",
    "url": "https://xakoul.com",
    "sameAs": [
      "https://linkedin.com/in/akshaykoul",
      "https://github.com/xakoul"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Technology Industry"
    },
    "knowsAbout": [
      "Software Engineering",
      "Engineering Leadership", 
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "System Architecture",
      "DevOps",
      "Microservices"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressCountry": "India"
    },
    "image": "https://xakoul.com/avatar.jpg"
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
