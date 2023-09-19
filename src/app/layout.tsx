import { CookiesBox } from "@/components/cookies-box";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Progy: Transforme visões em realidade",
  description:
    "O Progy é uma solução em software de gerenciamento de planejamento. Transforme suas visões em realidade e impulsione seu negócio com estratégias eficientes e resultados concretos. Descubra como podemos otimizar seu planejamento e alcançar seus objetivos.",
  themeColor: '#ffffff',
  robots: "index, follow",
  openGraph: {
    title: "Progy: Transforme visões em realidade",
    description:
      "O Progy é uma solução em software de gerenciamento de planejamento. Transforme suas visões em realidade e impulsione seu negócio com estratégias eficientes e resultados concretos. Descubra como podemos otimizar seu planejamento e alcançar seus objetivos.",
    type: "website",
    locale: "pt_BR",
    url: "https://progy.com.br",
    //image:
  },
  twitter: {
    card: "summary_large_image",
    site: "@owilmacedo",
    creator: "@owilmacedo",
  },
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
