import NavBar from "@/components/NavBar";
import ClientMasterPage from "@/components/MasterPage";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <ClientMasterPage direction="vertical">
      <NavBar />
      {children}
    </ClientMasterPage>
  );
}