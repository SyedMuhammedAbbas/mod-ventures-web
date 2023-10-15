"use client";

import { Navbar } from "@/components/Navbar";
import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "MOD Ventures",
//   description: "",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        {pathname !== "/" && <Navbar />}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
