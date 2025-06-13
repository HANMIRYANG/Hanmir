import React from 'react';

const ApplicationsSection = () => {
  const applications = [
    {
      title: '국방 & 항공우주',
      subtitle: 'Defense & Aerospace',
      description: '극한 환경에서의 안전성과 신뢰성이 생명인 국방 및 항공우주 분야에 최적화된 소재 솔루션',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFmMmEzNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDE1MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPjxwYXRoIGQ9Ik0yMDAgNTBMMzUwIDE1MEwyMDAgMjUwTDUwIDE1MFoiIGZpbGw9IiM2MzY2ZjEiIG9wYWNpdHk9IjAuMyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYzlkMWQ5IiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiPuKciO+4jzwvdGV4dD48L3N2Zz4=',
      applications: [
        '항공기 엔진 코팅',
        '미사일 방열판',
        '우주선 단열재',
        '군용 차량 보호재'
      ],
      benefits: [
        '극고온 내열성',
        '경량화 실현',
        '장기 신뢰성',
        '규정 준수'
      ],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: '조선 & 해양플랜트',
      subtitle: 'Shipbuilding & Marine',
      description: '해양의 혹독한 환경과 염분 부식에 강한 고성능 방염 및 방부 코팅 시스템',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMiIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFmMmEzNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDE1MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQyKSIvPjxwYXRoIGQ9Ik01MCAyMDBMMTUwIDEwMEwzNTAgMTAwTDM1MCAyMDBMMjAwIDI1MEw1MCAyMDBaIiBmaWxsPSIjMTQ5MWEzIiBvcGFjaXR5PSIwLjMiLz48dGV4dCB4PSIyMDAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2M5ZDFkOSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj7imYc8L3RleHQ+PC9zdmc+',
      applications: [
        'LNG 운반선 단열',
        '해양구조물 방염',
        '선박 격벽 코팅',
        '해저 파이프라인'
      ],
      benefits: [
        '내염성 우수',
        'IMO 인증',
        '장기 내구성',
        '환경 친화적'
      ],
      gradient: 'from-cyan-500 to-teal-600'
    },
    {
      title: '2차 전지',
      subtitle: 'Battery Systems',
      description: '전기차 배터리 열폭주 방지를 위한 에어로겔 기반 준불연 면압패드 기술',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkMyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFmMmEzNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDE1MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQzKSIvPjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC4zIiByeD0iMTAiLz48dGV4dCB4PSIyMDAiIHk9IjE2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2M5ZDFkOSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIj7wn5SOPC90ZXh0Pjwvc3ZnPg==',
      applications: [
        '배터리 팩 보호',
        '열폭주 차단',
        'ESS 안전성',
        '충전 인프라'
      ],
      benefits: [
        '1000°C 내열',
        '초경량 설계',
        '압축 복원력',
        '친환경 소재'
      ],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: '건축 & 인프라',
      subtitle: 'Construction & Infrastructure',
      description: '화재 안전 규정을 만족하는 불연/준불연 건축 내외장재 및 구조재 솔루션',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkNCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFmMmEzNyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDE1MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2dyYWQ0KSIvPjxyZWN0IHg9IjUwIiB5PSIxNTAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNlYTU4MDYiIG9wYWNpdHk9IjAuMyIvPjxyZWN0IHg9IjE2MCIgeT0iMTAwIiB3aWR0aD0iODAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZWE1ODA2IiBvcGFjaXR5PSIwLjMiLz48cmVjdCB4PSIyNzAiIHk9IjEyNSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjEyNSIgZmlsbD0iI2VhNTgwNiIgb3BhY2l0eT0iMC4zIi8+PHRleHQgeD0iMjAwIiB5PSIyNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNjOWQxZDkiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCI+8J+PoTwvdGV4dD48L3N2Zz4=',
      applications: [
        '고층빌딩 외장재',
        '터널 방화벽',
        '공항 시설재',
        '산업플랜트'
      ],
      benefits: [
        '법적 기준 만족',
        '시공 편의성',
        '미관 우수성',
        '유지보수 간편'
      ],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              산업별 적용 분야
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            다양한 산업 분야의 특수한 요구사항에 맞춘 
            맞춤형 소재 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} opacity-10`}></div>
              </div>

              <div className="relative z-10 p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {app.title}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium mb-4 uppercase tracking-wider">
                      {app.subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {app.description}
                    </p>

                    {/* Applications & Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">적용 제품</h4>
                        <ul className="space-y-2">
                          {app.applications.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3">핵심 장점</h4>
                        <ul className="space-y-2">
                          {app.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 text-sm">
                      사례 연구 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              맞춤형 솔루션이 필요하신가요?
            </h3>
            <p className="text-gray-300 mb-6">
              귀하의 프로젝트에 최적화된 소재 솔루션을 제안해 드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                전문가 상담 신청
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                기술 자료 다운로드
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;