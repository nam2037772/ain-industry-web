"use client";

import { companyInfo, companyStats } from "@/data/company";

export default function CompanyStatsAndConnection() {
  return (
    <section id="connection" className="py-20 bg-white border-b border-border-light scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
            Collaboration
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            현장 실증을 위한 독자적 협력 모델
          </h2>

          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            아인산업은 현장의 피드백을 신속하게 소프트웨어 구조에 이식합니다.
            오프라인 시공 및 유통 기업인 ㈜아인산업안전과 협력하여, 시공 자재 규격 검증 및
            동바리 안전 지침 데이터를 확보하고 제품을 정밀하게 보완해 나갑니다.
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
                개발 실증 규모
              </h4>
              <ul className="space-y-1.5 text-slate-500">
                <li>• 총 개발·운영 웹서비스: {companyStats.totalServicesCount}개</li>
                <li>• 건설 및 안전 분야 특화: {companyStats.constructionServicesCount}</li>
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
