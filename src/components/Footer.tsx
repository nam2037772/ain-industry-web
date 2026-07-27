"use client";

import { companyInfo } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white text-slate-500 py-16 border-t border-border-light scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs space-y-8">
        
        {/* 상단 3단 정보 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 기업 설명 */}
          <div className="space-y-3">
            <span className="text-sm font-bold text-slate-900 tracking-tight block">
              AIN INDUSTRY
            </span>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              건설·안전·현장관리 분야의 복잡한 연산과 수작업을 간단한 브라우저 인터페이스로 해결해 주는 응용 소프트웨어 개발 공급사입니다.
            </p>
          </div>

          {/* 사업자 명세 */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-2">사업자 정보</h4>
            <p>상호: {companyInfo.name} | 대표자: {companyInfo.ceo}</p>
            <p>사업장 주소: {companyInfo.address}</p>
            <p>업종: {companyInfo.industry} (주: {companyInfo.primaryBiz} / 부: {companyInfo.secondaryBiz})</p>
          </div>

          {/* 연락 통로 */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-800 uppercase tracking-wider mb-2">연락처</h4>
            {companyInfo.phone && (
              <p>
                전화:{" "}
                <a href={`tel:${companyInfo.phone}`} className="hover:text-accent font-medium">
                  {companyInfo.phone}
                </a>
              </p>
            )}
            {companyInfo.email && (
              <p>
                이메일:{" "}
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent font-medium">
                  {companyInfo.email}
                </a>
              </p>
            )}
            {!companyInfo.phone && !companyInfo.email && (
              <p className="text-slate-400">등록된 연락 정보가 없습니다.</p>
            )}
          </div>

        </div>

        {/* 하단 카피라이트 및 법인 관계 공지 */}
        <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row justify-between text-[10px] text-slate-400 gap-4">
          <p>© {currentYear} AIN INDUSTRY. All rights reserved.</p>
          <p>아인산업(개인사업자)은 ㈜아인산업안전(법인사업자)과 사업자 번호가 별개인 독자적 사업체입니다.</p>
        </div>

      </div>
    </footer>
  );
}
// 
