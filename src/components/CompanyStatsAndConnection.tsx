"use client";

import { companyInfo, companyStats } from "@/data/company";

export default function CompanyStatsAndConnection() {
  return (
    <section id="connection" className="py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
            Collaboration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* 좌측: 실적 요약 */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                웹서비스 개발 지표
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                자체적으로 기획하고 빌드한 실질적인 소프트웨어 지표입니다.
              </p>

              <ul className="space-y-3 text-xs">
                <li className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">총 개발·운영 웹서비스</span>
                  <span className="font-bold text-slate-800">{companyStats.totalServicesCount}개</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">건설 및 안전 분야</span>
                  <span className="font-bold text-slate-800">{companyStats.constructionServicesCount}</span>
                </li>
                <li className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500">기반 지역</span>
                  <span className="font-bold text-slate-800">{companyStats.locationBrief}</span>
                </li>
              </ul>
            </div>

            {/* 우측: 관련 사업 연결 */}
            <div className="p-6 border border-slate-200 rounded bg-slate-50/30">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-950">
                  ㈜아인산업안전
                </h4>
                <span className="text-[10px] text-slate-500 font-semibold px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-sm">
                  별도 법인 사업자
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                아인산업은 건설현장 실무 경험과 ㈜아인산업안전의 유통·시공 피드백을 기반으로 실제 쓰임새가 입증된 소프트웨어를 연구 개발합니다.
              </p>

              {companyInfo.ainsafeMallUrl ? (
                <a
                  href={companyInfo.ainsafeMallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded bg-slate-900 hover:bg-slate-950 text-white px-4 py-2.5 text-xs font-semibold transition-colors"
                >
                  아인산업안전 쇼핑몰 방문
                </a>
              ) : (
                <div className="w-full text-center rounded bg-slate-100 text-slate-400 px-4 py-2.5 text-xs font-semibold border border-slate-200 cursor-not-allowed">
                  쇼핑몰 준비 중
                </div>
              )}
            </div>

          </div>

          {/* 주의 안내 */}
          <div className="mt-8 pt-4 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 leading-relaxed">
              * 아인산업(개인사업자, 정보통신업)과 ㈜아인산업안전(법인사업자, 자재유통/시공업)은 경영 주체와 사업자등록번호가 상이한 독자적 주체이며, 기술 실증 파트너로서 상호 협력하고 있습니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
