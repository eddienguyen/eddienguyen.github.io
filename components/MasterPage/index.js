"use client";

import TypeStyles from "@/styles/theme/types";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

function ClientMasterPage(props) {
  return (
    <>
      <TypeStyles />
      <Background />
      {props.children}
      <Footer />
    </>
  );
}

export default ClientMasterPage;
