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
  metadataBase: new URL("https://swasthbharathealthcare.com"),
  title: {
    default: "Swasth Bharat Healthcare | Hospital Coordination & Cashless Insurance Support",
    template: "%s | Swasth Bharat Healthcare",
  },
  description:
    "Swasth Bharat Healthcare (SBHC) provides patient-first hospital coordination, cashless insurance assistance, TPA approvals, Ayushman Bharat PM-JAY scheme guidance, and documentation support across India.",
  keywords: [
    "Swasth Bharat Healthcare",
    "Swasth Bharat Health Care",
    "SwasthBharat Healthcare",
    "SBHC",
    "स्वस्थ भारत हेल्थकेयर",
    "Hospital Coordination India",
    "Cashless Insurance Assistance",
    "Ayushman Bharat Support",
    "PMJAY Scheme Guidance",
    "Medical Billing Audit",
    "TPA Approval Guidance",
    "Patient Care Manager",
    "Hospital Admission Assistance",
    "Discharge Support Hospital",
  ],
  authors: [{ name: "Swasth Bharat Healthcare", url: "https://swasthbharathealthcare.com" }],
  creator: "Swasth Bharat Healthcare",
  publisher: "Swasth Bharat Healthcare",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "https://swasthbharathealthcare.com",
  },
  openGraph: {
    title: "Swasth Bharat Healthcare | Hospital Coordination & Cashless Insurance Support",
    description:
      "Swasth Bharat Healthcare (SBHC) provides patient-first hospital coordination, cashless insurance assistance, TPA approvals, and Ayushman Bharat guidance for patients and families.",
    url: "https://swasthbharathealthcare.com",
    siteName: "Swasth Bharat Healthcare",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Swasth Bharat Healthcare - Patient Assistance and Hospital Coordination",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swasth Bharat Healthcare | Hospital Coordination & Cashless Support",
    description:
      "Navigating hospital coordination, approvals, documentation & insurance claims so families focus on recovery.",
    images: ["/hero-bg.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a2540",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "MedicalOrganization"],
      "@id": "https://swasthbharathealthcare.com/#organization",
      name: "Swasth Bharat Healthcare",
      alternateName: [
        "Swasth Bharat Health Care",
        "SwasthBharat Healthcare",
        "SBHC",
        "स्वस्थ भारत हेल्थकेयर",
      ],
      url: "https://swasthbharathealthcare.com",
      logo: "https://swasthbharathealthcare.com/logo.png",
      image: "https://swasthbharathealthcare.com/logo.png",
      description:
        "Swasth Bharat Healthcare (SBHC) is a patient-first healthcare support organization bridging the gap between hospitals, insurers, TPAs, and government healthcare schemes.",
      email: "care@swasthbharathealthcare.com",
      telephone: "+91-8368886902",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-8368886902",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-9286800211",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+91-7455844255",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Muradnagar",
        addressLocality: "Ghaziabad",
        addressRegion: "Uttar Pradesh",
        postalCode: "201206",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "Cashless Hospitalization Assistance",
        "Insurance and TPA Coordination",
        "Ayushman Bharat PM-JAY Scheme Guidance",
        "Hospital Admission Coordination",
        "Medical Documentation and Claim Assistance",
        "Hospital Discharge Support and Billing Audit",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://swasthbharathealthcare.com/#website",
      url: "https://swasthbharathealthcare.com",
      name: "Swasth Bharat Healthcare",
      alternateName: [
        "Swasth Bharat Health Care",
        "SwasthBharat Healthcare",
        "SBHC",
      ],
      publisher: {
        "@id": "https://swasthbharathealthcare.com/#organization",
      },
      inLanguage: ["en-IN", "hi"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
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
            __html: JSON.stringify(jsonLd),
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


