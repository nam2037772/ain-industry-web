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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* 로고 영역 */}
          <div className="flex flex-col">
            <a href="#" className="group flex flex-col justify-center">
              <span className="text-lg font-bold tracking-wider text-slate-900 transition-colors group-hover:text-accent">
                AIN INDUSTRY
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-tight">
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
                className="text-sm font-medium text-slate-600 hover:text-accent transition-colors duration-200 py-2"
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
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">메뉴 열기</span>
              {isOpen ? (
                // Close icon SVG
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu icon SVG
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드로어 메뉴 */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 visible border-b border-slate-200 bg-white"
            : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pt-2 pb-6 shadow-inner">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
