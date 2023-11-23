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
        <div className="block-layout fixed flex z-[999] xl:hidden xl:-z-10 w-screen h-screen top-0 left-0 bg-primary-black justify-center items-center text-center text-white p-3">
          Please continue on desktop for my responsive version is under
          construction
        </div>
      </UIProvider>
      <style jsx global>{`
        .block-layout {
          font-size: 22px;
          font-weight: bold;

        }
      `}</style>
    </>
  );
}

export default ClientMasterPage;
