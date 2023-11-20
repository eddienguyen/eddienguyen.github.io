import "keen-slider/keen-slider.min.css";
import { Montserrat, Playfair_Display } from "next/font/google";
import "@/styles/global.scss";
import NavBar from "@/components/NavBar";
import SideNav from "@/components/SideNav";
import ClientMasterPage from "@/components/MasterPage";

export const metadata = {
  title: "Eddie Ng's Portfolio",
  description: "Welcome to Eddie Ng's Portfolio",
};

// Font files can be colocated inside the "/app"
const montserrat = Montserrat({
  display: "swap",
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  display: "swap",
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
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
