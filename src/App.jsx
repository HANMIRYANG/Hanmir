import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import ProductCatalog from './components/ProductCatalog';
import IndustryApplications from './components/IndustryApplications';
import ApplicationsSection from './components/ApplicationsSection';
import SimulatorSection from './components/SimulatorSection';
import SustainabilitySection from './components/SustainabilitySection';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  // Hanmir Corporation Data
  const companyInfo = {
    name: "한미르(주)",
    nameEnglish: "Hanmir Corporation",
    established: "2009년 8월",
    address: "인천광역시 서구 도담로 190",
    businessFocus: "무기질 기반 기능성 코팅제 전문 제조업체",
    description: "20년 이상의 기술 축적을 바탕으로 불연 코팅제, 방염 도료, 차열/단열 코팅제, 방열 코팅제 등 다양한 기능성 코팅 솔루션을 제공하는 국내 유일의 종합 기능성 코팅 전문 기업입니다.",
    coreTechnologies: [
      "불연 코팅제",
      "방염 도료", 
      "차열/단열 코팅제",
      "방열 코팅제",
      "실란 졸-겔 기술",
      "에어로겔 기술"
    ],
    competitiveAdvantages: [
      "20년 이상의 기술 축적",
      "다양한 산업 분야 적용 경험",
      "독자적인 Sol-Gel 기술",
      "환경 친화적 수성 시스템",
      "맞춤형 솔루션 제공",
      "국내 유일의 종합 기능성 코팅 전문 기업"
    ]
  };

  const updatedHeroProps = {
    title: companyInfo.name,
    subtitle: companyInfo.businessFocus,
    description: companyInfo.description,
    established: companyInfo.established,
    address: companyInfo.address,
    backgroundVideo: "/assets/videos/coating-process.mp4" // placeholder path
  };

  const updatedTechnologyProps = {
    title: "핵심 기술",
    subtitle: "한미르(주)의 차별화된 기능성 코팅 기술",
    technologies: [
      {
        icon: "🔥",
        title: "실란 졸-겔 불연 코팅제",
        description: "유기-무기 하이브리드 고분자 기반의 첨단 불연 코팅 기술로 기존 유기계 도료의 한계를 극복하고 무기계 재료의 취성을 보완한 혁신적인 솔루션",
        features: ["Sol-Gel 공정", "3차원 Si-O-Si 네트워크", "고온 안정성", "우수한 접착력"],
        applications: ["건축 내외장재", "산업 설비", "선박 내장재", "항공우주 부품"]
      },
      {
        icon: "🛡️",
        title: "발포형 방염 도료",
        description: "암모늄 폴리인산, 펜타에리쓰리톨, 멜라민의 복합 시너지로 화재 시 10-100배 팽창하여 다공성 탄화층을 형성하는 방염 기술",
        features: ["발포 현상", "다공성 탄화층", "열방출량 감소", "연기 발생 억제"],
        applications: ["목재 구조물", "건축물 내장재", "다중이용시설", "방화문"]
      },
      {
        icon: "❄️",
        title: "차열/단열 코팅제",
        description: "TiO₂, 글라스 버블, 마이카 등의 복합 필러를 활용한 태양열 반사 및 열 전달 차단 기술로 에너지 효율을 극대화",
        features: ["태양열 복사 반사", "근적외선 반사", "VOC 저방출", "방수성"],
        applications: ["건축물 외벽", "지붕", "저장 탱크", "산업 시설"]
      },
      {
        icon: "⚡",
        title: "내고온 방열 코팅제",
        description: "무통전 블랙 필러, 탄화규소, 티타늄 붕화물을 활용한 500-600°C 고온 환경에서의 효과적인 열 방출 솔루션",
        features: ["높은 열전도율", "전기 절연성", "복사/대류 방열", "고온 안정성"],
        applications: ["리튬이온 배터리", "전력 전자 장치", "LED 조명", "서버 센터"]
      },
      {
        icon: "🔗",
        title: "무기계 접착제",
        description: "소듐 실리케이트와 카오린 기반의 800°C 이상 내열 무기계 접착 기술로 가연성 물질 무함유 안전 솔루션",
        features: ["800°C 이상 내열", "불연/준불연 등급", "VOC 거의 없음", "유독가스 극소"],
        applications: ["내화벽돌 접착", "단열재 시공", "고온 설비 보수", "세라믹 부품"]
      },
      {
        icon: "🌟",
        title: "에어로겔 기술",
        description: "1000°C 준불연 성능의 차세대 에어로겔 기술로 2차 전지 열폭주 방지 및 건축용 불연 패널 개발",
        features: ["1000°C 준불연", "초경량", "우수한 단열성", "준불연 등급"],
        applications: ["2차 전지 면압패드", "건축용 불연 패널", "고온 단열재", "방화 시스템"]
      }
    ]
  };

  const updatedApplicationsProps = {
    title: "적용 분야",
    subtitle: "다양한 산업 분야에서 검증된 한미르(주)의 솔루션",
    applications: [
      {
        icon: "✈️",  
        title: "국방/항공우주",
        description: "극한 환경에서의 안전성과 성능을 보장하는 첨단 코팅 솔루션",
        features: ["극한 온도 저항성", "경량화", "장기 내구성", "엄격한 안전 기준"],
        useCases: ["항공기 엔진 부품", "우주선 열 보호", "군용 장비 방화", "레이더 시스템"]
      },
      {
        icon: "🚢",
        title: "조선/해양", 
        description: "해양 환경의 염분과 습도에 견디는 내구성 코팅 시스템",
        features: ["내염수성", "IMO 규정 준수", "내부식성", "장기 해상 운용"],
        useCases: ["선박 내장재", "엔진룸 보호", "갑판 차열", "해양 플랜트"]
      },
      {
        icon: "🔋",
        title: "2차 전지/에너지",
        description: "전기차, ESS 등 에너지 시스템의 열 관리와 안전성 솔루션",
        features: ["열폭주 방지", "전기 절연성", "화재 안전성", "경량화"],
        useCases: ["배터리 팩 보호", "전력 변환 장치", "에너지 저장 시스템", "전기차 안전"]
      },
      {
        icon: "🏗️",
        title: "건축/건설",
        description: "건축법규를 준수하며 에너지 효율을 향상시키는 건축용 코팅",
        features: ["건축법규 준수", "에너지 효율", "시공성", "장기 내구성"],
        useCases: ["외벽 차열", "내장재 방염", "지붕 단열", "고층 건물 안전"]
      },
      {
        icon: "💻",
        title: "전자/반도체",
        description: "정밀한 열 제어와 전기 절연성이 요구되는 전자 분야 솔루션",
        features: ["정밀 온도 제어", "전기 절연성", "청정도 유지", "소형화 대응"],
        useCases: ["반도체 장비", "LED 방열", "서버 냉각", "전자 부품 보호"]
      }
    ]
  };

  const updatedSimulatorProps = {
    title: "코팅 성능 시뮬레이터",
    subtitle: "한미르(주) 제품의 성능을 가상으로 체험해보세요",
    description: "다양한 환경 조건에서 우리 제품이 어떻게 작동하는지 실시간으로 확인할 수 있습니다."
  };

  const updatedSustainabilityProps = {
    title: "지속가능경영",
    subtitle: "환경과 안전을 최우선으로 하는 한미르(주)",
    commitments: [
      {
        icon: "🌱",
        title: "친환경 기술 개발",
        description: "수성 시스템 기반의 친환경 코팅제 개발로 VOC 배출을 최소화하고 작업 환경의 안전성을 확보합니다.",
        metrics: ["VOC 90% 감소", "친환경 인증", "작업환경 개선"]
      },
      {
        icon: "🔬",
        title: "연구개발 투자",
        description: "지속적인 R&D 투자를 통해 차세대 기술을 개발하고 산업 발전에 기여합니다.",
        metrics: ["R&D 투자 15%", "특허 출원", "기술 혁신"]
      },
      {
        icon: "🤝",
        title: "사회적 책임",
        description: "안전한 제품 공급과 기술 교육을 통해 사회 안전망 구축에 기여합니다.",
        metrics: ["안전 교육", "기술 전수", "사회 공헌"]
      },
      {
        icon: "♻️",
        title: "순환경제 실현",
        description: "제품 생명주기 전반에 걸친 지속가능성을 고려한 순환경제 모델을 구축합니다.",
        metrics: ["재활용률 향상", "폐기물 감소", "자원 효율성"]
      }
    ]
  };

  const updatedFooterProps = {
    companyInfo: {
      name: companyInfo.name,
      nameEnglish: companyInfo.nameEnglish,
      address: companyInfo.address,
      established: companyInfo.established,
      businessRegistration: "123-45-67890", // placeholder
      phone: "+82-32-560-1234", // placeholder
      fax: "+82-32-560-1235", // placeholder
      email: "info@hanmir.co.kr" // placeholder
    },
    businessAreas: [
      "불연 코팅제 개발 및 제조",
      "방염 도료 시스템 공급",
      "차열/단열 코팅 솔루션",
      "방열 코팅제 개발",
      "무기계 접착제 제조",
      "에어로겔 기술 개발"
    ],
    certifications: [
      "KS 규격 준수",
      "ISO 화재 시험 기준",
      "건축법규 불연/준불연 등급",
      "해양 규격 승인",
      "방위산업 품질 기준"
    ]
  };

  return (
    <div className="App">
      <Header 
        companyName={companyInfo.name}
        companyNameEnglish={companyInfo.nameEnglish}
        onSectionChange={setCurrentSection}
        currentSection={currentSection}
      />
      
      {currentSection === 'home' && (
        <>
          <HeroSection {...updatedHeroProps} />
          <TechnologySection {...updatedTechnologyProps} />
          <ProductCatalog />
          <IndustryApplications />
          <ApplicationsSection {...updatedApplicationsProps} />
          <SimulatorSection {...updatedSimulatorProps} />
          <SustainabilitySection {...updatedSustainabilityProps} />
        </>
      )}
      
      {currentSection === 'technology' && (
        <TechnologySection {...updatedTechnologyProps} />
      )}
      
      {currentSection === 'products' && (
        <ProductCatalog />
      )}
      
      {currentSection === 'applications' && (
        <>
          <IndustryApplications />
          <ApplicationsSection {...updatedApplicationsProps} />
        </>
      )}
      
      {currentSection === 'simulator' && (
        <SimulatorSection {...updatedSimulatorProps} />
      )}
      
      {currentSection === 'sustainability' && (
        <SustainabilitySection {...updatedSustainabilityProps} />
      )}
      
      <Footer {...updatedFooterProps} />
    </div>
  );
}

export default App;