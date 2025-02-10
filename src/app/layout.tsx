import type { Metadata, Viewport } from "next";

import Footer from "@/components/Footer";
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";

const APP_NAME = "Ebisi Chuks";
const APP_DEFAULT_TITLE =
  "Ebisi Chuks | creative frontend developer & AI Developer api mentor";
const APP_TITLE_TEMPLATE = "%s | Ebisi Chuks";
const APP_DESCRIPTION =
  "Professional portfolio of Ebisi Chinecherem Leonard (Chuks), showcasing expertise in AI application development, Next.js solutions, and modern web technologies.";
const THEME_COLOR = "#061417";

const ICONS = [
  { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
  { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
  { url: "/apple-touch-icon.png", type: "image/png" },
  { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  { url: "/favicon.ico", type: "image/x-icon" },
];

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leowavecom.vercel.app/"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "AI Developer",
    "Next.js Developer",
    "Firebase Expert",
    "Full-Stack Developer",
    "Portfolio",
    "Ebisi Chinecherem Leonard",
    "Leowave",
    "Leo x",
  ],
  icons: ICONS,
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/medium-shot-anime-style-man-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ebisi Chuks Portfolio Preview",
      },
    ],
    url: "https://leowavecom.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/medium-shot-anime-style-man-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ebisi Chuks Portfolio Preview",
      },
    ],
    creator: "@EbisiChuks || @leowave",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#061417" />
      <body>
        <header>
          <Nav />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
