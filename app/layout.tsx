import type { Metadata } from "next";
import { Roboto_Mono, JetBrains_Mono, Rubik } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from './components/Header';

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Net",
  description: "Digitalize your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${jetbrainsMono.variable} ${rubik.variable} antialiased pt-24`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
