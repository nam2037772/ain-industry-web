export default function DevelopmentDirection() {
  const steps = [
    { num: "01", title: "현업 문제 발견", desc: "도소매 및 유통 업무, 시공 안전 관리 상의 비효율을 직접 발굴합니다." },
    { num: "02", title: "경량 웹 도구 제작", desc: "특정 태스크(예: 구조검토, 공사일보 등)만 신속하게 해결하는 웹 도구를 빌드합니다." },
    { num: "03", title: "현장 적용 및 검증", desc: "실제 공사 시공 현장에 도입하여 감리원 및 작업자 검증을 거칩니다." },
    { num: "04", title: "지속적인 기능 확대", desc: "실증된 도구 위주로 성능을 보증하며 제품군을 단단하게 확장합니다." },
  ];

  return (
    <section id="development" className="py-20 bg-white border-b border-border-light scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
            Process
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
            점진적 고도화 개발 프로세스
          </h2>
          
          <div className="space-y-6 pt-6 border-t border-border-light">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4 items-start text-xs">
                <span className="font-mono font-bold text-accent">
                  {step.num}.
                </span>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// 
