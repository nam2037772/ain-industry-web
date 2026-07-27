# 아인산업 (AIN INDUSTRY) 공식 웹페이지

아인산업의 정보통신업(응용 소프트웨어 개발 및 공급업) 정체성을 대내외적으로 증명하고, 자체 개발/운영하고 있는 여러 실무형 웹서비스들을 하나로 조립하여 보여주는 공식 서비스 허브 페이지입니다.

## 🛠️ 기술 스택

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment**: Static HTML Export (`output: 'export'`) 지원

## 📂 디렉토리 구조

```text
ain-industry-web/
├── public/              # 정적 에셋 (파비콘 등)
├── src/
│   ├── app/             # Next.js App Router (Layout, Page, robots/sitemap)
│   ├── components/      # UI 컴포넌트 (Header, Hero, Identity, Services 등)
│   └── data/            # 비즈니스 데이터 파일 (서비스 리스트, 회사 실적 등)
├── next.config.ts       # Next.js 설정 (Static Export 및 이미지 최적화 끔 설정)
└── tailwind.config.ts   # Tailwind 설정 (v4 자동 설정 또는 globals.css 통합)
```

## ⚡ 로컬 개발 서버 실행

```bash
# 의존성 패키지 설치
npm install

# 로컬 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:3000`을 입력하여 확인할 수 있습니다.

## 📦 프로덕션 빌드 및 정적 내보내기 (Static Export)

정적 호스팅 서비스(Netlify, Vercel, AWS S3, GitHub Pages 등)에 배포할 수 있는 완전한 정적 HTML/CSS/JS 번들을 생성합니다.

```bash
npm run build
```

빌드가 성공하면 프로젝트 루트 경로에 `out` 폴더가 생성됩니다. 해당 폴더 내부의 모든 정적 파일들을 원하는 웹 호스팅 환경에 업로드하여 배포할 수 있습니다.

## 📝 관리 및 업데이트 방법

### 1. 웹서비스 목록 추가 및 수정
- [src/data/services.ts](file:///c:/Users/user/내드라이브(nam2037772@gmail.com)/바이브코딩/ain-industry-web/src/data/services.ts) 파일의 `webServices` 배열에 객체를 추가 또는 수정합니다.
- `url` 속성이 빈 값(`""`)일 경우, UI상에서 자동으로 **"링크 준비 중"** 상태로 변경되며 비활성화됩니다.
- `isRepresentative` 속성으로 메인의 핵심 서비스와 하단의 전체 서비스 콤팩트 목록 노출 여부를 정의합니다.
- `isConstruction` 속성으로 건설·안전 서비스(청록 뱃지)와 일반 실험 서비스(회색 뱃지)를 시각적으로 구별합니다.

### 2. 회사 정보 및 실적 수정
- [src/data/company.ts](file:///c:/Users/user/내드라이브(nam2037772@gmail.com)/바이브코딩/ain-industry-web/src/data/company.ts) 파일의 `companyInfo` 및 `companyStats` 객체를 통해 상호명, 주소, 업종, 실적(개발 개수 등)을 일괄적으로 제어합니다.
- 연락처(`phone`), 이메일(`email`), 협력 법인인 아인산업안전 쇼핑몰 주소(`ainsafeMallUrl`)는 데이터가 비어 있을 경우 자동으로 화면에 노출되지 않도록 방어 코드 처리가 되어 있습니다.
