"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "소개", href: "#identity" },
    { name: "서비스", href: "#services" },
    { name: "개발 방향", href: "#development" },
    { name: "관련 사업", href: "#connection" },
    { name: "문의", href: "#footer" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "border-b border-slate-200 bg-white"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 영역 */}
          <div className="flex items-center">
            <a href="#" className="flex flex-col justify-center">
              <span className="text-base font-bold tracking-tight text-slate-900">
                AIN INDUSTRY
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-tight">
                건설기술 기반 웹서비스
              </span>
            </a>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-semibold text-slate-600 hover:text-accent transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">메뉴 열기</span>
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden ${
          isOpen ? "block border-b border-slate-200 bg-white" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pt-2 pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-xs font-semibold text-slate-700 hover:text-accent"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
