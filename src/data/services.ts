export interface WebService {
  title: string;
  repository: string;
  description: string;
  status: string;
  url: string; // 빈 값이면 '배포 준비 중'으로 표시
  isRepresentative: boolean; // 대표 서비스 여부
  isConstruction: boolean; // 건설·안전 관련 서비스 여부
}

export const webServices: WebService[] = [
  // 1. 대표 서비스 (6종)
  {
    title: "거푸집 및 동바리 구조검토",
    repository: "formwork-review-pro",
    description: "슬래브 거푸집과 동바리의 설계 하중 및 구조안전성을 KDS 설계 기준에 맞추어 시뮬레이션하고 보고서를 구성해 주는 계산 웹서비스입니다.",
    status: "개발 및 테스트 중",
    url: "",
    isRepresentative: true,
    isConstruction: true,
  },
  {
    title: "공사일보 작성",
    repository: "gongsailbo-pro",
    description: "건설현장의 작업내용, 인원, 장비, 자재 및 특이사항을 정리하고 공사일보 작성을 지원하는 웹서비스입니다.",
    status: "기획 및 개발 중",
    url: "",
    isRepresentative: true,
    isConstruction: true,
  },
  {
    title: "사진대지 작성",
    repository: "sajindaeji-pro",
    description: "현장사진을 정리하고 제목과 설명을 입력해 사진대지를 빠르게 작성할 수 있는 웹서비스입니다.",
    status: "개발 및 로컬 검토 중",
    url: "",
    isRepresentative: true,
    isConstruction: true,
  },
  {
    title: "TBM 작업일지",
    repository: "tbm-log-pro",
    description: "작업 전 안전회의 내용과 위험요인, 안전조치 사항을 기록하고 TBM 일지를 작성하는 웹서비스입니다.",
    status: "개발 및 테스트 중",
    url: "",
    isRepresentative: true,
    isConstruction: true,
  },
  {
    title: "공정 현황 관리",
    repository: "gongjeong-view-pro",
    description: "건설공사의 공정 진행상황을 보기 쉽게 정리하고 공유할 수 있는 현장관리 웹서비스입니다.",
    status: "기획 및 개발 중",
    url: "",
    isRepresentative: true,
    isConstruction: true,
  },
  {
    title: "검측 관리",
    repository: "gumcheuk-pro",
    description: "공종별 검측내용과 확인사항을 기록하고 관리하는 건설현장 검측 지원 웹서비스입니다.",
    status: "기획 및 개발 중",
    url: "",
    isRepresentative: true,
    isConstruction: true,
  },

  // 2. 기타 서비스 (8종)
  {
    title: "공정관리 프로",
    repository: "gongjung-pro",
    description: "네트워크 공정표 작성 및 일정 계획 수립을 지원하는 전문 공정관리 도구입니다.",
    status: "기획 및 개발 중",
    url: "",
    isRepresentative: false,
    isConstruction: true,
  },
  {
    title: "건설 실무 브리핑",
    repository: "gunsеol-silmu-briefing",
    description: "건설 실무와 안전 지침에 관한 핵심 가이드라인과 최신 소식을 빠르게 제공하는 서비스입니다.",
    status: "개발 및 로컬 검토 중",
    url: "",
    isRepresentative: false,
    isConstruction: true,
  },
  {
    title: "제주 실시간 데이터 대시보드",
    repository: "jeju-dashboard",
    description: "제주 지역의 공공 데이터와 연동하여 실시간 현황을 한눈에 시각화해 주는 정보 대시보드입니다.",
    status: "개발 및 로컬 검토 중",
    url: "",
    isRepresentative: false,
    isConstruction: false,
  },
  {
    title: "유튜브 프로듀서 허브",
    repository: "youtube-producer-hub",
    description: "크리에이터와 프로듀서들이 작업 일정 및 콘텐츠 기획안을 협업하고 관리할 수 있도록 돕는 도구입니다.",
    status: "실험실 (기획 단계)",
    url: "",
    isRepresentative: false,
    isConstruction: false,
  },
  {
    title: "계산기 프로",
    repository: "calculator-pro",
    description: "공학 및 실무 계산에 필요한 수식들을 모아 직관적인 UI로 제공하는 다기능 웹 계산기입니다.",
    status: "개발 및 로컬 검토 중",
    url: "",
    isRepresentative: false,
    isConstruction: false,
  },
  {
    title: "데스크톱 튜토리얼",
    repository: "desktop-tutorial",
    description: "사용자가 웹 애플리케이션의 핵심 기능을 단계별 인터랙티브 가이드를 통해 쉽게 익히도록 돕는 튜토리얼 라이브러리입니다.",
    status: "실험실 (기획 단계)",
    url: "",
    isRepresentative: false,
    isConstruction: false,
  },
  {
    title: "문서방 오픈 툴박스",
    repository: "munseobang-open-toolbox",
    description: "실무 문서 작성 및 서식 관리에 필요한 오픈소스 유틸리티 모음집입니다.",
    status: "개발 및 로컬 검토 중",
    url: "",
    isRepresentative: false,
    isConstruction: false,
  },
  {
    title: "강아지 번역기",
    repository: "dog-translator",
    description: "반려견의 상태나 행동 양식을 분석해 주는 재미 중심의 인터랙티브 실험용 웹 서비스입니다.",
    status: "실험실 (기획 단계)",
    url: "",
    isRepresentative: false,
    isConstruction: false,
  },
];
