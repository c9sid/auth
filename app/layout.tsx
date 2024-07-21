import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavbarMob from "@/components/Navbar-mob";
import { ThemeProvider } from "@/components/theme-provider";

const syne = Syne({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800']});

export const metadata: Metadata = {
  title: "Learning",
  description: "Created by Sid...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            >
        <Navbar />
        <NavbarMob />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
