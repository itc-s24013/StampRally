import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextAuthProvider from "@/app/providers/SessionProvider";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/questions">👻スタンプラリー💫</a>
            </div>
        </nav>
        <NextAuthProvider>
            {children}
        </NextAuthProvider>
        </body>
    </html>
  );
}
