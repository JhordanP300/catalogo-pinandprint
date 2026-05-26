import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pin & Print - Camisas Únicas Hechas a Tu Mood",
  description: "Catálogo de camisas únicas con diseños exclusivos. Estampados, personalizados y ediciones limitadas. Envíos a todo el país.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JBKHQ1TEYT"
        />
        <Script
          id="gtag-script"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JBKHQ1TEYT');`,
          }}
        />
      </body>
    </html>
  );
}
