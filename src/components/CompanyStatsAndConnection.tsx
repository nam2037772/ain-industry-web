"use client";

import { companyInfo, companyStats } from "@/data/company";

export default function CompanyStatsAndConnection() {
  return (
    <section id="connection" className="py-20 sm:py-28 bg-slate-50 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* 좌측: 회사 실적 현황판 */}
          <div className="lg:col-span-5">
            <h2 className="text-base font-semibold tracking-wider text-accent uppercase">
              Performance
            </h2>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              투명한 팩트 중심의 개발 현황
            </h3>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              아인산업은 확인 가능하고 실제로 제공 중인 실적 지표만을 표기합니다. 과도한 문구 대신
              정확한 제품 현황으로 신뢰를 쌓아갑니다.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {/* 실적 카드 1 */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                <span className="block text-2xl font-black text-slate-800">
                  {companyStats.totalServicesCount}개
                </span>
                <span className="mt-1 block text-xs text-slate-400 font-medium">
                  개발·운영 웹서비스
                </span>
              </div>
              
              {/* 실적 카드 2 */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80">
                <span className="block text-2xl font-black text-slate-800">
                  {companyStats.constructionServicesCount}
                </span>
                <span className="mt-1 block text-xs text-slate-400 font-medium">
                  건설·안전 분야 서비스
                </span>
              </div>

              {/* 실적 카드 3 */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 col-span-2">
                <span className="block text-sm font-bold text-slate-800">
                  {companyStats.locationBrief}
                </span>
                <span className="mt-0.5 block text-xs text-slate-400 font-medium">
                  제주특별자치도 서귀포시 성산읍 소재
                </span>
              </div>

              {/* 실적 카드 4 */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 col-span-2">
                <span className="block text-sm font-bold text-slate-800">
                  {companyStats.philosophyBrief}
                </span>
                <span className="mt-0.5 block text-xs text-slate-400 font-medium">
                  현업 노하우 이식 및 애자일 릴리즈
                </span>
              </div>
            </div>
          </div>

          {/* 우측: 관련 사업 및 ㈜아인산업안전 연결 */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <h2 className="text-base font-semibold tracking-wider text-slate-400 uppercase">
              Affiliated Business
            </h2>
            <h3 className="mt-2 text-2xl font-bold text-slate-800">
              현장 사업과의 연결
            </h3>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              아인산업은 현업에서의 깊은 시야를 토대로 솔루션을 다듬어갑니다. 현장의 축적된 시공 경험과
              <span className="font-semibold text-slate-800"> ㈜아인산업안전</span>의 건설자재 유통 및 시공 실무를 기반으로
              사용성이 철저히 검증된 웹서비스를 공동 검토하고 실무에 배치합니다.
            </p>

            <div className="mt-8 rounded-xl bg-slate-50 border border-slate-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base font-bold text-slate-800">
                  ㈜아인산업안전
                </h4>
                <span className="rounded bg-slate-200 px-2.5 py-0.5 text-3xs font-semibold text-slate-600 border border-slate-300">
                  별도 법인 사업자
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                건설안전용품 유통, 방수·토목·건설자재 도소매 및 전문 현장 시공을 전문적으로 영위하는
                오프라인 전문 기업입니다.
              </p>

              {companyInfo.ainsafeMallUrl ? (
                <a
                  href={companyInfo.ainsafeMallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-900 text-white px-5 py-3 text-xs font-semibold shadow-xs transition-colors"
                >
                  아인산업안전 쇼핑몰 방문
                  <svg className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ) : (
                <div className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-slate-100 text-slate-400 px-5 py-3 text-xs font-semibold border border-slate-200 cursor-not-allowed">
                  아인산업안전 쇼핑몰 (링크 준비 중)
                </div>
              )}
            </div>

            <div className="mt-4 flex items-start gap-2.5">
              <span className="mt-0.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <p className="text-3xs text-slate-400 leading-normal">
                아인산업(정보통신업)과 ㈜아인산업안전(자재유통/시공업)은 독자적인 경영 주체 및 사업자 번호를 가진 별개의 회사이며, 본 플랫폼은 기술 개발 협력을 증명하는 허브 페이지로 작동합니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
