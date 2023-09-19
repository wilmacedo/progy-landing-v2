import { CookiesBox } from "@/components/cookies-box";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Progy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={twMerge("min-h-full", inter.className)}>
        <Navbar />

        <main className="transition-opacity duration-100">{children}</main>

        <Footer />

        <CookiesBox />
      </body>
    </html>
  );
}
