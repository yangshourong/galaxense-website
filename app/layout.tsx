import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "湖南龙罡智能科技 | GalaXense nGm无创血糖监测仪",
  description: "湖南龙罡智能科技有限公司专注于生命健康指标无创检测产品研发，核心产品GalaXense nGm AI智糖盒采用感存算一体传感器技术，实现无创血糖监测。",
  keywords: ["无创血糖监测", "血糖仪", "GalaXense", "AI智糖盒", "龙罡智能", "血糖监测仪"],
  authors: [{ name: "湖南龙罡智能科技有限公司" }],
  openGraph: {
    title: "湖南龙罡智能科技 | GalaXense nGm无创血糖监测仪",
    description: "专注无创血糖监测技术，让血糖管理更简单、更舒适",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
