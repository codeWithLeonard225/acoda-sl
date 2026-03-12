import "./globals.css";
// app/layout.js

export const metadata = {
  title: "ACoDA Microfinance | Agency for Community Development Alternatives",
  description:
    "ACoDA is a female-owned, registered microfinance institution in Sierra Leone, providing tailored financial services and loans to MSMEs and smallholder farmers.",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      { url: "/icons/logo-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/logo-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/icons/logo-192x192.png",
    apple: "/icons/logo-192x192.png",
  },

  keywords: [
    "ACoDA Microfinance",
    "Agency for Community Development Alternatives",
    "Microfinance Sierra Leone",
    "Loan Management System",
    "Agricultural Loans Sierra Leone",
    "MSME Financing",
    "Female-owned Microfinance",
    "Community Development Finance",
  ],

  authors: [{ name: "ACoDA Microfinance" }],
  creator: "ACoDA Microfinance",
  publisher: "ACoDA Microfinance",

  // Update this URL once your official domain is live
  metadataBase: new URL("https://www.acoda-sl.org"), 
  applicationName: "ACoDA Microfinance",
  classification: "Microfinance Management Software",

  robots: { index: true, follow: true },
  referrer: "strict-origin-when-cross-origin",

  alternates: {
    canonical: "https://www.acoda-sl.org",
  },

  openGraph: {
    title: "ACoDA Microfinance",
    description:
      "Empowering Sierra Leonean entrepreneurs and farmers through reasonable interest rates and diverse financial services.",
    url: "https://www.acoda-sl.org",
    siteName: "ACoDA Microfinance",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icons/logo-512x512.png",
        width: 512,
        height: 512,
        alt: "ACoDA Microfinance Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "ACoDA Microfinance",
    description:
      "Registered female-owned microfinance institution driving community growth in Sierra Leone.",
    images: ["/icons/logo-512x512.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Changed to Blue-900 color to match the site theme
  themeColor: "#1e3a8a", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="color-scheme" content="light" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}