"use client";
// import Features from "@/components/Features";
// import Services from "@/components/Services";
// import { ParallaxProvider } from "react-scroll-parallax";
import { useContext } from "react";

import Header from "@/components/Header";
import MoreIntro from "@/components/MoreIntro";
import FeatureMedia from "@/components/FeatureMedia";
import SectionViewProjects from "@/components/ViewProjects";
import SectionViewStories from "@/components/ViewStories";
import SectionContactMe from "@/components/ContactMe";
import SectionContactAdress from "@/components/ContactAddress";
import { UIContext } from "@/components/contexts/UIProvider";
import SideNav from "@/components/SideNav";

export default function Home({ children }) {
  const { loadingState } = useContext(UIContext);
  return (
    <main
      className={`${
        loadingState === "done" ? "opacity-100" : "opacity-0"
      } transition-all`}
    >
      <SideNav />

      <Header />
      <MoreIntro />
      <FeatureMedia />
      <SectionViewProjects />
      <SectionViewStories />
      <SectionContactMe />
      <SectionContactAdress />
      {/* <Features /> */}
      {/* <Services /> */}
      {children}
    </main>
  );
}