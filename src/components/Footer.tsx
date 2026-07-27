"use client";

import { companyInfo } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#06101e] text-slate-400 py-16 border-t border-slate-800 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs space-y-10">
        
        {/* 상단 3단 명세 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 기업 설명 */}
          <div className="space-y-3">
            <span className="text-sm font-extrabold text-white tracking-widest block">
              AIN INDUSTRY
            </span>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              건설·안전·현장관리 분야의 복잡한 연산과 수작업을 간단한 브라우저 인터페이스로 해결해 주는 응용 소프트웨어 개발사입니다.
            </p>
          </div>

          {/* 공식 등록정보 */}
          <div className="space-y-2 text-slate-400">
            <h4 className="font-bold text-white uppercase tracking-wider mb-2">사업자 정보</h4>
            <p>상호: {companyInfo.name} | 대표자: {companyInfo.ceo}</p>
            <p>사업장: {companyInfo.address}</p>
            <p>업태: 응용 소프트웨어 개발 및 공급업 (부: 컴퓨터 프로그래밍 서비스업)</p>
          </div>

          {/* 문의처 */}
          <div className="space-y-2 text-slate-400">
            <h4 className="font-bold text-white uppercase tracking-wider mb-2">연락처</h4>
            {companyInfo.phone && (
              <p>
                전화:{" "}
                <a href={`tel:${companyInfo.phone}`} className="hover:text-accent font-medium transition-colors">
                  {companyInfo.phone}
                </a>
              </p>
            )}
            {companyInfo.email && (
              <p>
                이메일:{" "}
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent font-medium transition-colors">
                  {companyInfo.email}
                </a>
              </p>
            )}
            {!companyInfo.phone && !companyInfo.email && (
              <p className="text-slate-500">등록된 연락처가 없습니다.</p>
            )}
          </div>

        </div>

        {/* 하단 카피라이트 및 법인 관계 공지 */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between text-[10px] text-slate-500 gap-4">
          <p>© {currentYear} AIN INDUSTRY. All rights reserved.</p>
          <p>아인산업(개인사업자)과 ㈜아인산업안전(법인사업자)은 법률상 및 사업자 상으로 다른 독립 개체입니다.</p>
        </div>

      </div>
    </footer>
  );
}
// 
