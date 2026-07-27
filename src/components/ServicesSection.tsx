"use client";

import { webServices, WebService } from "@/data/services";

export default function ServicesSection() {
  // 대표 서비스 필터링
  const representatives = webServices.filter((s) => s.isRepresentative);

  // 기타 서비스 필터링
  const others = webServices.filter((s) => !s.isRepresentative);
  
  // 기타 서비스 중 건설/안전 관련을 우선 정렬
  const sortedOthers = [...others].sort((a, b) => {
    if (a.isConstruction && !b.isConstruction) return -1;
    if (!a.isConstruction && b.isConstruction) return 1;
    return 0;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "운영 중":
      case "운영 및 현장 검증 중":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "운영 및 개선 중":
      case "개발 및 개선 중":
        return "bg-sky-50 text-sky-700 border-sky-200";
      case "개발 중":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "실험실":
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const getRepresentativeIcon = (repoName: string) => {
    // 저장소별 수동 아이콘 정의
    switch (repoName) {
      case "formwork-review-pro":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case "gongsailbo-pro":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "sajindaeji-pro":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a1 1 0 011.414 0L16 16m-2-2l1.586-1.586a1 1 0 011.414 0L21 14m-7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "tbm-log-pro":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case "gongjeong-view-pro":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "gumcheuk-pro":
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 헤더 */}
        <div className="mx-auto max-w-3xl lg:text-center mb-16 sm:mb-20">
          <h2 className="text-base font-semibold tracking-wider text-accent uppercase">
            Web Services
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            자체 개발 및 운영 웹서비스 라인업
          </p>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            건설 현장에서 수집된 실무적 노하우를 바탕으로, 불필요한 행정 절차와 수작업을
            제거하여 업무 효율성을 보장하는 정보통신 소프트웨어입니다.
          </p>
        </div>

        {/* 1. 대표 서비스 영역 */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-slate-900 border-l-4 border-accent pl-3 mb-8">
            핵심 웹서비스 (Core Services)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {representatives.map((service) => (
              <div
                key={service.repository}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-all duration-200"
              >
                {/* 상단 헤더 영역 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/5 border border-accent/10 text-accent">
                    {getRepresentativeIcon(service.repository)}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold border ${getStatusStyle(
                      service.status
                    )}`}
                  >
                    {service.status}
                  </span>
                </div>

                {/* 텍스트 정보 */}
                <h4 className="text-lg font-bold text-slate-800 mb-1">
                  {service.title}
                </h4>
                <p className="text-xs font-mono text-slate-400 mb-3">
                  Repository: {service.repository}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* 하단 버튼 및 액션 */}
                <div className="flex items-center gap-3 mt-auto">
                  {service.url ? (
                    <>
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded-lg bg-accent text-white px-4 py-2.5 text-xs font-semibold shadow-xs hover:bg-accent-hover transition-colors"
                      >
                        서비스 실행
                      </a>
                      <a
                        href={`https://github.com/nam2037772/${service.repository}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded-lg border border-slate-200 text-slate-600 bg-white px-4 py-2.5 text-xs font-semibold shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-colors"
                      >
                        자세히 보기
                      </a>
                    </>
                  ) : (
                    <div className="flex-1 text-center rounded-lg bg-slate-100 text-slate-400 px-4 py-2.5 text-xs font-semibold border border-slate-200 cursor-not-allowed">
                      링크 준비 중
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 기타 서비스 영역 (작은 카드/그리드) */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 border-l-4 border-slate-400 pl-3 mb-4">
            전체 연구 및 실험 서비스 목록
          </h3>
          <p className="text-xs text-slate-500 mb-8">
            * 아인산업은 기술 검증과 실무 지원을 위해 지속적으로 신규 도구를 프로토타이핑하고 테스트하고 있습니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sortedOthers.map((service) => (
              <div
                key={service.repository}
                className={`flex flex-col rounded-xl p-5 border transition-all duration-200 ${
                  service.isConstruction
                    ? "bg-teal-50/20 border-teal-100/80 hover:border-teal-200 hover:shadow-xs"
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                {/* 헤더 */}
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="font-bold text-sm text-slate-800 truncate" title={service.title}>
                    {service.title}
                  </span>
                  
                  {/* 유형 뱃지 */}
                  {service.isConstruction ? (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-teal-100/50 px-2 py-0.5 text-3xs font-medium text-teal-800 border border-teal-200/60">
                      건설·안전
                    </span>
                  ) : (
                    <span className="inline-flex shrink-0 items-center rounded-full bg-slate-100 px-2 py-0.5 text-3xs font-medium text-slate-600 border border-slate-200">
                      일반·실험
                    </span>
                  )}
                </div>

                {/* 본문 */}
                <p className="text-2xs font-mono text-slate-400 mb-2 truncate">
                  Repo: {service.repository}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2 min-h-8">
                  {service.description}
                </p>

                {/* 푸터 실행 링크 */}
                <div className="mt-auto pt-2 border-t border-slate-100/60">
                  {service.url ? (
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xs font-bold text-accent hover:text-accent-hover inline-flex items-center gap-1 transition-colors"
                    >
                      실행하기
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-3xs font-semibold text-slate-400">
                      링크 준비 중
                    </span>
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
