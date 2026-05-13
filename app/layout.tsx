import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Noto_Serif_Devanagari } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatLauncher } from "@/components/layout/ChatLauncher";
import { SITE } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const deva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-deva",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Field-validated autonomous water-intelligence systems for India's rivers and industrial sites. National Champion of the Jal Shakti Hackathon 2025.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  keywords: [
    "autonomous surface vessel",
    "water intelligence",
    "Jal Prahari",
    "river monitoring",
    "Indian deep tech",
    "Aurixys",
    "Jal Shakti",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Autonomous river-intelligence and industrial water-telemetry systems. Field-validated on the Godavari and Ganga.",
    images: [{ url: "/assets/og/og-image.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Autonomous river-intelligence systems. Built in India.",
    images: ["/assets/og/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    foundingDate: "2026",
    industry: "Deep Tech / Water Intelligence",
    address: { "@type": "PostalAddress", addressLocality: "Nashik", addressRegion: "MH", addressCountry: "IN" },
    contactPoint: { "@type": "ContactPoint", email: SITE.email, telephone: SITE.phone, contactType: "customer support" },
    founder: [
      { "@type": "Person", name: "Vishal Patil" },
      { "@type": "Person", name: "Bhagyashri Patil" },
      { "@type": "Person", name: "Kavish Joshi" },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable} ${mono.variable} ${deva.variable}`}>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-none focus:border focus:border-accent focus:bg-bg-elevated focus:px-3 focus:py-2 focus:text-sm focus:text-accent"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <ChatLauncher />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
