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
  title: "Akshay Koul - Software Engineer Portfolio",
  description: "Interactive portfolio of Akshay Koul, Software Engineer. Ask me anything about my skills, projects, and experience!",
  keywords: ["Akshay Koul", "Software Engineer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Akshay Koul" }],
  creator: "Akshay Koul",
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
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
