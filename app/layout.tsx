import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "读岩野攀｜读懂岩壁，自在去野", template: "%s｜读岩野攀" },
  description: "为想从室内走向自然岩壁的攀岩者，提供专业、友好的小团课程、周末野攀和国内外旅攀。",
  openGraph: {
    title: "读岩野攀｜读懂岩壁，自在去野",
    description: "专业小团自然岩壁课程、周末野攀野抱与国内外旅攀。",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "读岩野攀" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
