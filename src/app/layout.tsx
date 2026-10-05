import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.cheymin.top"),
  title: { default: "Cheymin · 个人主页", template: "%s | Cheymin" },
  description: "你好，很高兴认识你👋 我叫 Cheymin，一名苦逼初中生。埋头苦干，沉默是金。",
  keywords: ["Cheymin", "自托管", "Homelab", "刷机", "折腾", "博客"],
  openGraph: { title: "Cheymin · 个人主页", description: "一名苦逼初中生。埋头苦干，沉默是金。", type: "website", locale: "zh_CN" },
  icons: { icon: "/avatar.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
