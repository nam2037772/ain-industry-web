export default function Identity() {
  const features = [
    {
      title: "현장 경험 기반",
      description: "실제 건설·시공·안전관리 현장에서 겪는 생생한 경험을 바탕으로, 비효율적인 프로세스와 고질적인 페인포인트를 포착하고 문제를 정의합니다.",
      icon: (
        <svg
          className="h-6 w-6 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12v18H3V3Z"
          />
        </svg>
      ),
    },
    {
      title: "실무형 웹서비스",
      description: "복잡한 설치 프로세스나 사양 제약 없이, 웹 브라우저만 있으면 현장 PC와 태블릿, 모바일 기기 등 모든 디바이스에서 즉시 안전하게 작동합니다.",
      icon: (
        <svg
          className="h-6 w-6 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
      ),
    },
    {
      title: "지속적인 개선",
      description: "개발 단계에서 그치지 않고 실제 건설 현장의 업무 플로우와 현장 피드백을 실시간 수렴하여 지속적인 업데이트와 안전성 고도화를 진행합니다.",
      icon: (
        <svg
          className="h-6 w-6 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="identity" className="py-20 sm:py-28 bg-white scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 상단 텍스트 및 개요 */}
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-accent uppercase">
            Identity
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            건설을 아는 사람이 만드는 소프트웨어
          </p>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            아인산업은 실제 건설현장에서 발생하는 반복업무와 다양한 불편함을
            직접 겪고 이를 웹 서비스 형태로 빠르고 손쉽게 해결하고자 출범했습니다.
            <br />
            이해하기 어려운 거대한 정보기술(IT) 솔루션 대신,{" "}
            <span className="font-semibold text-slate-800">
              구조검토, 공사일보, 사진대지, 안전관리, 검측
            </span>{" "}
            등 현장 실무자가 매일 부딪히는 구체적 과제들을 간편하게 수행할 수
            있도록 최적화된 맞춤형 업무 도구들을 직접 개발합니다.
          </p>
        </div>

        {/* 3가지 주요 카드 영역 */}
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 sm:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col bg-slate-50/50 rounded-2xl border border-slate-100 p-8 hover:shadow-lg hover:border-slate-200/80 transition-all duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-slate-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-100 shadow-xs">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm leading-relaxed text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
