# B2B 첨단소재 기업 홈페이지 시스템 설계서

## 프로젝트 개요
- **프로젝트명**: advanced_materials_website
- **목표**: 무기질 기반 불연 코팅제 및 에어로겔 기술을 보유한 B2B 첨단소재 기업의 기술 신뢰성 극대화 및 리드 생성 최적화를 위한 반응형 웹사이트
- **핵심 컨셉**: "보이지 않는 기술이 세상을 더 안전하고 지속가능하게 만듭니다"

## Implementation approach

어려운 점들을 분석하고 적절한 오픈소스 프레임워크를 선택합니다:

### 주요 기술적 도전과제
1. **3D 렌더링 시뮬레이터**: 극한 환경에서의 소재 반응을 실시간으로 시각화
2. **고성능 미디어 처리**: 4K 동영상 배경과 파티클 효과의 모바일 최적화
3. **복잡한 인터랙션**: 마우스/터치 기반 파티클 효과 및 3D 시뮬레이션 조작
4. **B2B 특화 기능**: 리드 생성 최적화 및 기술 문서 관리

### 선택된 기술 스택
- **Frontend Framework**: React 18 with TypeScript (컴포넌트 재사용성, 타입 안정성)
- **3D 렌더링**: Three.js + React Three Fiber (WebGL 기반 3D 렌더링)
- **애니메이션**: Framer Motion (고급 애니메이션 및 제스처)
- **파티클 시스템**: Three.js Particles + React Particles (GPU 가속 파티클 효과)
- **스타일링**: Tailwind CSS + Styled Components (반응형 디자인 + 동적 스타일링)
- **상태관리**: Zustand (가벼운 상태관리)
- **미디어 최적화**: Next.js Image Optimization + React Player
- **CMS**: Strapi (Headless CMS)
- **Backend**: Node.js + Express.js + MongoDB
- **배포**: Vercel (Frontend) + AWS EC2 (Backend)

## Data structures and interfaces

아래 클래스 다이어그램은 시스템의 핵심 구조를 보여줍니다.

## Program call flow

아래 시퀀스 다이어그램은 주요 사용자 시나리오의 흐름을 보여줍니다.

## 시스템 아키텍처

### Frontend 아키텍처
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Presentation  │    │    Business      │    │      Data       │
│     Layer       │    │     Logic        │    │     Layer       │
├─────────────────┤    ├──────────────────┤    ├─────────────────┤
│ - Hero Section  │◄──►│ - Simulator      │◄──►│ - API Client    │
│ - Simulator UI  │    │   Controller     │    │ - State Store   │
│ - Navigation    │    │ - Animation      │    │ - Cache         │
│ - Mobile Menu   │    │   Manager        │    │ - Local Storage │
│ - Forms         │    │ - Media Manager  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### 3D 시뮬레이터 아키텍처
```
┌─────────────────────────────────────────────────────────┐
│                Virtual Environment Simulator             │
├─────────────────┬─────────────────┬─────────────────────┤
│   Scene Manager │  Physics Engine │  Rendering Engine  │
│                 │                 │                     │
│ - Scene Setup   │ - Heat Transfer │ - Material Shaders  │
│ - Object Loader │ - Fire Effects  │ - Lighting System  │
│ - Environment   │ - Impact Sim    │ - Post Processing   │
│   Controls      │ - Temperature   │ - Performance       │
│                 │   Calculation   │   Optimization      │
└─────────────────┴─────────────────┴─────────────────────┘
```

### 반응형 디자인 전략

#### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

#### 성능 최적화
- **Code Splitting**: React.lazy() + Suspense
- **Image Optimization**: WebP format + lazy loading
- **Bundle Optimization**: Tree shaking + dynamic imports
- **CDN**: Cloudflare for static assets

### 보안 고려사항
- **HTTPS 강제**: SSL/TLS 인증서
- **API 보안**: JWT 토큰 + Rate Limiting
- **XSS 방지**: Content Security Policy
- **GDPR 준수**: 쿠키 동의 + 개인정보 처리

### 성능 요구사항
- **초기 로딩**: < 3초 (3G 네트워크)
- **3D 렌더링**: 60 FPS (데스크톱), 30 FPS (모바일)
- **Lighthouse 점수**: 90+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

### 배포 전략
- **CI/CD**: GitHub Actions
- **환경분리**: Development → Staging → Production
- **모니터링**: Sentry (오류 추적) + Google Analytics 4
- **백업**: 일일 자동 백업 + 버전 관리

## Anything UNCLEAR

명확히 해야 할 프로젝트 측면들:

1. **회사명 및 브랜딩**: 구체적인 회사명과 브랜드 가이드라인이 필요합니다
2. **3D 모델 리소스**: 시뮬레이터에 사용할 제품 3D 모델의 제공 방식과 품질 요구사항
3. **시뮬레이션 정확도**: 물리 엔진의 정확도 수준 (시각적 효과 vs 실제 물리 계산)
4. **콘텐츠 관리 권한**: CMS 접근 권한 및 콘텐츠 승인 프로세스
5. **다국어 지원 범위**: 한국어, 영어 외 추가 언어 지원 필요성
6. **예산 및 개발 일정**: MVP 버전과 풀 버전의 단계적 개발 계획
7. **호스팅 인프라**: 트래픽 예상량에 따른 서버 사양 결정
8. **제3자 시스템 연동**: ERP, CRM 등 기존 시스템과의 연동 필요성
9. **모바일 앱 고려**: PWA(Progressive Web App) 형태의 모바일 최적화 수준
10. **데이터 분석 요구사항**: 사용자 행동 분석 및 리드 추적을 위한 구체적인 KPI 설정

이러한 사항들이 명확해지면 더욱 정확하고 효율적인 시스템 구현이 가능합니다.