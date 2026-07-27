"use client";

import { companyInfo } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 text-slate-400 py-16 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 상단 레이아웃 */}
        <div className="pb-8 border-b border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* 브랜드 영역 */}
          <div className="md:col-span-5">
            <span className="text-base font-extrabold text-white tracking-wider block">
              AIN INDUSTRY
            </span>
            <span className="text-2xs text-slate-500 mt-1 block font-medium">
              Construction Technology Software | 건설기술 기반 웹서비스
            </span>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
              아인산업은 건설, 안전, 현장관리 실무의 자동화 및 스마트화를 목표로
              다양한 경량 웹서비스 및 업무용 소프트웨어를 공급하는 정보통신업체입니다.
            </p>
          </div>

          {/* 사업자 상세 정보 */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="text-slate-200 font-bold mb-3">사업자 정보</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-500">상호 : </span>
                  <span className="text-slate-300 font-medium">{companyInfo.name}</span>
                </li>
                <li>
                  <span className="text-slate-500">대표자 : </span>
                  <span className="text-slate-300 font-medium">{companyInfo.ceo}</span>
                </li>
                <li>
                  <span className="text-slate-500">사업장 주소 : </span>
                  <span className="text-slate-300 font-medium">{companyInfo.address}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-200 font-bold mb-3">업종 및 연락처</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-slate-500">주업종 : </span>
                  <span className="text-slate-300 font-medium">{companyInfo.primaryBiz}</span>
                </li>
                <li>
                  <span className="text-slate-500">부업종 : </span>
                  <span className="text-slate-300 font-medium">{companyInfo.secondaryBiz}</span>
                </li>
                
                {/* 연락처 방어 코드 */}
                {companyInfo.phone && (
                  <li>
                    <span className="text-slate-500">연락처 : </span>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-slate-300 hover:text-accent font-medium transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </li>
                )}
                
                {/* 이메일 방어 코드 */}
                {companyInfo.email && (
                  <li>
                    <span className="text-slate-500">이메일 : </span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-slate-300 hover:text-accent font-medium transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

        </div>

        {/* 하단 카피라이트 및 주의사항 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-3xs text-slate-500 gap-4">
          <p>
            © {currentYear} AIN INDUSTRY. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="border-r border-slate-800 pr-4">개인정보보호 및 신뢰성 우선</span>
            <span>본 페이지에 수록된 웹서비스 정보는 아인산업에 귀속됩니다.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
