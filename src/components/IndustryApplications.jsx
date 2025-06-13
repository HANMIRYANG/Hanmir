import React, { useState } from 'react';

const IndustryApplications = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('defense_aerospace');

  const industries = {
    defense_aerospace: {
      name: '국방/항공우주',
      icon: '✈️',
      color: 'var(--hanmir-thermal-red)',
      backgroundImage: 'linear-gradient(135deg, #C41E3A 0%, #8B1538 100%)',
      description: '극한 환경에서의 신뢰성과 안전성이 요구되는 국방 및 항공우주 분야',
      applications: [
        {
          title: '항공기 엔진 부품 코팅',
          products: ['HC-850B', 'HE-860B'],
          description: '고온 환경에서 작동하는 엔진 부품의 열 보호 및 내열성 향상',
          requirements: ['1000°C 이상 내열성', '경량화', '장기 내구성']
        },
        {
          title: '우주선 열 보호 시스템',
          products: ['HC-850B', 'HIC-035C'],
          description: '대기권 진입 시 극한 온도로부터 우주선 보호',
          requirements: ['극한 온도 저항성', '열 충격 저항성', '진공 환경 적응']
        },
        {
          title: '군용 장비 방화 코팅',
          products: ['HAF-750A', 'CNF-300W'],
          description: '군용 차량, 건물, 장비의 화재 안전성 확보',
          requirements: ['빠른 화재 진압', '연기 발생 최소화', '독성 가스 방지']
        },
        {
          title: '레이더 시스템 열 관리',
          products: ['HE-860B'],
          description: '고출력 레이더 시스템의 효율적인 열 방출',
          requirements: ['전기 절연성', '높은 열전도율', '전자파 간섭 최소화']
        }
      ],
      keyRequirements: [
        '극한 온도 저항성 (1000°C 이상)',
        '경량화 및 구조적 안정성',
        '장기간 무정비 운용',
        '엄격한 안전 기준 준수'
      ],
      caseStudy: {
        title: '차세대 전투기 엔진 코팅 적용 사례',
        description: 'HC-850B 실란 졸-겔 불연 코팅제를 적용하여 엔진 부품의 내열성을 30% 향상시키고 중량을 15% 감소시킨 성공 사례',
        results: ['내열성 30% 향상', '중량 15% 감소', '유지보수 주기 50% 연장']
      }
    },
    shipbuilding: {
      name: '조선/해양',
      icon: '🚢',
      color: 'var(--hanmir-safety-blue)',
      backgroundImage: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
      description: '해양 환경의 염분과 습도에 견디며 화재 안전성을 제공하는 조선 분야',
      applications: [
        {
          title: '선박 내장재 방염 처리',
          products: ['HAF-750A', 'HAF-775D'],
          description: '선실, 복도, 공용구역의 내장재 화재 안전성 확보',
          requirements: ['IMO 규정 준수', '내염수성', '저독성']
        },
        {
          title: '엔진룸 고온 부품 보호',
          products: ['HC-850B', 'HE-860B'],
          description: '선박 엔진룸의 고온 배관 및 부품 보호 코팅',
          requirements: ['고온 안정성', '내부식성', '진동 저항성']
        },
        {
          title: '갑판 차열 코팅',
          products: ['HIC-035C'],
          description: '햇빛과 열로부터 갑판 및 상부구조 보호',
          requirements: ['UV 저항성', '내후성', '미끄럼 방지']
        },
        {
          title: '해양 플랜트 안전 코팅',
          products: ['SMG-505Y', 'HC-850B'],
          description: '해상 시설물의 구조적 안전성 및 화재 방지',
          requirements: ['장기 내구성', '극한 환경 적응', '정기 점검 용이성']
        }
      ],
      keyRequirements: [
        '내염수성 및 내부식성',
        'IMO/SOLAS 규정 준수',
        '고습도 환경 적응성',
        '장기간 해상 운용 내구성'
      ],
      caseStudy: {
        title: 'LNG 운반선 화물창 코팅 프로젝트',
        description: '극저온 LNG 저장을 위한 화물창에 특수 코팅 시스템을 적용하여 안전성과 효율성을 동시에 확보한 대형 프로젝트',
        results: ['화재 위험 90% 감소', '단열 효율 25% 향상', '유지보수 비용 40% 절감']
      }
    },
    battery_energy: {
      name: '2차 전지/에너지',
      icon: '🔋',
      color: 'var(--hanmir-innovation-orange)',
      backgroundImage: 'linear-gradient(135deg, #EA580C 0%, #DC2626 100%)',
      description: '전기차, ESS 등 2차 전지 시스템의 열 관리와 안전성을 보장하는 에너지 분야',
      applications: [
        {
          title: '배터리 열폭주 방지',
          products: ['HE-860B', 'HAF-775D'],
          description: '리튬이온 배터리의 과열 방지 및 화재 확산 차단',
          requirements: ['빠른 열 방출', '전기 절연성', '열폭주 차단']
        },
        {
          title: '전력 변환 장치 냉각',
          products: ['HE-860B'],
          description: 'PCS, 인버터 등 전력 변환 장치의 효율적 열 관리',
          requirements: ['높은 열전도율', '전기 안전성', '소형화 대응']
        },
        {
          title: '에너지 저장 시스템 안전',
          products: ['HC-850B', 'SMG-505Y'],
          description: 'ESS 시설의 화재 방지 및 구조적 안전성 확보',
          requirements: ['대용량 시스템 적용', '자동 소화 연동', '원격 모니터링']
        },
        {
          title: '전기차 배터리 팩 보호',
          products: ['HE-860B', 'CNF-300W'],
          description: '전기차 배터리 팩의 열 관리 및 화재 안전성',
          requirements: ['경량화', '충격 저항성', '빠른 열 방출']
        }
      ],
      keyRequirements: [
        '전기 절연성 및 안전성',
        '효율적인 열 관리 성능',
        '화재 확산 방지 능력',
        '소형화 및 경량화 대응'
      ],
      caseStudy: {
        title: '대용량 ESS 화재 안전 시스템 구축',
        description: '500MWh 규모의 ESS 시설에 통합 화재 안전 코팅 시스템을 적용하여 세계 최고 수준의 안전성을 확보한 프로젝트',
        results: ['화재 위험도 95% 감소', '열 방출 효율 40% 향상', '보험료 30% 절감']
      }
    },
    construction: {
      name: '건축/건설',
      icon: '🏗️',
      color: 'var(--hanmir-safety-blue)',
      backgroundImage: 'linear-gradient(135deg, #1E3A8A 0%, #374151 100%)',
      description: '건축법규를 준수하며 에너지 효율과 안전성을 제공하는 건축 분야',
      applications: [
        {
          title: '건물 외벽 차열 코팅',
          products: ['HIC-035C'],
          description: '건물 외벽의 태양열 반사 및 단열 성능 향상',
          requirements: ['에너지 효율 향상', '색상 안정성', '장기 내구성']
        },
        {
          title: '내장재 방염 처리',
          products: ['HAF-750A', 'CNF-300W'],
          description: '목재, 섬유 등 가연성 내장재의 방염 성능 부여',
          requirements: ['건축법규 준수', '미관 유지', '친환경성']
        },
        {
          title: '지붕 단열 시스템',
          products: ['HIC-035C', 'SMG-505Y'],
          description: '지붕의 단열 성능 향상 및 구조적 안전성 확보',
          requirements: ['방수성', '내후성', '시공 편의성']
        },
        {
          title: '고층 건물 안전 코팅',
          products: ['HC-850B', 'HAF-775D'],
          description: '고층 건물의 피난 시간 확보를 위한 방화 코팅',
          requirements: ['연기 발생 최소화', '구조 보호', '피난 시간 연장']
        }
      ],
      keyRequirements: [
        '건축법규 및 화재 안전 기준 준수',
        '에너지 효율 향상 기여',
        '시공성 및 경제성',
        '장기간 성능 유지'
      ],
      caseStudy: {
        title: '친환경 스마트 빌딩 통합 코팅 시스템',
        description: '40층 규모의 스마트 오피스 빌딩에 외벽 차열, 내장재 방염, 구조재 보호를 위한 통합 코팅 시스템을 적용한 프로젝트',
        results: ['에너지 비용 35% 절감', '화재 안전성 등급 상향', 'LEED 플래티넘 인증 획득']
      }
    },
    electronics: {
      name: '전자/반도체',
      icon: '💻',
      color: 'var(--hanmir-innovation-orange)',
      backgroundImage: 'linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)',
      description: '정밀한 열 제어와 전기 절연성이 요구되는 전자 및 반도체 분야',
      applications: [
        {
          title: '반도체 장비 열 관리',
          products: ['HE-860B'],
          description: '반도체 제조 장비의 정밀 온도 제어 및 열 방출',
          requirements: ['정밀 온도 제어', '청정도 유지', '장기 신뢰성']
        },
        {
          title: 'LED 방열 코팅',
          products: ['HE-860B'],
          description: '고출력 LED의 효율적인 열 방출 및 수명 연장',
          requirements: ['광 투과성', '열 방출 효율', '소형화']
        },
        {
          title: '서버 냉각 시스템',
          products: ['HE-860B'],
          description: '데이터센터 서버의 효율적인 열 관리',
          requirements: ['높은 열전도율', '전기 절연성', '공간 효율성']
        },
        {
          title: '전자 부품 보호',
          products: ['HC-850B', 'CNF-300W'],
          description: '민감한 전자 부품의 열 및 화재로부터 보호',
          requirements: ['전자파 차폐', '정전기 방지', '미세 공정 적용']
        }
      ],
      keyRequirements: [
        '정밀한 열 제어 능력',
        '우수한 전기 절연성',
        '청정 환경 적응성',
        '소형화 및 집적화 대응'
      ],
      caseStudy: {
        title: '차세대 데이터센터 열 관리 시스템',
        description: 'AI 서버 전용 데이터센터에 첨단 방열 코팅 시스템을 적용하여 냉각 효율을 극대화하고 전력 소비를 최소화한 혁신 사례',
        results: ['냉각 효율 50% 향상', '전력 소비 25% 절감', '서버 성능 15% 개선']
      }
    }
  };

  const currentIndustry = industries[selectedIndustry];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--hanmir-thermal-red)'}}>
            산업별 적용 분야
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            한미르(주)의 기능성 코팅제가 다양한 산업 분야에서 어떻게 활용되고 있는지 확인하세요
          </p>
        </div>

        {/* Industry Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {Object.entries(industries).map(([key, industry]) => (
            <button
              key={key}
              onClick={() => setSelectedIndustry(key)}
              className={`p-4 rounded-xl text-center transition-all duration-300 ${
                selectedIndustry === key
                  ? 'transform scale-105 shadow-xl text-white'
                  : 'bg-white hover:bg-gray-50 text-gray-700 shadow-md hover:shadow-lg'
              }`}
              style={{
                background: selectedIndustry === key ? industry.backgroundImage : undefined
              }}
            >
              <div className="text-3xl mb-2">{industry.icon}</div>
              <div className="font-semibold text-sm">{industry.name}</div>
            </button>
          ))}
        </div>

        {/* Industry Detail */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Industry Header */}
          <div 
            className="p-8 text-white"
            style={{ background: currentIndustry.backgroundImage }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{currentIndustry.icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-2">{currentIndustry.name}</h3>
                <p className="text-lg opacity-90">{currentIndustry.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Applications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {currentIndustry.applications.map((app, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <h4 className="text-xl font-bold mb-3" style={{color: currentIndustry.color}}>
                    {app.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-700 mb-2">적용 제품:</h5>
                    <div className="flex flex-wrap gap-2">
                      {app.products.map((product, idx) => (
                        <span key={idx} className="px-3 py-1 text-sm font-medium rounded-full text-white"
                              style={{backgroundColor: currentIndustry.color}}>
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-700 mb-2">핵심 요구사항:</h5>
                    <ul className="space-y-1">
                      {app.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: currentIndustry.color}}></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Requirements */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="text-2xl font-bold mb-4" style={{color: currentIndustry.color}}>
                {currentIndustry.name} 분야 핵심 요구사항
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {currentIndustry.keyRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                         style={{backgroundColor: currentIndustry.color}}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📋</span>
                <h4 className="text-2xl font-bold" style={{color: currentIndustry.color}}>
                  성공 사례
                </h4>
              </div>
              <h5 className="text-xl font-semibold mb-3 text-gray-800">
                {currentIndustry.caseStudy.title}
              </h5>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {currentIndustry.caseStudy.description}
              </p>
              <div>
                <h6 className="font-semibold text-gray-700 mb-2">주요 성과:</h6>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentIndustry.caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200">
                      <span className="text-lg">✅</span>
                      <span className="font-medium text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--hanmir-safety-blue)'}}>
              산업별 맞춤 솔루션 상담
            </h3>
            <p className="text-gray-600 mb-6">
              귀하의 산업 분야에 최적화된 코팅 솔루션을 제안해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-fire-shield text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                산업별 상담 신청
              </button>
              <button className="gradient-trust text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                기술 자료 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;