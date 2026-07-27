export interface CompanyInfo {
  name: string;
  ceo: string;
  industry: string;
  primaryBiz: string;
  secondaryBiz: string;
  address: string;
  email?: string; // 설정되지 않으면 화면에 표시 안 함
  phone?: string;  // 설정되지 않으면 화면에 표시 안 함
  ainsafeMallUrl?: string; // (주)아인산업안전 쇼핑몰 링크. 빈 값이면 숨기거나 준비 중 처리
}

export interface CompanyStats {
  totalServicesCount: number;
  constructionServicesCount: string; // "8개 이상" 등 문자열 처리 가능하도록
  locationBrief: string;
  philosophyBrief: string;
}

export const companyInfo: CompanyInfo = {
  name: "아인산업",
  ceo: "남현우",
  industry: "정보통신업",
  primaryBiz: "응용 소프트웨어 개발 및 공급업",
  secondaryBiz: "컴퓨터 프로그래밍 서비스업",
  address: "제주특별자치도 서귀포시 성산읍 풍천로 77-23",
  email: "inernet@naver.com",
  phone: "010-5638-0103",
  ainsafeMallUrl: "", // (주)아인산업안전 쇼핑몰 URL (빈 값이면 '링크 준비 중' 처리)
};

export const companyStats: CompanyStats = {
  totalServicesCount: 14,
  constructionServicesCount: "8개 이상",
  locationBrief: "제주 기반 정보통신업체",
  philosophyBrief: "현장 실무 기반 자체 개발",
};
