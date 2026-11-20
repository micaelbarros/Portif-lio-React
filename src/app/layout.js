import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { profileData } from "../data/profileData";

export const metadata = {
  title: `${profileData.name} | Currículo & Portfólio React/Next.js`,
  description: profileData.bio,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
