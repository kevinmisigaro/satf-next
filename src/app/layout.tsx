import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TopBanner from "@/components/topBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Action Trust Fund",
  description: "SATF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <TopBanner />
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
