"use client";
import Script from "next/script";
import TypeStyles from "@/styles/theme/types";
// import Background from "@/components/Background";
import Footer from "@/components/Footer";
import UIProvider from "../contexts/UIProvider";

function ClientMasterPage(props) {
  return (
    <>
      <TypeStyles />
      <Script
        // async
        // defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
      />
      <UIProvider>
        {/* <Background /> */}
        {props.children}
        <Footer />
      </UIProvider>
    </>
  );
}

export default ClientMasterPage;
