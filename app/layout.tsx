import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextAuthProvider from "@/app/providers/SessionProvider";
import "./globals.css";
import Header from "@/app/_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "スタンプラリー",
  description: "問題を説いてスタンプを集めるWebアプリ",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
        {/*geistSans.variable = デフォルトのフォント*/}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
