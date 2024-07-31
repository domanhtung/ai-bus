/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import clsx from "clsx";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIBus",
  description: "Your Trusted Partner in Innovation with AI, Blockchain & Fintech Experts.",
  openGraph: {
    title: "AIBus",
    description:
      "Your Trusted Partner in Innovation with AI, Blockchain & Fintech Experts.",
    url: "https://aibus.netlify.app/",
    siteName: "AIBus",
    images: [
      {
        url: "https://aibus.netlify.app/images/thumbnail.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossOrigin="anonymous"
        />
      </head>
      <body className={clsx(inter.className, "bg-background")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
