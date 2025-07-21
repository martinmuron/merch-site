import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MerchSite - Premium Product Catalog",
    template: "%s | MerchSite"
  },
  description: "A beautiful, modern product catalog website featuring premium products with Apple-style design. Browse our collection and get in touch for inquiries.",
  keywords: ["product catalog", "premium products", "e-commerce", "merchandise", "catalog website"],
  authors: [{ name: "MerchSite Team" }],
  creator: "MerchSite",
  publisher: "MerchSite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://merchandise-site-production.up.railway.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://merchandise-site-production.up.railway.app',
    title: 'MerchSite - Premium Product Catalog',
    description: 'A beautiful, modern product catalog website featuring premium products with Apple-style design.',
    siteName: 'MerchSite',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MerchSite - Premium Product Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MerchSite - Premium Product Catalog',
    description: 'A beautiful, modern product catalog website featuring premium products with Apple-style design.',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=630&fit=crop'],
  },
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ErrorBoundary>
            {children}
            <Toaster />
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}
