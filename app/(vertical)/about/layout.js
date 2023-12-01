import personalInfo from "public/data/about.json";

export const metadata = {
  title: "About ",
  description:
    "EddieNguyen (Nguyễn Hoàng Quân) information, background, skills and all information of a web developer",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  publisher: "Nguyen Hoang Quan",
  creator: "Eddie",
  authors: [{ name: "Eddie", url: "https://eddienguyen.github.io" }],
  metadataBase: new URL(personalInfo.homepage_https),
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
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
