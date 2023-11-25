import "keen-slider/keen-slider.min.css";
import "@/styles/global.scss";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";
import ClientMasterPage from "@/components/MasterPage";
import { localPlayfair, montserrat } from "./fonts";

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
    <html
      lang="en"
      className={`${montserrat.variable} ${localPlayfair.variable} `}
    >
      <body>
        <ClientMasterPage>
          <NavBar />
          <SideNav />
          {children}
        </ClientMasterPage>
      </body>
    </html>
  );
}
