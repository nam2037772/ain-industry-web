export default function DevelopmentDirection() {
  const steps = [
    { num: "01", title: "현장 문제 발견", desc: "도소매 유통 및 시공 실무 중 불편 요소를 발굴합니다." },
    { num: "02", title: "경량 웹 도구 제작", desc: "특정 업무를 즉시 처리할 수 있는 작은 모듈을 빌드합니다." },
    { num: "03", title: "현업 실증 및 보완", desc: "실제 공사 및 안전관리 현장에서 사용하며 검증합니다." },
    { num: "04", title: "통합 및 고도화", desc: "안정성이 증명된 서비스 중심으로 성능을 고도화합니다." },
  ];

  return (
    <section id="development" className="py-20 bg-white border-b border-slate-100 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
            Process
          </h2>
          <p className="text-2xl font-black text-slate-900 mb-6">
            현장의 반복업무를 하나씩 줄여갑니다
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mb-12">
            아인산업은 처음부터 거대한 일체형 시스템을 구상하지 않습니다.
            오늘 당장 실무자가 직관적으로 열어서 쓸 수 있는 작은 도구부터 시작하여 안전성을 보증하며 확장합니다.
          </p>

          {/* 타임라인 단색 리스트 */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <span className="text-xs font-mono font-bold text-accent bg-blue-50 px-2 py-1 rounded">
                  {step.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
