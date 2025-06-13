import React, { useState } from 'react';

const ProductDetail = ({ productData }) => {
  const [activeTab, setActiveTab] = useState('specifications');

  if (!productData) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">제품을 선택해주세요</h2>
          <p className="text-gray-600">상세 정보를 확인할 제품을 선택하시기 바랍니다.</p>
        </div>
      </div>
    );
  }

  const getDetailedSpecs = (productCode) => {
    const specs = {
      'HC-850B': {
        specifications: {
          '기본 특성': {
            '기반 재료': '유기-무기 하이브리드 고분자',
            '주요 성분': 'TEOS, MTMS, 난연성 무기 필러',
            '경화 메커니즘': 'Sol-Gel 공정',
            '도포 방법': '습식 도포',
            '경화 온도': '상온 또는 저온 경화'
          },
          '성능 지표': {
            '내화 등급': '불연 등급',
            '온도 저항성': '고온 안정성 우수',
            '접착력': '우수',
            '내구성': '내후성, 내구성 우수',
            '코팅 타입': '1액형 또는 2액형'
          }
        },
        applications: {
          '건축 분야': ['내외장재 코팅', '방화벽 처리', '천장재 보호'],
          '산업 분야': ['설비 보호', '배관 코팅', '고온 장비'],
          '운송 분야': ['선박 내장재', '항공 부품', '차량 내장재']
        },
        advantages: [
          '기존 유기계 불연 도료의 한계 극복',
          '무기계 재료의 취성 보완',
          '3차원 Si-O-Si 네트워크 형성으로 구조 안정성',
          '고온에서도 안정한 구조 유지'
        ]
      },
      'HAF-750A': {
        specifications: {
          '기본 특성': {
            '기반 재료': '수성 아크릴 에멀젼',
            '주요 성분': 'APP, PENTA, 멜라민',
            '팽창 비율': '10-100배',
            '팽창 온도': '180-200°C'
          },
          '물리적 특성': {
            '외관': '회색 또는 지정 색상',
            '비중': '1.25-1.45',
            'pH': '7.0-9.0',
            '고형분': '65-70%',
            '건조 시간': '표면 건조 1-2시간, 완전 경화 24시간'
          }
        },
        applications: {
          '건축 분야': ['목재 구조물', '합판', '건축물 내장재'],
          '시설 분야': ['다중이용시설', '공공건물', '상업시설'],
          '특수 분야': ['직물 코팅', '방화문', '방화벽']
        },
        advantages: [
          '발포 현상으로 효과적인 열 차단',
          '다공성 탄화층 형성으로 단열 효과',
          '열방출량 현저히 감소',
          '연기 발생 억제'
        ]
      },
      'HE-860B': {
        specifications: {
          '열적 특성': {
            '열전도율': '0.5-2 W/m·K 이상',
            '내열온도': '500-600°C 지속 사용',
            '방사율': '높은 방사율',
            '전기 절연성': '우수한 절연 특성'
          },
          '기계적 특성': {
            '접착력': '우수',
            '내후성': '우수한 내후성 및 내식성',
            '경도': '내마모성 우수',
            '색상': '흑색 (무통전 블랙 필러)'
          }
        },
        applications: {
          '전자 분야': ['리튬이온 배터리 팩', '전력 전자 장치', 'LED 조명'],
          '산업 분야': ['고온 설비', '서버 센터', '데이터 센터'],
          '항공우주': ['항공우주 부품', '고온 환경 장비']
        },
        advantages: [
          '복사 및 대류 방식의 효과적인 열 방출',
          '고온에서도 안정적인 성능',
          '전기 절연성 유지',
          '상온/가열 경화 모두 가능'
        ]
      }
    };
    return specs[productCode] || {};
  };

  const detailedSpecs = getDetailedSpecs(productData.code);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="px-4 py-2 text-lg font-bold rounded-full" style={{
              backgroundColor: 'var(--hanmir-thermal-red)',
              color: 'white'
            }}>
              {productData.code}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold" style={{color: 'var(--hanmir-safety-blue)'}}>
              {productData.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {productData.description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'specifications' 
                  ? 'gradient-fire-shield text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              기술 사양
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'applications' 
                  ? 'gradient-fire-shield text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              적용 분야
            </button>
            <button
              onClick={() => setActiveTab('advantages')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'advantages' 
                  ? 'gradient-fire-shield text-white shadow-md' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              주요 장점
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'specifications' && (
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(detailedSpecs.specifications || {}).map(([category, specs]) => (
                <div key={category} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--hanmir-safety-blue)'}}>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="font-medium text-gray-700">{key}</span>
                        <span className="text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(detailedSpecs.applications || {}).map(([category, apps]) => (
                <div key={category} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--hanmir-safety-blue)'}}>
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {apps.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--hanmir-innovation-orange)'}}></span>
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'advantages' && (
            <div className="grid md:grid-cols-2 gap-6">
              {(detailedSpecs.advantages || []).map((advantage, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-fire-shield flex items-center justify-center text-white font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--hanmir-safety-blue)'}}>
              제품 문의 및 상담
            </h3>
            <p className="text-gray-600 mb-6">
              전문 엔지니어가 귀하의 프로젝트에 최적화된 솔루션을 제공해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-fire-shield text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                기술 상담 요청
              </button>
              <button className="gradient-trust text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                견적 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;