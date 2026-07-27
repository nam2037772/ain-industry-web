export default function Hero() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-border-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 좌측: 타이틀 및 핵심 메시지 */}
          <div className="lg:col-span-7">
            <span className="text-sm font-bold text-accent tracking-wide block mb-3">
              아인산업
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
              건설 실무를 더 간단한
              <br />
              웹서비스로 만듭니다.
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
              현장에서 반복되는 계산, 문서 작성, 검토 업무를 누구나 사용할 수 있는 도구로 바꿉니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-sm bg-accent text-white px-5 py-3 text-xs font-bold hover:bg-accent-hover transition-colors"
              >
                거푸집 구조검토 실행
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-sm border border-slate-350 bg-white text-slate-700 px-5 py-3 text-xs font-bold hover:bg-slate-50 transition-colors"
              >
                전체 서비스 보기
              </a>
            </div>
          </div>

          {/* 우측: 실제 거푸집 구조검토 서비스의 깔끔한 미리보기 와이어프레임 */}
          <div className="lg:col-span-5">
            <div className="border border-slate-300 rounded-sm bg-white p-5 max-w-md mx-auto">
              
              {/* 와이어프레임 브라우저 헤더 */}
              <div className="flex items-center gap-1.5 pb-3 border-b border-border-light mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="text-[10px] text-slate-400 font-mono ml-2">거푸집 구조검토 Pro</span>
              </div>

              {/* 아주 단순화된 구조검토 폼 모형 */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-1">SLAB THICKNESS (설계 두께)</label>
                  <div className="px-2.5 py-1.5 border border-slate-200 rounded-none bg-slate-50/50 font-mono text-slate-700">
                    150 mm
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">SPACING (장선 간격)</label>
                    <div className="px-2.5 py-1.5 border border-slate-200 rounded-none bg-slate-50/50 font-mono text-slate-700">
                      300 mm
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">SPAN (멍에 간격)</label>
                    <div className="px-2.5 py-1.5 border border-slate-200 rounded-none bg-slate-50/50 font-mono text-slate-700">
                      900 mm
                    </div>
                  </div>
                </div>

                {/* 결과 계산 뷰포트 */}
                <div className="p-3 border border-slate-200 bg-white space-y-2">
                  <div className="flex justify-between items-center text-[11px] font-bold text-slate-700">
                    <span>동바리 구조안전성 계산 결과</span>
                    <span className="text-accent font-extrabold">적합 (OK)</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-none overflow-hidden">
                    <div className="h-full bg-accent w-[72%]" />
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-400">
                    <span>설계 하중 비: 72.3%</span>
                    <span>허용 내력: 20.0 kN</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
