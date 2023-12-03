"use client";
// import Features from "@/components/Features";
// import Services from "@/components/Services";
// import { ParallaxProvider } from "react-scroll-parallax";
import { useContext, useLayoutEffect } from "react";

import Header from "@/components/Header";
import MoreIntro from "@/components/MoreIntro";
import FeatureMedia from "@/components/FeatureMedia";
import SectionViewProjects from "@/components/ViewProjects";
import SectionViewStories from "@/components/ViewStories";
import SectionContactMe from "@/components/ContactMe";
import SectionContactAdress from "@/components/ContactAddress";
import { UIContext } from "@/components/contexts/UIProvider";
import SideNav from "@/components/SideNav";
import { sendEvent } from "@/plugins/utils/events";
import AppEvent from "@/modules/constants/event_names";

export default function Home({ children }) {
  const { loadingState } = useContext(UIContext);

  const init = async () => {
    // wait for extra stuff
    sendEvent(AppEvent.PAGE_LOADED);
  };

  useLayoutEffect(() => {
    init();
  }, []);

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
