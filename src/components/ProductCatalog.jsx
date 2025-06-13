import React, { useState } from 'react';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productCategories = {
    'fire_resistant': {
      name: '불연 코팅제',
      color: 'bg-red-600',
      icon: '🔥',
      products: [
        {
          code: 'HC-850B',
          name: '실란 졸-겔 불연 코팅제',
          description: '유기-무기 하이브리드 고분자 기반의 첨단 불연 코팅제',
          features: ['Sol-Gel 공정', '고온 안정성', '우수한 접착력', '다양한 소재 적용'],
          applications: ['건축 내외장재', '산업 설비', '선박 내장재', '항공우주 부품']
        },
        {
          code: 'HC-860B',
          name: '불연급 바인더',
          description: '다른 기능성 코팅제의 기반이 되는 불연급 바인더',
          features: ['불연급 성능', '다양한 필러 호환', '안정적 기반재'],
          applications: ['방열 코팅제 바인더', '기타 기능성 코팅제 기반재']
        }
      ]
    },
    'flame_retardant': {
      name: '방염 도료',
      color: 'bg-orange-600',
      icon: '🛡️',
      products: [
        {
          code: 'HAF-750A',
          name: '발포형 방염도료',
          description: '발포 현상을 통한 효과적인 방염 성능 구현',
          features: ['10-100배 팽창', '다공성 탄화층', '열방출량 감소', '연기 발생 억제'],
          applications: ['목재 구조물', '합판', '직물', '건축물 내장재']
        },
        {
          code: 'HAF-775D',
          name: '발포형 방염도료 (고성능)',
          description: '향상된 성능의 고급형 발포 방염도료',
          features: ['20-50배 팽창', '견고한 탄화층', '개선된 발포 메커니즘'],
          applications: ['고성능 요구 구조물', '중요 시설물']
        },
        {
          code: 'CNF-300W',
          name: '투명 방염제',
          description: '투명성을 유지하면서 방염 성능을 제공',
          features: ['투명 도포', '미관 보존', '친환경 수성', '복합 난연 메커니즘'],
          applications: ['목재', '종이', '섬유류', '셀룰로스 기반 소재']
        }
      ]
    },
    'heat_reflecting': {
      name: '차열/단열 코팅제',
      color: 'bg-blue-600',
      icon: '❄️',
      products: [
        {
          code: 'HIC-035C',
          name: '차열 도료',
          description: '태양열 반사와 단열 성능을 동시에 제공',
          features: ['태양열 복사 반사', '열 전달 차단', '근적외선 반사', 'VOC 저방출'],
          applications: ['건축물 외벽', '지붕', '저장 탱크', '산업 시설']
        }
      ]
    },
    'thermal_dissipation': {
      name: '방열 코팅제',
      color: 'bg-gray-700',
      icon: '⚡',
      products: [
        {
          code: 'HE-860B',
          name: '내고온 방열 코팅제',
          description: '고온 환경에서의 효과적인 열 방출 솔루션',
          features: ['500-600°C 지속 사용', '높은 열전도율', '전기 절연성', '우수한 접착력'],
          applications: ['배터리 팩', '전력 전자 장치', 'LED 조명', '서버 센터']
        }
      ]
    },
    'inorganic_adhesives': {
      name: '무기계 접착제',
      color: 'bg-green-600',
      icon: '🔗',
      products: [
        {
          code: 'SMG-505Y',
          name: '무기계 접착제',
          description: '고온 환경용 무기계 접착 솔루션',
          features: ['800°C 이상 내열', '불연/준불연 등급', 'VOC 거의 없음', '유독가스 극소'],
          applications: ['내화벽돌 접착', '단열재 시공', '고온 설비 보수']
        }
      ]
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? Object.values(productCategories).flatMap(cat => cat.products.map(p => ({...p, category: cat.name})))
    : productCategories[selectedCategory]?.products.map(p => ({...p, category: productCategories[selectedCategory].name})) || [];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--hanmir-thermal-red)'}}>
            제품 카탈로그
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            한미르(주)의 다양한 기능성 코팅제 제품군을 확인하세요
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === 'all' 
                ? 'gradient-fire-shield text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            전체 제품
          </button>
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === key 
                  ? 'gradient-fire-shield text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white rounded-xl shadow-lg p-6 border border-gray-200 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-sm font-semibold rounded-full" style={{
                  backgroundColor: 'var(--hanmir-thermal-red)',
                  color: 'white'
                }}>
                  {product.code}
                </span>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3" style={{color: 'var(--hanmir-safety-blue)'}}>
                {product.name}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {product.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">주요 특징:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{product.features.length - 3}개 더
                    </span>
                  )}
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-700 mb-2">적용 분야:</h4>
                <div className="text-sm text-gray-600">
                  {product.applications.slice(0, 2).join(', ')}
                  {product.applications.length > 2 && ' 외'}
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button className="text-sm font-semibold" style={{color: 'var(--hanmir-thermal-red)'}}>
                  자세히 보기 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">선택한 카테고리에 제품이 없습니다.</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl max-h-[80vh] overflow-y-auto p-8 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{color: 'var(--hanmir-thermal-red)'}}>
                  {selectedProduct.name}
                </h2>
                <span className="px-4 py-2 text-sm font-semibold rounded-full" style={{
                  backgroundColor: 'var(--hanmir-safety-blue)',
                  color: 'white'
                }}>
                  {selectedProduct.code}
                </span>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--hanmir-safety-blue)'}}>
                  주요 특징
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--hanmir-thermal-red)'}}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--hanmir-safety-blue)'}}>
                  적용 분야
                </h3>
                <ul className="space-y-2">
                  {selectedProduct.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full" style={{backgroundColor: 'var(--hanmir-innovation-orange)'}}></span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <button className="gradient-fire-shield text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                문의하기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;