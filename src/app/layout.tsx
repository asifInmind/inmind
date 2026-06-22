import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "inmind",
  description: "A platform for Order management system OMS",
  icons: {
    icon: "/icon.svg",
  },
};

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} antialiased`}>
      <body className="font-satoshi">
        <Header />
        {children}
      </body>
    </html>
  );
}
