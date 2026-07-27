export default function DevelopmentDirection() {
  const steps = [
    { num: "01", title: "현업 애로사항 발굴", desc: "안전 검토 계산이나 사진 정리 대지 문서화 과정에서의 행정 비효율을 직접 수집합니다." },
    { num: "02", title: "경량 웹 유틸리티 빌드", desc: "사용자가 설치 없이 브라우저에서 바로 열 수 있는 가벼운 싱글 기능 소프트웨어를 구축합니다." },
    { num: "03", title: "오프라인 현장 실증 테스트", desc: "실제 공사 및 안전 점검 현업에 배치해 시공자·감리원 피드백을 직접 확인합니다." },
    { num: "04", title: "동적 오류 보완 및 업데이트", desc: "실무자의 사용 과정에서 발생하는 오류나 개선 의견을 매일 코드로 이식해 보정합니다." },
    { num: "05", title: "통합 정식 웹서비스 고도화", desc: "현장 검증이 완료된 검계산 엔진을 주축으로 하여 기능성 높은 실무 허브를 정교하게 릴리즈합니다." }
  ];

  return (
    <section id="development" className="py-20 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
            Our Flow
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#06101e] leading-snug mb-6">
            실제 제품 개발 및 검증 흐름
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-12">
            기획실에서 끝나는 소프트웨어가 아닌, 현장에서 시공자들과 소통하며 함께 다듬어 나가는 점진적 고도화 방식을 준수합니다.
          </p>

          <div className="space-y-8 pt-8 border-t border-slate-100">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start text-xs sm:text-sm">
                <span className="font-mono font-bold text-slate-400 shrink-0 text-base">
                  {step.num}
                </span>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#06101e]">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
