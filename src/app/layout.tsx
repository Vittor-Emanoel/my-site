import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { Header } from "./components/Header";
import "./globals.css";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vittor Emanoel",
  description: "Desenvolver de software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${poppins.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
