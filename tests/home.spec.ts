import { test, expect } from "@playwright/test";

test.describe("아인산업 공식 웹서비스 허브 E2E 테스트", () => {
  test.beforeEach(async ({ page }) => {
    // basePath가 적용된 주소로 이동
    await page.goto("/ain-industry-web");
  });

  test("1. 페이지 메타데이터(타이틀) 검증", async ({ page }) => {
    await expect(page).toHaveTitle("아인산업 | 건설기술 기반 웹서비스 및 소프트웨어 개발");
  });

  test("2. 메인 히어로 영역의 헤드라인 및 메시지 검증", async ({ page }) => {
    const heading = page.locator("h1");
    // Autodesk 디자인에 맞춘 텍스트 검증
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

  test("5. 웹서비스 리스트 중 링크 준비 중 상태 검증", async ({ page }) => {
    // border 스타일을 가진 카드 div 중에서 h3 자식(거푸집 및 동바리 구조검토)을 기준으로 검색합니다.
    const formworkCard = page.locator("div.border").filter({
      has: page.locator("h3", { hasText: "거푸집 및 동바리 구조검토" })
    }).first();
    await expect(formworkCard).toContainText("링크 준비 중");
    
    const disabledButton = formworkCard.getByText("링크 준비 중", { exact: true });
    await expect(disabledButton).toHaveClass(/cursor-not-allowed/);
  });
});
