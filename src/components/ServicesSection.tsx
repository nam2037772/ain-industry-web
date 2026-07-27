"use client";

import { webServices } from "@/data/services";

export default function ServicesSection() {
  // 사용자가 요청한 4가지 핵심 웹서비스의 매핑 정보
  const coreRepositories = [
    { repo: "formwork-review-pro", displayTitle: "거푸집·동바리 구조검토", desc: "슬래브 거푸집과 동바리의 하중 및 구조 안전성을 검토하고 보고서를 생성하는 웹서비스입니다." },
    { repo: "gongsailbo-pro", displayTitle: "공사일보 자동화", desc: "작업내용, 장비, 자재 투입 현황을 입력하여 공사일보 작성을 자동화해 주는 웹서비스입니다." },
    { repo: "munseobang-open-toolbox", displayTitle: "사업계획서 생성", desc: "건설 현장 실무 및 사업 신청을 위한 각종 계획서 작성을 돕는 문서 지원 도구입니다." },
    { repo: "gunsеol-silmu-briefing", displayTitle: "건설 실무 브리핑", desc: "건설 실무 정보 및 안전 지침에 관한 핵심 가이드를 빠르게 브리핑하는 웹서비스입니다." }
  ];

  // 4대 핵심 서비스 데이터 조합
  const coreServices = coreRepositories.map(item => {
    const data = webServices.find(s => s.repository === item.repo);
    return {
      title: item.displayTitle,
      repository: item.repo,
      description: item.desc,
      status: data?.status || "개발 중",
      url: data?.url || "",
      isConstruction: data?.isConstruction ?? true
    };
  });

  // 나머지 서비스
  const otherServices = webServices.filter(
    s => !coreRepositories.some(core => core.repo === s.repository)
  );

  return (
    <section id="services" className="py-20 bg-white border-b border-border-light scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 헤더 */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
            Services
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            건설 실무 웹서비스 라인업
          </h2>
        </div>

        {/* 1. 핵심 서비스 4종 - 플랫하고 얇은 구분선 리스트 구조 (E2E 테스트용 div.border 유지) */}
        <div className="space-y-4 max-w-3xl mb-16">
          {coreServices.map((service) => (
            <div
              key={service.repository}
              className="border border-border-light p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white"
            >
              <div className="space-y-1">
                {/* E2E 테스트 통과를 위해 h3 태그로 제목 표기 */}
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  {service.title}
                  {service.repository === "formwork-review-pro" && (
                    <span className="text-[9px] font-extrabold text-accent bg-blue-50 px-1 py-0.5 rounded-sm">
                      대표
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-500 leading-normal max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* 액션 버튼 영역 */}
              <div className="shrink-0 flex items-center">
                {service.url ? (
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-sm bg-accent text-white px-4 py-2 text-xs font-bold hover:bg-accent-hover transition-colors"
                  >
                    실행
                  </a>
                ) : (
                  // E2E 테스트 검증용 '링크 준비 중' + 'cursor-not-allowed' 클래스가 매핑된 div 구조 유지
                  <div className="inline-flex items-center justify-center rounded-sm bg-slate-150 text-slate-400 px-4 py-2 text-xs font-semibold border border-slate-200 cursor-not-allowed">
                    링크 준비 중
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 2. 기타 전체 서비스 목록 - 극도의 절제된 한 줄 텍스트 리스트 */}
        <div className="pt-8 border-t border-border-light max-w-3xl">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
            기타 도구 및 실험 서비스
          </span>
          <div className="divide-y divide-border-light text-xs">
            {otherServices.map((service) => (
              <div key={service.repository} className="py-3 flex justify-between items-center">
                <span className="font-medium text-slate-700">{service.title}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400">{service.status}</span>
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
                    <span className="text-slate-300">준비 중</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
