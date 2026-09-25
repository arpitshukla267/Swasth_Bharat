import type { Metadata, Viewport } from "next";
import { Hind, Inter } from "next/font/google";
import "./globals.css";

const hind = Hind({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari", "latin"],
  variable: "--font-hind",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swasthbharat.org"),
  title: "SBHC | Swasth Bharat Healthcare | स्वस्थ भारत हेल्थकेयर",
  description: "SBHC helps patients and families navigate hospital coordination, healthcare approvals, documentation, insurance support, and treatment guidance during medical situations.",
  keywords: [
    "SBHC",
    "Swasth Bharat Healthcare",
    "Hospital Coordination India",
    "Cashless Insurance Assistance",
    "Ayushman Bharat Support",
    "Medical Billing Audit",
    "TPA Approval Guidance",
    "Patient Care Manager",
  ],
  authors: [{ name: "Swasth Bharat Healthcare (SBHC)" }],
  openGraph: {
    title: "SBHC - Patient-First Healthcare Support | स्वस्थ भारत हेल्थकेयर",
    description: "Navigating hospital coordination, approvals, documentation & insurance claims so families focus on recovery.",
    url: "https://swasthbharat.org",
    siteName: "Swasth Bharat Healthcare (SBHC)",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "SBHC Healthcare Assistance",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SBHC - Swasth Bharat Healthcare Support",
    description: "Every patient gets the right direction and timely treatment.",
    images: ["/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hi"
      className={`${hind.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="8Z5NtwkPnvC3B5zA-JcK-BAtLMW6_DG9LzVSWeEKKkA"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Swasth Bharat Healthcare (SBHC)",
              alternateName: "स्वस्थ भारत हेल्थकेयर",
              url: "https://swasthbharat.org",
              logo: "https://swasthbharat.org/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-1800-123-7242",
                contactType: "emergency customer support",
                availableLanguage: ["Hindi", "English"],
              },
              description:
                "Patient-first healthcare support bridging hospitals, TPAs, insurers, and government schemes.",
            }),
          }}
        />
      </head>
      <body
        surpasshydration-warning="true"
        className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}

