import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/mdx.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Arnoldus Meidio",
    "Javascript",
    "html",
    "css",
    "React",
    "Tailwind CSS",
    "Next js",
    "Express js",
  ],
  authors: [
    {
      name: "Arnoldus Meidio",
      url: "https://github.com/arnoldusmeidio",
    },
  ],
  creator: "Arnoldus Meidio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex w-full flex-col items-center antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors />
      </body>
    </html>
  );
}
