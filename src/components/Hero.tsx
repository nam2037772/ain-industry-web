import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
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
                className="inline-flex items-center justify-center rounded-xs bg-[#006e9a] hover:bg-[#005679] text-white px-5 py-3.5 text-xs font-bold transition-colors"
              >
                웹서비스 살펴보기
              </a>
              <a
                href="#identity"
                className="inline-flex items-center justify-center rounded-xs border border-slate-350 bg-white hover:bg-slate-50 text-slate-700 px-5 py-3.5 text-xs font-bold transition-colors"
              >
                아인산업 소개
              </a>
            </div>
          </div>

          {/* 우측: 실제 거푸집 구조검토 프로그램 실행 화면 캡처 대형 노출 */}
          <div className="lg:col-span-6">
            <div className="border border-slate-300 rounded-none bg-white p-2">
              <Image
                src="/images/formwork_preview.jpg"
                alt="아인산업 거푸집 구조검토 웹서비스 실제 실행 화면 캡처"
                width={800}
                height={450}
                priority
                className="w-full h-auto object-cover border border-slate-200"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
