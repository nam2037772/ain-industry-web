import { test, expect } from "@playwright/test";

test.describe("아인산업 공식 웹서비스 허브 사실성 검증 및 E2E 테스트", () => {
  test.beforeEach(async ({ page }) => {
    // Vercel 배포: basePath 없이 루트에서 서비스
    await page.goto("/");
  });

  test("1. 페이지 메타데이터(타이틀) 검증", async ({ page }) => {
    await expect(page).toHaveTitle("아인산업 | 건설기술 기반 웹서비스 및 소프트웨어 개발");
  });

  test("2. 메인 히어로 영역의 헤드라인 및 메시지 검증", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toContainText("건설 현장의");
    await expect(heading).toContainText("복잡한 업무를 더 간단하게");

    const description = page.locator("p");
    await expect(description.first()).toContainText("현장 경험을 바탕으로");
  });

  test("3. 회사 정체성 검증 (아인산업 개인사업자 주/부업종)", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toContainText("아인산업");
    await expect(footer).toContainText("남현우");
    await expect(footer).toContainText("응용 소프트웨어 개발 및 공급업");
    await expect(footer).toContainText("컴퓨터 프로그래밍 서비스업");
    await expect(footer).toContainText("제주특별자치도 서귀포시 성산읍 풍천로 77-23");
  });

  test("4. ㈜아인산업안전(법인)과 아인산업(개인)의 명확한 구분 검증", async ({ page }) => {
    const connectionSection = page.locator("#connection");
    await expect(connectionSection).toContainText("㈜아인산업안전");
    await expect(connectionSection).toContainText("별도 법인 사업자");
  });

  test("5. 웹서비스 리스트 중 배포 준비 중 상태 검증", async ({ page }) => {
    // border 스타일을 가진 카드 div 중에서 h3 자식(거푸집·동바리 구조검토)을 기준으로 검색합니다.
    const formworkCard = page.locator("div.border").filter({
      has: page.locator("h3", { hasText: "거푸집·동바리 구조검토" })
    }).first();
    await expect(formworkCard).toContainText("배포 준비 중");
    
    const disabledButton = formworkCard.getByText("배포 준비 중", { exact: true });
    await expect(disabledButton).toHaveClass(/cursor-not-allowed/);
  });

  test("6. 임의의 가짜 하중 및 판정 수치 누락 검증 (Factual Check)", async ({ page }) => {
    const bodyText = await page.locator("body").innerText();
    
    // 제거해야 할 가짜 통계/계산 데이터
    expect(bodyText).not.toContain("2.5 kN");
    expect(bodyText).not.toContain("11.8 kN");
    expect(bodyText).not.toContain("7.26 kN");
    expect(bodyText).not.toContain("Construction Load 1.50");
    expect(bodyText).not.toContain("구조안전성 판정 OK");
    expect(bodyText).not.toContain("실시간 안전 계산");
  });

  test("7. 가상 도메인 배제 검증 (Factual Check)", async ({ page }) => {
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).not.toContain("formwork-review-pro.ain.net");
  });

  test("8. AI 생성 이미지 안내 캡션 확인", async ({ page }) => {
    // 본문에 최소 1개 이상의 콘셉트 예시 안내문이 있는지 검사
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).toContain("UI 콘셉트 예시");
  });

  test("9. 핵심 서비스 4종 노출 검증", async ({ page }) => {
    const bodyText = await page.locator("body").innerText();
    expect(bodyText).toContain("거푸집·동바리 구조검토");
    expect(bodyText).toContain("안전관리계획서 작성 지원");
    expect(bodyText).toContain("사진대지 및 공사기록 관리");
    expect(bodyText).toContain("사업계획서 및 사업수지 분석");
  });

  test("10. 과장 문구 검출 여부 검증 (Factual Check)", async ({ page }) => {
    const bodyText = await page.locator("body").innerText();
    
    // 사용자가 금지한 과장 및 미입증 문구 검사
    expect(bodyText).not.toContain("현장 검증 완료");
    expect(bodyText).not.toContain("철저히 검증된");
    expect(bodyText).not.toContain("8개 이상 건설·안전");
  });
});
