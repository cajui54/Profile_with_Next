import type { Metadata } from "next";
import { Oxygen, Roboto } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./_components/header";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
  variable: "--font-oxygen",
});
const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Portfólio / Tiago Silva",
  description:
    "Seja bem vindo ao meu portfólio, nele contém minhas informações profissionais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${oxygen.variable} antialiased`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
