import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const APP_NAME = "Ebisi Chuks";
const APP_DEFAULT_TITLE = "Ebisi Chuks ";
const APP_TITLE_TEMPLATE = "%s | Ebisi Chuks";
const APP_DESCRIPTION =
  "Professional portfolio of Ebisi Chinecherem Leonard (Chuks), showcasing expertise in AI application development, Next.js solutions, and modern web technologies.";
const THEME_COLOR = "#061417";

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leowavecom.vercel.app"),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "u5-RBI1YVf1cKzH_rr_SNQVST8SAOxbIu1-nqBVm2dU",
  },
  icons: [
    { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    { url: "/apple-touch-icon.png", type: "image/png" },
    { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon.ico", type: "image/x-icon" },
  ],
  openGraph: {
    type: "website",
    url: "https://leowavecom.vercel.app/",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: "/medium-shot-anime-style-man-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Ebisi Chuks Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: ["/medium-shot-anime-style-man-portrait.jpg"],
    creator: "@EbisiChuks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
