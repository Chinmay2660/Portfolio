import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/context/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import OfflineBanner from "@/components/OfflineBanner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chinmaybhoir.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chinmay Bhoir | Frontend Software Engineer",
  description:
    "Frontend Software Engineer with 3.5+ years building high-performance, responsive web apps. React.js, Redux, Next.js, TypeScript. Mumbai, India.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Software Engineer",
    "Mumbai",
    "Portfolio",
    "Chinmay Bhoir",
  ],
  authors: [{ name: "Chinmay Bhoir", url: siteUrl }],
  creator: "Chinmay Bhoir",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Chinmay Bhoir",
    title: "Chinmay Bhoir | Frontend Software Engineer",
    description:
      "Frontend Software Engineer with 3.5+ years building high-performance, responsive web apps. React.js, Next.js, TypeScript.",
    images: [{ url: "https://github.com/Chinmay2660.png", width: 400, height: 400, alt: "Chinmay Bhoir" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmay Bhoir | Frontend Software Engineer",
    description: "Frontend Software Engineer. React, Next.js, TypeScript. Mumbai, India.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="light"?"light":"dark";if(d==="dark")document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-primary text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chinmay Bhoir",
              jobTitle: "Frontend Software Engineer",
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/chinmay2660/",
                "https://github.com/Chinmay2660",
                "https://x.com/ChinmayBhoir14",
              ],
              knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript"],
            }),
          }}
        />
        <ThemeProvider>
          <OfflineBanner />
          <ErrorBoundary>
            <ScrollToTop />
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
