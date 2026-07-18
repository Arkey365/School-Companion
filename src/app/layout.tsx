import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/navigation/Sidebar";
import MobileNav from "@/components/navigation/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School Companion",
  description: "A modern student dashboard for schedules, Mashov, notes and school tools.",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  icons: {
    icon: "/favicon.svg",
  },
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
      <body className="min-h-full bg-black text-zinc-50">
        <div className="min-h-screen flex">
          <aside className="hidden md:flex">
            <Sidebar />
          </aside>

          <div className="flex-1 flex flex-col">
            <main className="flex-1">
              <div className="p-4 md:p-6 lg:p-8">{children}</div>
            </main>
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
