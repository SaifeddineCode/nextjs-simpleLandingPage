import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Poppins } from "next/font/google";
import ButtonContact from "./components/ButtonContact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NetWaciila - Société de Services en Ingénierie Informatique",
  description:
    "Société de Services en Ingénierie Informatique basée à Agadir MAROC",
  icons: {
    icon: "/netwaciila-favicon.png", // path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
        <ButtonContact />
      </body>
    </html>
  );
}
