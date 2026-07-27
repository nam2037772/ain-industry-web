export default function Identity() {
  return (
    <section id="identity" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
            Our Experience
          </span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#06101e] leading-snug mb-6">
            건설 현장에서 시작된 소프트웨어 기술
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-4">
            아인산업은 탁상공론식 IT 솔루션을 지양합니다. 수십 년간 건설 안전 용품 유통과
            토목 및 방수 전문 시공을 도맡아 온 ㈜아인산업안전의 오프라인 현장 경험과 노하우를
            이식받아 비효율적인 수작업과 서류 중심의 업무 프로세스를 혁신합니다.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            가장 안전해야 하는 거푸집·동바리 강도 연산부터 시작하여, 감리자와 시공자가 매일 작성하는
            공사일보, 그리고 안전 서약과 회의 기록까지, 실무자가 현장 컨테이너와 모바일 폰에서 바로 열고
            입력할 수 있도록 사용성을 극대화한 실무 소프트웨어를 직접 설계합니다.
          </p>
        </div>

        {/* 핵심 원칙 카드 3종 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover-lift">
            <div className="w-10 h-10 rounded-lg bg-[#006e9a]/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#006e9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-[#06101e] mb-2">현장 기반 설계</h3>
            <p className="text-xs text-slate-500 leading-relaxed">수십 년간의 현장 시공 경험과 노하우를 소프트웨어에 직접 반영합니다.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover-lift">
            <div className="w-10 h-10 rounded-lg bg-[#006e9a]/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#006e9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-[#06101e] mb-2">실무 자동화</h3>
            <p className="text-xs text-slate-500 leading-relaxed">수작업과 서류 중심의 업무 프로세스를 브라우저에서 바로 해결합니다.</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 hover-lift">
            <div className="w-10 h-10 rounded-lg bg-[#006e9a]/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#006e9a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-[#06101e] mb-2">현장 실증 검증</h3>
            <p className="text-xs text-slate-500 leading-relaxed">실제 공사 현장에서 시공자·감리원의 피드백을 직접 확인하고 반영합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
