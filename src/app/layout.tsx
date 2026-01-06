import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Clinic | Premium Cosmetology & Skincare",
  description: "Experience transformative skincare at Lumière Clinic. Expert aestheticians, cutting-edge technology, and personalized treatments for radiant skin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <Script src="https://cdn.jsdelivr.net/npm/iconify-icon@2.3.0/dist/iconify-icon.min.js" strategy="beforeInteractive" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
