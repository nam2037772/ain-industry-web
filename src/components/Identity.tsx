export default function Identity() {
  const features = [
    {
      title: "현장 경험 기반",
      description: "실제 시공·안전 관리 실무의 목소리를 직접 듣고 반영하여 기획합니다.",
    },
    {
      title: "실무형 웹서비스",
      description: "설치 없이 브라우저를 열면 바로 현장 장비나 폰에서 바로 사용 가능합니다.",
    },
    {
      title: "지속적인 실증 개선",
      description: "개발 완료 후 실제 현장 테스트 과정을 거쳐 안전성과 안정성을 단련합니다.",
    },
  ];

  return (
    <section id="identity" className="py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
            Identity
          </h2>
          <p className="text-2xl font-black text-slate-900 mb-6">
            건설을 아는 사람이 만드는 소프트웨어
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-12">
            아인산업은 현업 시공 현장에서 발생하는 불편함과 반복 업무를 직접 겪어보고
            이를 빠르고 손쉽게 자동화하는 실무 중심의 정보통신 서비스를 제안합니다.
          </p>

          {/* 단순한 3열 리스트 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent mr-2 inline-block rounded-full" />
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
