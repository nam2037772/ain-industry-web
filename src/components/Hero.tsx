export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-20 sm:pt-32 sm:pb-28 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* 아인산업 브랜드 강조 */}
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
            AIN INDUSTRY
          </span>
          
          {/* 메인 타이틀 */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.15]">
            건설 실무를
            <br />
            웹서비스로 만듭니다.
          </h1>

          {/* 한 줄 이내의 설명 문구 */}
          <p className="mt-6 text-base text-slate-500 max-w-2xl leading-relaxed">
            현장에서 반복되는 계산, 사진 대지 작성, 안전 관리를 웹 브라우저에서 바로 해결하는 실무 소프트웨어를 개발합니다.
          </p>

          {/* 메인 버튼 2개 */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded bg-accent text-white px-5 py-3 text-xs font-bold hover:bg-accent-hover transition-colors"
            >
              거푸집 구조검토 실행
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded border border-slate-200 bg-white text-slate-700 px-5 py-3 text-xs font-bold hover:bg-slate-50 hover:border-slate-350 transition-colors"
            >
              서비스 전체 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
