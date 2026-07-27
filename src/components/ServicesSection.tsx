"use client";

import { webServices } from "@/data/services";

export default function ServicesSection() {
  // 대표 핵심 서비스 4종 선별 (사용성 우선순위)
  const coreServices = webServices.filter(
    (s) =>
      s.repository === "formwork-review-pro" ||
      s.repository === "gongsailbo-pro" ||
      s.repository === "sajindaeji-pro" ||
      s.repository === "tbm-log-pro"
  );

  // 그 외 전체 서비스 목록 (건설 관련 먼저 정렬)
  const otherServices = webServices.filter(
    (s) => !coreServices.some((core) => core.repository === s.repository)
  );
  
  const sortedOthers = [...otherServices].sort((a, b) => {
    if (a.isConstruction && !b.isConstruction) return -1;
    if (!a.isConstruction && b.isConstruction) return 1;
    return 0;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "운영 중":
      case "운영 및 현장 검증 중":
        return "text-emerald-700 bg-emerald-50 border-emerald-150";
      case "개발 및 개선 중":
      case "운영 및 개선 중":
        return "text-blue-700 bg-blue-50 border-blue-150";
      case "개발 중":
      default:
        return "text-slate-600 bg-slate-50 border-slate-200";
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 헤더 */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
            Products
          </h2>
          <p className="text-2xl font-black text-slate-900">
            실무용 웹서비스 허브
          </p>
        </div>

        {/* 1. 핵심 서비스 카드 4개 노출 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {coreServices.map((service) => {
            const isMain = service.repository === "formwork-review-pro";
            return (
              <div
                key={service.repository}
                className={`flex flex-col justify-between p-6 border rounded ${
                  isMain
                    ? "border-accent bg-slate-50/50 shadow-xs" // 메인 서비스(거푸집) 시각적 강조
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  {/* 상단 타이틀 및 상태 */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-slate-900">
                      {service.title}
                      {isMain && (
                        <span className="ml-2 text-2xs font-extrabold text-accent bg-accent/10 px-1.5 py-0.5 rounded uppercase">
                          추천
                        </span>
                      )}
                    </h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 border rounded-sm ${getStatusBadge(service.status)}`}>
                      {service.status}
                    </span>
                  </div>

                  {/* 한 줄 설명 */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* 하단 단일 실행 액션 */}
                <div className="pt-2 border-t border-slate-100">
                  {service.url ? (
                    <div className="flex gap-2">
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded bg-accent text-white px-4 py-2.5 text-xs font-semibold hover:bg-accent-hover transition-colors"
                      >
                        서비스 실행
                      </a>
                      <a
                        href={`https://github.com/nam2037772/${service.repository}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center rounded border border-slate-200 bg-white text-slate-600 px-3 py-2.5 text-xs font-semibold hover:bg-slate-50 transition-colors"
                      >
                        코드 보기
                      </a>
                    </div>
                  ) : (
                    <div className="w-full text-center rounded bg-slate-100 text-slate-400 px-4 py-2.5 text-xs font-semibold border border-slate-200 cursor-not-allowed">
                      링크 준비 중
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. 기타 전체 서비스 리스트 (텍스트 보드 형태) */}
        <div className="pt-8 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            기타 개발 및 실험 서비스
          </h4>
          
          <div className="overflow-hidden border border-slate-100 rounded">
            <table className="min-w-full divide-y divide-slate-100 text-left text-xs">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-4 py-3 font-bold text-slate-700">서비스명</th>
                  <th className="px-4 py-3 font-bold text-slate-700 hidden sm:table-cell">저장소</th>
                  <th className="px-4 py-3 font-bold text-slate-700">상태 및 분류</th>
                  <th className="px-4 py-3 font-bold text-slate-700 text-right">실행</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {sortedOthers.map((service) => (
                  <tr key={service.repository} className="hover:bg-slate-50/30">
                    <td className="px-4 py-3.5 font-bold text-slate-900">{service.title}</td>
                    <td className="px-4 py-3.5 text-slate-400 font-mono text-[11px] hidden sm:table-cell">
                      {service.repository}
                    </td>
                    <td className="px-4 py-3.5 space-x-1.5">
                      <span className="text-[10px] text-slate-500 font-medium">
                        {service.status}
                      </span>
                      {service.isConstruction && (
                        <span className="inline-block text-[9px] font-bold text-teal-700 bg-teal-50 px-1 rounded-sm">
                          건설안전
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      {service.url ? (
                        <a
                          href={service.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-accent hover:text-accent-hover"
                        >
                          실행
                        </a>
                      ) : (
                        <span className="text-slate-300 font-medium text-[11px]">
                          준비 중
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
