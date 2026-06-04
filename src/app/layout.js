import { Geist } from "next/font/google";
import "./globals.css";
import { company } from "./data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: `${company.name} | SPM, Conveyors & Automation`,
  description: company.subtitle,
  keywords: [
    "Special Purpose Machines",
    "SPM manufacturer",
    "conveyors",
    "jigs and fixtures",
    "industrial automation",
    "Ghaziabad",
    "Hindustan Machines & Automation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
