import React from 'react';

const TechnologySection = () => {
  const technologies = [
    {
      title: '열 제어 기술',
      subtitle: 'Thermal Control',
      description: '극한 온도 환경에서도 안정적인 성능을 보장하는 첨단 열 관리 솔루션',
      features: [
        '1500°C 초고온 내열성',
        '급격한 온도 변화 대응',
        '열 전도율 최적화',
        '에너지 효율 극대화'
      ],
      icon: '🔥',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: '화재 안전 기술',
      subtitle: 'Fire Safety',
      description: '혁신적인 불연 코팅제로 화재 위험을 근본적으로 차단하는 보호 기술',
      features: [
        '완전 불연 특성 구현',
        '유독가스 발생 억제',
        '자기소화 기능',
        '장기간 내구성 보장'
      ],
      icon: '🛡️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: '에너지 효율 기술',
      subtitle: 'Energy Efficiency',
      description: '에어로겔 기반 고성능 단열재로 에너지 손실을 최소화하는 친환경 기술',
      features: [
        '초경량 단열 성능',
        '에너지 손실 90% 감소',
        '친환경 소재 사용',
        '장수명 설계'
      ],
      icon: '⚡',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              핵심 기술 플랫폼
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            20년간 축적된 연구개발 노하우와 혁신적인 소재 기술로 
            산업 안전성의 새로운 표준을 제시합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  {tech.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center group-hover:translate-x-2 transition-transform duration-300">
                  자세히 보기
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '1500°C', label: '최대 내열온도' },
            { number: '90%', label: '에너지 절약율' },
            { number: '20+', label: '개발 연수' },
            { number: '100+', label: '적용 프로젝트' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;