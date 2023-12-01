import { localPlayfair, localMontserrat } from "./fonts";
import "keen-slider/keen-slider.min.css";
import "@/styles/global.scss";
import personalInfo from "public/data/about.json";
import NavBar from "@/components/NavBar";
export const metadata = {
  title: {
    template: "EddieNguyen | %s",
    default: "EddieNguyen's Portfolio", // a default is required when creating a template
    // absolute: "EddieNguyen's Portfolio",  // used to provide a title that ignores title.template set in parent segments
  },
  category: "technology", // <meta name="category" content="technology" />
  description: "Welcome to EddieNguyen's Portfolio",
  applicationName: "EddieNguyen",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  publisher: "Nguyen Hoang Quan",
  creator: "Eddie",
  authors: [{ name: "Eddie", url: "https://eddienguyen.github.io" }],
  metadataBase: new URL(personalInfo.homepage_https),
  alternates: {
    canonical: "/", //  <link rel="canonical" href="https://homepage-path" />
    languages: {
      "en-US": "/en", // <link rel="alternate" hreflang="en-US" href="https://homepage-path/en" />
      "vi-VI": "/vi",
    },
  },
  openGraph: {
    title: "",
    description: "eddienguyen web developer portfolio",
    url: new URL(personalInfo.homepage_https),
    siteName: "EddieNguyen",
    locale: "vi_VI",
    type: "website",
    // images: personalInfo.imagePath, // <meta property="og:image" content="https://path-to-image" />
    images: [
      {
        url: personalInfo.imagePath,
        width: 1395,
        height: 931,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // icons: { // checks https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
  //   icon: '/icon.png',
  //   shortcut: '/shortcut-icon.png',
  //   apple: '/apple-icon.png',
  //   other: {
  //     rel: 'apple-touch-icon-precomposed',
  //     url: '/apple-touch-icon-precomposed.png',
  //   },
  // },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }, // <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html
      lang="en"
      className={`${localMontserrat.variable} ${localPlayfair.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}
