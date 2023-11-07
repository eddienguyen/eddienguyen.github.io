"use client";

import Background from "@/components/Background";
import "../styles/global.scss";
import TypeStyles from "@/styles/theme/types";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Eddie Ng's Portfolio",
  description: "Welcome to Eddie Ng's Portfolio",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        <TypeStyles />
        <Background />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
