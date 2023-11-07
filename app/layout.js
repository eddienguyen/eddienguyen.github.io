import "../styles/global.scss";
import NavBar from "@/components/NavBar";
import ClientMasterPage from "@/components/MasterPage";

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
        <ClientMasterPage>
          <NavBar />
          {children}
        </ClientMasterPage>
      </body>
    </html>
  );
}
