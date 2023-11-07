"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import MoreIntro from "@/components/MoreIntro";
import Services from "@/components/Services";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home({ children }) {
  return (
    <main className="">
      <ParallaxProvider>
        <Header />
        <MoreIntro />
        <Features />
        <Services />
        {children}
      </ParallaxProvider>
    </main>
  );
}