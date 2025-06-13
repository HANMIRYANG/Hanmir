import React from 'react';

const SustainabilitySection = () => {
  const esgMetrics = [
    {
      category: 'Environmental',
      title: '환경 보호',
      icon: '🌱',
      metrics: [
        { label: 'CO₂ 배출 감소', value: '65%', color: 'text-green-400' },
        { label: '에너지 절약', value: '90%', color: 'text-green-400' },
        { label: '재활용 소재 사용', value: '75%', color: 'text-green-400' },
        { label: '폐기물 감소', value: '80%', color: 'text-green-400' }
      ],
      description: '친환경 소재와 제조 공정을 통해 환경 부담을 최소화합니다.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      category: 'Social',
      title: '사회적 책임',
      icon: '🤝',
      metrics: [
        { label: '안전성 향상', value: '95%', color: 'text-blue-400' },
        { label: '화재 예방', value: '99%', color: 'text-blue-400' },
        { label: '인명 보호', value: '100%', color: 'text-blue-400' },
        { label: '품질 신뢰도', value: '98%', color: 'text-blue-400' }
      ],
      description: '인간의 생명과 안전을 최우선으로 하는 기술을 개발합니다.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'Governance',
      title: '지배구조',
      icon: '⚖️',
      metrics: [
        { label: 'R&D 투자율', value: '15%', color: 'text-purple-400' },
        { label: '품질 인증', value: '100%', color: 'text-purple-400' },
        { label: '투명성 지수', value: '92%', color: 'text-purple-400' },
        { label: '혁신 지수', value: '88%', color: 'text-purple-400' }
      ],
      description: '투명하고 책임감 있는 경영으로 지속가능한 성장을 추구합니다.',
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  const impactAreas = [
    {
      title: '기후변화 대응',
      description: '에너지 효율적인 소재로 탄소 배출량을 대폭 감소시킵니다.',
      icon: '🌍',
      benefits: [
        '건물 에너지 손실 90% 감소',
        '냉난방비 절약으로 CO₂ 감축',
        '재생에너지 효율성 향상',
        '지속가능한 도시 개발 기여'
      ]
    },
    {
      title: '산업 안전성 향상',
      description: '화재와 폭발 위험을 근본적으로 차단하여 안전한 작업환경을 조성합니다.',
      icon: '🔥',
      benefits: [
        '산업재해 예방',
        '작업자 안전 보장',
        '자산 보호 효과',
        '보험료 절감'
      ]
    },
    {
      title: '순환경제 구축',
      description: '재활용 가능한 소재와 장기 내구성으로 지속가능한 경제를 만듭니다.',
      icon: '♻️',
      benefits: [
        '제품 수명 연장',
        '폐기물 최소화',
        '자원 효율성 극대화',
        '경제적 가치 창출'
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 14001', description: '환경경영시스템' },
    { name: 'ISO 45001', description: '안전보건경영시스템' },
    { name: 'Green Building', description: '친환경 건축자재 인증' },
    { name: 'Carbon Neutral', description: '탄소중립 인증' }
  ];

  return (
    <section id="sustainability" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
              지속가능한 미래를 위한 ESG
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            환경 보호, 사회적 책임, 투명한 지배구조를 통해 
            더 나은 세상을 만드는 기술 혁신을 추구합니다
          </p>
        </div>

        {/* ESG Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {esgMetrics.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium uppercase tracking-wider">
                      {category.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Metrics */}
                <div className="space-y-4">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">{metric.label}</span>
                      <span className={`font-bold text-lg ${metric.color}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              환경 및 사회적 영향
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">{area.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3 text-center">
                  {area.title}
                </h4>
                <p className="text-gray-300 mb-6 text-center text-sm">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Stats */}
        <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-2xl p-8 border border-green-500/20 mb-20">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            환경 보호 성과
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1,250', unit: '톤', label: 'CO₂ 감축량' },
              { number: '850', unit: 'MWh', label: '에너지 절약량' },
              { number: '15', unit: '개', label: '친환경 인증' },
              { number: '99.8', unit: '%', label: '재활용률' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                  <span className="text-lg">{stat.unit}</span>
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">인증 및 표준</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              지속가능한 파트너십을 시작하세요
            </h3>
            <p className="text-gray-300 mb-6">
              ESG 가치를 공유하는 기업과 함께 더 나은 미래를 만들어갑니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                지속가능성 보고서 다운로드
              </button>
              <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                ESG 파트너십 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;