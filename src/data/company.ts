export interface CompanyInfo {
  name: string;
  ceo: string;
  industry: string;
  primaryBiz: string;
  secondaryBiz: string;
  address: string;
  email?: string;
  phone?: string;
  ainsafeMallUrl?: string;
}

export interface CompanyStats {
  totalServicesCount: number;
  constructionServicesCount: string; // 개발/테스트 중인 건설 실무 도구 개수
  locationBrief: string;
  philosophyBrief: string;
}

export const companyInfo: CompanyInfo = {
  name: "아인산업",
  ceo: "남현우",
  industry: "정보통신업",
  primaryBiz: "응용 소프트웨어 개발 및 공급업", // 사업자등록증 상의 주업종 표기를 맞춤
  secondaryBiz: "컴퓨터 프로그래밍 서비스업",
  address: "제주특별자치도 서귀포시 성산읍 풍천로 77-23",
  email: "inernet@naver.com",
  phone: "010-5638-0103",
  ainsafeMallUrl: "", // (주)아인산업안전 쇼핑몰 URL (빈 값이면 '준비 중' 처리)
};

export const companyStats: CompanyStats = {
  totalServicesCount: 14,
  constructionServicesCount: "개발 및 테스트 중인 건설 실무 도구 8종",
  locationBrief: "제주 기반 정보통신업체",
  philosophyBrief: "현장 실무 기반 자체 개발 및 연구",
};
