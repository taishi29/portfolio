// app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ViewTransitions from "@/components/layout/ViewTransitions";
import Background from "@/components/layout/Background";
import SiteHeader from "@/components/layout/SiteHeader";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sano Portfolio",
  description: "Sano Taishi / Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <Background />
        <SiteHeader />
        <ViewTransitions />
        {children}
      </body>
    </html>
  );
}
