"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "웹서비스", href: "#services" },
    { name: "기술자료", href: "#development" },
    { name: "아인산업 소개", href: "#identity" },
    { name: "문의", href: "#footer" },
  ];

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 h-14 flex items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          
          {/* 좌측 로고 */}
          <div className="flex items-center">
            <a href="#" className="font-extrabold text-sm tracking-widest text-[#06101e]">
              AIN INDUSTRY
            </a>
          </div>

          {/* 중앙 단순 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-bold text-slate-700 hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 우측 단일 강조 버튼 */}
          <div className="hidden md:flex">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg bg-[#06101e] text-white px-4 py-2 text-xs font-bold hover:bg-[#006e9a] transition-all duration-200 hover:shadow-md"
            >
              웹서비스 이용하기
            </a>
          </div>

          {/* 모바일 토글 버튼 */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-1 text-slate-500 hover:text-slate-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">메뉴</span>
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 드로어 */}
      <div
        className={`md:hidden absolute top-14 left-0 w-full bg-white border-b border-slate-200 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 pt-2 pb-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-xs font-bold text-slate-700 hover:text-accent"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-lg bg-[#06101e] text-white py-2.5 text-xs font-bold hover:bg-[#006e9a] transition-colors"
            >
              웹서비스 이용하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
