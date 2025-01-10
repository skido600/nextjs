import type { Metadata } from "next";

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ebisi Leonard | Creative Frontend Developer - Portfolio",
  description:
    "3+ years of experience. Specialized in building products, while ensuring a seamless web experience for clients across Africa.",
  keywords:
    "Ebisi leonard Leowave, Portfolio, Web Developer, TreasureUzoma, Frontend Developer, treasureuzoma, Treasure Dev, Treasure Uzoma Front-End Developer, Treasure Uzoma Programmer, Nigeria Programmer, Treasure Uzoma Portfolio",
  robots: "index, follow",
  icons: [
    { rel: "icon", url: "/assets/medium-shot-anime-style-man-portrait.jpg" },
    {
      rel: "apple-touch-icon",
      url: "/assets/medium-shot-anime-style-man-portrait.jpg",
    },
  ],
  openGraph: {
    title: "Leowave Leo x Ebisi leonard - Portfolio",
    description: "3+ years of experience in web development.",
    url: "https://leowavecom.vercel.app/",
    images: [
      {
        url: "/assets/medium-shot-anime-style-man-portrait.jpg",
        alt: "Ebisi leonard Portfolio Preview",
      },
    ],
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
      </body>
    </html>
  );
}
