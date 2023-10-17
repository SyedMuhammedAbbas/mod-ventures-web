import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { NavbarContextProvider } from "@/context";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOD Ventures",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavbarContextProvider>
        <body>
          <Navbar />
          {children}
        </body>
      </NavbarContextProvider>
    </html>
  );
}
