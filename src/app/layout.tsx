import type { Metadata } from "next";
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
  title: "Halal Goes - Your Trusted Halal Food Delivery Platform",
  description:
    "Discover and order from verified halal restaurants near you. Easy ordering, reliable delivery, and 100% halal-certified restaurants.",
  keywords: [
    "halal food",
    "food delivery",
    "halal restaurants",
    "halal certified",
    "food ordering",
  ],
  authors: [{ name: "Halal Goes" }],
  creator: "Halal Goes",
  publisher: "Halal Goes",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://halalgoes.com",
    siteName: "Halal Goes",
    title: "Halal Goes - Your Trusted Halal Food Delivery Platform",
    description:
      "Discover and order from verified halal restaurants near you. Easy ordering, reliable delivery, and 100% halal-certified restaurants.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Halal Goes Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halal Goes - Your Trusted Halal Food Delivery Platform",
    description: "Discover and order from verified halal restaurants near you.",
    images: ["/twitter-image.png"],
    creator: "@halalgoes",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#FFFAEA] w-full">
          <div className="max-w-[2100px] mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
