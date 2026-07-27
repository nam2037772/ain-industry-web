import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "아인산업 | 건설기술 기반 웹서비스 및 소프트웨어 개발",
  description: "아인산업은 건설·안전·현장관리 분야의 웹 애플리케이션과 업무용 소프트웨어를 개발하는 제주 기반 정보통신업체입니다.",
  keywords: [
    "아인산업",
    "건설기술",
    "건설 소프트웨어",
    "구조검토",
    "공사일보",
    "사진대지",
    "TBM 일지",
    "검측 관리",
    "정보통신업",
    "제주 응용소프트웨어 개발",
  ],
  authors: [{ name: "남현우" }],
  openGraph: {
    title: "아인산업 | 건설기술 기반 웹서비스 및 소프트웨어 개발",
    description: "아인산업은 건설·안전·현장관리 분야의 웹 애플리케이션과 업무용 소프트웨어를 개발하는 제주 기반 정보통신업체입니다.",
    url: "https://ain-industry.co.kr", // 임시 도메인 또는 배포 URL
    siteName: "아인산업 공식 웹서비스 허브",
    locale: "ko_KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased">
        {children}
        {modal}
      </body>
    </html>
  );
}
