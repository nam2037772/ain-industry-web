"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "소개", href: "#identity" },
    { name: "서비스", href: "#services" },
    { name: "개발 방향", href: "#development" },
    { name: "관련 사업", href: "#connection" },
    { name: "문의", href: "#footer" },
  ];

  return (
    <header className="w-full bg-white border-b border-border-light sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* 브랜드 명세 */}
          <div className="flex items-center">
            <a href="#" className="flex items-baseline gap-2">
              <span className="text-sm font-bold tracking-tight text-slate-900">
                AIN INDUSTRY
              </span>
              <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                건설기술 기반 웹서비스
              </span>
            </a>
          </div>

          {/* 단순 텍스트 메뉴 */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-slate-500 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 모바일 햄버거 토글 */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">메뉴</span>
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
        className={`md:hidden ${isOpen ? "block bg-white border-b border-border-light" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pt-1 pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-xs font-medium text-slate-600 hover:text-accent"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
