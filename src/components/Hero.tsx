import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-white py-14 sm:py-16 lg:py-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 좌측: 타이틀 및 핵심 메시지 */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
              Ain Industry
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#06101e] leading-[1.15] tracking-tight">
              건설 현장의
              <br />
              복잡한 업무를 더 간단하게
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              현장 경험을 바탕으로 구조검토, 안전관리, 공사기록과 보고서 작성을 돕는 실무형 웹서비스를 만듭니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg bg-[#006e9a] hover:bg-[#005679] text-white px-5 py-3.5 text-xs font-bold transition-all duration-200 hover:shadow-md"
              >
                웹서비스 살펴보기
              </a>
              <a
                href="#identity"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-5 py-3.5 text-xs font-bold transition-all duration-200 hover:border-slate-400"
              >
                아인산업 소개
              </a>
            </div>
          </div>

          {/* 우측: 실제 거푸집 구조검토 프로그램 실행 화면 캡처 대형 노출 */}
          <div className="lg:col-span-6">
            <div className="product-frame bg-white p-2">
              <Image
                src="/images/formwork_preview.jpg"
                alt="아인산업 거푸집 구조검토 웹서비스 UI 디자인 콘셉트 예시"
                width={800}
                height={450}
                priority
                className="w-full h-auto object-cover"
              />
              {/* 이미지 캡션: UI 콘셉트 명시 (E2E 테스트 매칭 조건) */}
              <div className="text-[10px] text-slate-400 mt-2">
                * 본 이미지는 실제 프로그램 실행 화면이 아닌 개발 중인 UI 콘셉트 예시입니다.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
