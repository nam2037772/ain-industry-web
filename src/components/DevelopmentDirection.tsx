export default function DevelopmentDirection() {
  const steps = [
    {
      step: "01",
      title: "현장 문제 발견",
      description:
        "건설 자재 유통 및 현장 안전관리 과정에서 발생하는 수작업, 중복 문서작성 등 비효율 요소를 우선 발굴합니다.",
    },
    {
      step: "02",
      title: "작은 웹서비스 제작",
      description:
        "크고 무거운 솔루션 대신, 특정 업무(예: 구조검토, TBM 일지 등)만 즉시 처리할 수 있는 경량의 웹서비스를 신속히 빌드합니다.",
    },
    {
      step: "03",
      title: "실제 현장 사용",
      description:
        "개발된 소프트웨어를 실제 공사 및 시공 현장에 도입하여, 작업자들이 직접 실무에 사용하며 실효성을 검증합니다.",
    },
    {
      step: "04",
      title: "사용자 의견 반영",
      description:
        "현장 작업자 및 감리단 등의 현장 피드백, 에러 사항, 추가 요구사항 등을 실시간으로 수렴하여 보완 방향을 잡습니다.",
    },
    {
      step: "05",
      title: "제품 고도화",
      description:
        "안정성이 검증된 도구를 토대로 기능을 유기적으로 통합하고 고도화하여 신뢰성 높은 현장관리 협업툴로 지속 확장합니다.",
    },
  ];

  return (
    <section id="development" className="py-20 sm:py-28 bg-white scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 타이틀 */}
        <div className="mx-auto max-w-3xl lg:text-center mb-16">
          <h2 className="text-base font-semibold tracking-wider text-accent uppercase">
            Development Road
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            현장의 반복업무를 하나씩 줄여갑니다
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            아인산업은 처음부터 거대하고 무거운 통합 시스템을 지향하지 않습니다.
            <br />
            당장 오늘 현장에서 쓸 수 있는 작은 도구를 만들고, 실제 검증과 피드백을 통해
            제품의 기능과 안정성을 단단하게 확장해 나갑니다.
          </p>
        </div>

        {/* 프로세스 흐름 시각화 */}
        <div className="relative mx-auto max-w-5xl mt-16 sm:mt-20">
          
          {/* 가로 연결 라인 (데스크톱 전용) */}
          <div className="absolute top-1/2 left-4 right-4 hidden lg:block h-0.5 -translate-y-8 bg-slate-100" aria-hidden="true" />
          
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 relative">
            {steps.map((item, index) => (
              <div key={item.step} className="group relative flex flex-col items-start lg:items-center text-left lg:text-center">
                
                {/* 단계 숫자 번호 뱃지 */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 text-slate-400 font-mono text-xl font-bold mb-6 group-hover:border-accent group-hover:bg-accent/5 group-hover:text-accent transition-all duration-300 relative z-10">
                  {item.step}
                </div>

                {/* 흐름 화살표 데코 (데스크톱 단계 사이 배치) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 translate-x-1/2 z-20 text-slate-300">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}

                <h4 className="text-base font-bold text-slate-800 mb-2.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed px-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* 지원사업 평가 요소 강조 카드 */}
        <div className="mx-auto max-w-4xl mt-16 sm:mt-24 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-bold text-slate-800 mb-1">
              현장 실증을 핵심 지표로 두는 기술 개발
            </h5>
            <p className="text-xs text-slate-500 leading-relaxed">
              모든 소프트웨어의 기획과 설계는 현업 실무진의 피드백을 기반으로 합니다.
              이러한 민첩한(Agile) 제품 생명 주기는 불필요한 리소스를 제거하고 실제 가치를 창출하는
              프로덕트로의 성장을 보장합니다.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
