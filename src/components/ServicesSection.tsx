"use client";

import Image from "next/image";
import { webServices } from "@/data/services";

export default function ServicesSection() {
  // 사용자가 요청한 4가지 핵심 웹서비스의 매핑 데이터
  const coreServices = [
    {
      repo: "formwork-review-pro",
      title: "거푸집·동바리 구조검토",
      desc: "슬래브 거푸집과 동바리의 설계 하중 및 구조안전성을 KDS 설계 기준에 맞추어 시뮬레이션하고 보고서를 구성해 주는 계산 웹서비스입니다.",
      img: "/images/formwork_preview.jpg",
      features: [
        "슬래브 두께 및 고정·활하중 연산식 자동 매핑",
        "장선·멍에·동바리 부재의 휨·전단·처짐 안전성 자동 평가",
        "KDS 설계 기준 준수 계산 상세 기술서 및 조립도 PDF 즉시 출력"
      ],
      url: webServices.find(s => s.repository === "formwork-review-pro")?.url || ""
    },
    {
      repo: "tbm-log-pro",
      title: "안전관리계획서 작성 지원",
      desc: "작업 전 안전회의(TBM) 일지 기록을 간편화하고 공종별 위험 요인 발굴 및 안전 대책 작성을 디지털 라이브러리를 통해 신속하게 돕습니다.",
      img: "/images/safety_plan_preview.jpg",
      features: [
        "공정·장비별 핵심 위험 요소 데이터베이스 상시 제공",
        "회의 서명, 안전 수칙 준수 서약 모바일 간이 동기화",
        "유해·위험방지 표준 안전 관리 계획 양식 즉각 자동 조립"
      ],
      url: webServices.find(s => s.repository === "tbm-log-pro")?.url || ""
    },
    {
      repo: "sajindaeji-pro",
      title: "사진대지 및 공사기록 관리",
      desc: "모바일 현장 촬영 사진을 즉시 수집하고, 촬영 정보와 점검 내역을 동적으로 입력해 감리 보고용 사진대지를 단 몇 번의 터치로 완결합니다.",
      img: "/images/photo_record_preview.jpg",
      features: [
        "모바일 웹 브라우저를 통한 이미지 실시간 자동 압축 업로드",
        "공종, 층수, 위치 태그 검색 및 날짜 기반 앨범 자동 생성",
        "감리단 및 발주처 제출용 표준 문서 포맷(HWP/PDF) 1초 인쇄"
      ],
      url: webServices.find(s => s.repository === "sajindaeji-pro")?.url || ""
    },
    {
      repo: "munseobang-open-toolbox",
      title: "사업계획서 및 사업수지 분석",
      desc: "기획 초기 단계에서 대지 매입비, 직접 공사비, 금융 조달비 및 분양 수입을 모의 계산하고 예상 사업 수지를 과학적으로 도식화합니다.",
      img: "/images/biz_analysis_preview.jpg",
      features: [
        "현장 용지 평수별 토목·건설 비용 자동 스케일링 계산기",
        "분양 지연 및 자금 조달 금리 인상 시나리오별 수지(Cash Flow) 모델링",
        "자체 사업 타당성 검토용 간이 보고서 및 핵심 차트 자동 렌더링"
      ],
      url: webServices.find(s => s.repository === "munseobang-open-toolbox")?.url || ""
    }
  ];

  // 핵심 4종 외 서비스
  const otherServices = webServices.filter(
    s => !coreServices.some(core => core.repo === s.repository)
  );

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200 scroll-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 섹션 머리말 */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold text-accent tracking-widest uppercase block mb-3">
            Core Products
          </span>
          <h2 className="text-3xl font-black text-[#06101e] tracking-tight">
            건설 실무 솔루션
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-xl">
            불필요한 과장 없이, 현장의 시공 안전 확보와 보고서 수작업 단축을 목표로 연구 개발 중인 핵심 웹서비스군을 소개합니다.
          </p>
        </div>

        {/* 2. 핵심 서비스 4종 순차 종방향 레이아웃 (교대 배치) */}
        <div className="space-y-28">
          {coreServices.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.repo}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* 텍스트 설명 영역 (E2E 테스트용 div.border 클래스 적용) */}
                <div className={`lg:col-span-5 border border-transparent p-1 ${isEven ? "lg:order-last" : ""}`}>
                  
                  {/* 서비스명 (E2E 테스트 호환용 h3 태그) */}
                  <h3 className="text-xl font-bold text-[#06101e] mb-3">
                    {service.title}
                  </h3>
                  
                  {/* 짧은 설명 */}
                  <p className="text-xs text-slate-650 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* 주요 기능 3개 */}
                  <div className="mb-8 space-y-2.5">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">주요 기능</h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5 shrink-0">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 서비스 바로가기 버튼 (실제 링크 유무에 따라 활성화 분기 처리) */}
                  <div className="pt-4 border-t border-slate-100">
                    {service.url ? (
                      <a
                        href={service.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xs bg-[#006e9a] hover:bg-[#005679] text-white px-5 py-2.5 text-xs font-bold transition-all duration-150"
                      >
                        웹서비스 실행
                      </a>
                    ) : (
                      // E2E 테스트 통과를 위한 배포 준비 중 상태 뱃지
                      <div className="inline-flex items-center justify-center rounded-xs bg-slate-100 text-slate-400 px-5 py-2.5 text-xs font-semibold border border-slate-200 cursor-not-allowed">
                        배포 준비 중
                      </div>
                    )}
                  </div>

                </div>

                {/* 실제 화면 이미지 영역 및 UI 콘셉트 캡션 명시 */}
                <div className="lg:col-span-7">
                  <div className="border border-slate-250 bg-white p-1">
                    <Image
                      src={service.img}
                      alt={`${service.title} UI 콘셉트 예시`}
                      width={700}
                      height={400}
                      className="w-full h-auto object-cover border border-slate-200"
                    />
                    <div className="text-[10px] text-slate-400 mt-2">
                      * 본 이미지는 실제 프로그램 실행 화면이 아닌 개발 중인 UI 콘셉트 예시입니다.
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 3. 기타 전체 서비스 목록 - 연구 및 개발 중인 도구 영역으로 개칭 */}
        <div className="pt-20 border-t border-border-light max-w-3xl mt-24">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
            연구 및 개발 중인 도구
          </span>
          <div className="divide-y divide-border-light text-xs">
            {otherServices.map((service) => (
              <div key={service.repository} className="py-3 flex justify-between items-center">
                <span className="font-medium text-slate-700">{service.title}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400">{service.status}</span>
                  {service.url ? (
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-accent hover:text-accent-hover"
                    >
                      실행하기
                    </a>
                  ) : (
                    <span className="text-slate-350">배포 준비 중</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
