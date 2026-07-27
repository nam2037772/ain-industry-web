"use client";

import { companyInfo, companyStats } from "@/data/company";
import { webServices } from "@/data/services";

export default function CompanyStatsAndConnection() {
  // 건설/일반 순으로 정렬하여 14종 서비스 목록 확보
  const sortedServices = [...webServices].sort((a, b) => {
    if (a.isConstruction && !b.isConstruction) return -1;
    if (!a.isConstruction && b.isConstruction) return 1;
    return 0;
  });

  return (
    <section id="connection" className="py-20 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
            Collaboration
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#06101e] leading-snug mb-6">
            현장 적용 및 검토를 위한 협력 구조
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            아인산업은 현장의 피드백을 신속하게 소프트웨어 개선에 활용합니다.
            오프라인 시공 및 유통 기업인 ㈜아인산업안전과 협력하여, 시공 자재 규격 검증 및
            동바리 안전 데이터를 참고하고 제품 기능 보완 연구를 수행하고 있습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs pt-6 border-t border-border-light">
            
            {/* 법인 사업자 구분 안내 */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-800 flex items-center gap-2">
                ㈜아인산업안전
                <span className="text-[9px] text-slate-400 font-semibold border border-slate-200 px-1 py-0.5 rounded-sm">
                  별도 법인 사업자
                </span>
              </h4>
              <p className="text-slate-500 leading-normal">
                건설안전용품 유통 및 토목·방수 전문시공업을 영위하는 오프라인 비즈니스 법인입니다.
              </p>
              <div className="pt-2">
                {companyInfo.ainsafeMallUrl ? (
                  <a
                    href={companyInfo.ainsafeMallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent font-bold hover:underline"
                  >
                    아인산업안전 쇼핑몰 바로가기 →
                  </a>
                ) : (
                  <span className="text-slate-400">쇼핑몰 준비 중</span>
                )}
              </div>
            </div>

            {/* 수치 요약 */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800">
                개발 및 테스트 규모
              </h4>
              <ul className="space-y-1.5 text-slate-500">
                <li>• 총 연구 개발 중인 웹서비스: {companyStats.totalServicesCount}개</li>
                <li>• {companyStats.constructionServicesCount}</li>
                <li>• 실증 기반: {companyStats.philosophyBrief} ({companyStats.locationBrief})</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
// 
