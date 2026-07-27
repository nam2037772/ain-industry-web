"use client";

import { companyInfo } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-slate-900 text-slate-400 py-12 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 상호 정보 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800 text-xs">
          
          {/* 기업 사명 */}
          <div className="space-y-2">
            <span className="text-sm font-bold text-white tracking-wider block">
              AIN INDUSTRY
            </span>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              건설·안전 현장의 반복적인 실무를 경량 웹 서비스로 해결하는 응용 소프트웨어 개발 공급업체입니다.
            </p>
          </div>

          {/* 사업자 개요 */}
          <div>
            <h4 className="text-slate-200 font-bold mb-3">사업자 정보</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>상호: {companyInfo.name} | 대표자: {companyInfo.ceo}</li>
              <li>주소: {companyInfo.address}</li>
              <li>업종: {companyInfo.industry} (주: {companyInfo.primaryBiz} / 부: {companyInfo.secondaryBiz})</li>
            </ul>
          </div>

          {/* 연락 채널 */}
          <div>
            <h4 className="text-slate-200 font-bold mb-3">연락처</h4>
            <ul className="space-y-1.5 text-slate-400">
              {companyInfo.phone && (
                <li>
                  전화:{" "}
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                    {companyInfo.phone}
                  </a>
                </li>
              )}
              {companyInfo.email && (
                <li>
                  이메일:{" "}
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                    {companyInfo.email}
                  </a>
                </li>
              )}
              {!companyInfo.phone && !companyInfo.email && (
                <li className="text-slate-600">등록된 연락처가 없습니다.</li>
              )}
            </ul>
          </div>
          
        </div>

        {/* 카피라이트 */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-2">
          <p>© {currentYear} AIN INDUSTRY. All rights reserved.</p>
          <p>아인산업과 ㈜아인산업안전은 상이한 고유 번호를 가진 개별 사업자입니다.</p>
        </div>

      </div>
    </footer>
  );
}
