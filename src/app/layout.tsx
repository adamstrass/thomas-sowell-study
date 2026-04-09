import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import AskPanel from "@/components/AskPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sowell Study — Thomas Sowell Study Platform",
  description:
    "A study platform exploring the ideas of Thomas Sowell across economics, race & culture, and political philosophy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen">
        <ScrollProgress />
        <Sidebar />
        <div className="ml-64">
          <header className="sticky top-0 z-40 border-b border-card-border bg-background/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto flex items-center justify-center px-8 py-3">
              <SearchBar />
            </div>
          </header>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
        <AskPanel />
      </body>
    </html>
  );
}
