import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const artScript = Dancing_Script({
  variable: "--font-art-script",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.cheymin.top"),
  title: { default: "Cheyminの主页", template: "%s | Cheyminの主页" },
  description: "你好，很高兴认识你。我叫 Cheymin，一名苦逼初中生。埋头苦干，沉默是金。",
  keywords: ["Cheymin", "自托管", "Homelab", "刷机", "折腾", "博客"],
  openGraph: {
    title: "Cheyminの主页",
    description: "一名苦逼初中生。埋头苦干，沉默是金。",
    type: "website",
    locale: "zh_CN",
  },
  icons: {
    icon: [{ url: "/avatar.webp", type: "image/webp" }],
    shortcut: "/avatar.webp",
    apple: "/avatar.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable} ${artScript.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}.loader{display:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}