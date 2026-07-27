export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-40">
      {/* 백그라운드 그리드 패턴 */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* 은은한 그라데이션 라이트 */}
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* 좌측 텍스트 콘텐츠 */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center space-x-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent leading-5 mb-6">
              <span>개인사업자 공식 웹서비스 허브</span>
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.15] sm:leading-[1.15]">
              건설 현장의 경험을
              <br />
              <span className="text-accent">웹서비스</span>로 만듭니다
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl sm:mx-auto lg:mx-0">
              아인산업은 건설·안전·현장관리 분야의 웹 애플리케이션과 업무용
              소프트웨어를 직접 개발하고 운영하는 정보통신업체입니다.
              <br />
              현장의 반복적인 업무와 불편함을 혁신하는 실무형 도구를 제안합니다.
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <a
                href="#services"
                className="flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all duration-200"
              >
                웹서비스 보기
              </a>
              <a
                href="#identity"
                className="mt-3 sm:mt-0 flex items-center justify-center rounded-lg bg-white border border-slate-200 px-6 py-3.5 text-base font-semibold text-slate-700 shadow-xs hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
              >
                아인산업 소개
              </a>
            </div>
          </div>

          {/* 우측 테크 그래픽/대시보드 목업 */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* 장식용 프레임 데코 */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-accent/20 to-slate-200/50 blur-xl opacity-75" />

              {/* 가상 대시보드 카드 */}
              <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
                {/* 상단 브라우저 바 */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex space-x-1.5">
                    <span className="h-3 w-3 rounded-full bg-slate-200" />
                    <span className="h-3 w-3 rounded-full bg-slate-200" />
                    <span className="h-3 w-3 rounded-full bg-slate-200" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    formwork-review-pro.ain.net
                  </span>
                  <div className="w-9" />
                </div>

                {/* 가상의 앱 콘텐츠 */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-700">
                      슬래브 거푸집 동바리 구조안전성 검토
                    </h3>
                    <span className="rounded bg-teal-50 px-2 py-0.5 text-2xs font-medium text-teal-700 border border-teal-200">
                      현장 검증 완료
                    </span>
                  </div>

                  {/* 차트/그리드 모티브 */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3 text-center">
                      <span className="block text-2xs text-slate-400 font-medium">
                        허용 활하중
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        2.5 kN/㎡
                      </span>
                    </div>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3 text-center">
                      <span className="block text-2xs text-slate-400 font-medium">
                        동바리 연직하중
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        11.8 kN/본
                      </span>
                    </div>
                    <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-3 text-center">
                      <span className="block text-2xs text-slate-400 font-medium">
                        구조안전성 판정
                      </span>
                      <span className="text-sm font-bold text-emerald-600">
                        OK
                      </span>
                    </div>
                  </div>

                  {/* 시뮬레이션 구조도 디자인 데코 (SVG) */}
                  <div className="rounded-lg border border-slate-100 bg-slate-900 p-4 font-mono text-xs text-slate-300">
                    <div className="flex justify-between text-2xs text-slate-500 border-b border-slate-800 pb-2 mb-2">
                      <span>STRUCTURAL ANALYSIS</span>
                      <span>v1.2.0</span>
                    </div>
                    <div className="space-y-1 text-2xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          [1] Slab Dead Load:
                        </span>
                        <span className="text-teal-400">3.60 kN/㎡</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          [2] Formwork Dead Load:
                        </span>
                        <span className="text-teal-400">0.40 kN/㎡</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          [3] Construction Load:
                        </span>
                        <span className="text-teal-400">1.50 kN/㎡</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between font-semibold">
                        <span>Total Design Load (U):</span>
                        <span className="text-amber-400">7.26 kN/㎡</span>
                      </div>
                    </div>
                  </div>

                  {/* 하단 상태바 */}
                  <div className="flex items-center justify-between text-2xs text-slate-400 pt-2">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      실시간 안전 계산 모듈 작동 중
                    </span>
                    <span>100% Web Based</span>
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
