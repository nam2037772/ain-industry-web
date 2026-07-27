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
            Entire Portfolio
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#06101e] leading-snug mb-6">
            현재 운영 중인 서비스 목록
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-12">
            아인산업이 연구 개발하여 현업 검증을 거쳤거나 프로토타이핑을 진행 중인 전체 웹 애플리케이션 리스트입니다.
          </p>

          {/* 단순 선형 테이블 구조 */}
          <div className="overflow-hidden border border-slate-200 rounded-none mb-16">
            <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-4 py-3 font-bold text-[#06101e]">프로그램명</th>
                  <th className="px-4 py-3 font-bold text-[#06101e] hidden sm:table-cell">저장소명</th>
                  <th className="px-4 py-3 font-bold text-[#06101e]">분류 및 상태</th>
                  <th className="px-4 py-3 font-bold text-[#06101e] text-right">링크</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {sortedServices.map((service) => (
                  <tr key={service.repository} className="hover:bg-slate-50/30">
                    <td className="px-4 py-3 font-bold text-[#06101e]">{service.title}</td>
                    <td className="px-4 py-3 text-slate-400 font-mono text-[11px] hidden sm:table-cell">
                      {service.repository}
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <span className="text-slate-500 font-medium">{service.status}</span>
                      {service.isConstruction && (
                        <span className="text-[9px] font-bold text-accent bg-blue-50 px-1 py-0.2 rounded-xs">
                          건설실무
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {service.url ? (
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-accent hover:underline"
                        >
                          실행하기
                        </a>
                      ) : (
                        <span className="text-slate-350">준비 중</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 관련 사업 연결 및 문의/이용 유도 */}
          <div className="pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* 문의 안내 */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[#06101e]">웹서비스 도입 및 기술 문의</h3>
              <p className="text-xs text-slate-550 leading-relaxed">
                건설현장 내 특화 연산 기능의 커스텀 개발이나 기존 소프트웨어 보완 요구사항이 있으시면 아래 연락 정보를 통해 언제든지 편하게 접수해 주세요.
              </p>
              <a
                href="#footer"
                className="inline-flex items-center justify-center rounded-xs bg-[#06101e] hover:bg-accent text-white px-5 py-3 text-xs font-bold transition-colors"
              >
                문의처 확인하기
              </a>
            </div>

            {/* ㈜아인산업안전 안내 */}
            <div className="p-6 border border-slate-250 bg-slate-50/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-[#06101e]">㈜아인산업안전</h4>
                <span className="text-[9px] text-slate-550 font-bold border border-slate-200 px-1.5 py-0.5 bg-white rounded-xs">
                  별도 법인 사업자
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                건설안전용품 유통, 토목 방수 시공을 영위하는 자매 파트너사입니다. 현장 자재 유통 문의는 쇼핑몰을 참조하세요.
              </p>
              <div className="pt-2">
                {companyInfo.ainsafeMallUrl ? (
                  <a
                    href={companyInfo.ainsafeMallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#006e9a] hover:underline"
                  >
                    아인산업안전 쇼핑몰 방문 →
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-semibold">쇼핑몰 준비 중</span>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
