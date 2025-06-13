import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: '기술 소개', href: '#technology' },
    { name: '적용 분야', href: '#applications' },
    { name: '시뮬레이터', href: '#simulator' },
    { name: '지속가능성', href: '#sustainability' }
  ];

  const services = [
    { name: '불연 코팅제', href: '#' },
    { name: '방염 도료', href: '#' },
    { name: '에어로겔 패드', href: '#' },
    { name: '열교접착제', href: '#' }
  ];

  const industries = [
    { name: '국방/항공우주', href: '#' },
    { name: '조선/해양', href: '#' },
    { name: '2차 전지', href: '#' },
    { name: '건축/인프라', href: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <span className="text-2xl font-bold text-white">
                Advanced Materials
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              2009년부터 축적된 무기질 기반 불연 코팅제와 혁신적인 에어로겔 기술로 
              산업 안전성의 새로운 표준을 제시하는 첨단소재 전문기업입니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-500 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">빠른 링크</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">주요 제품</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">연락처</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-cyan-400 mr-3 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">서울특별시 강남구</p>
                  <p className="text-gray-300">테헤란로 123길 45</p>
                  <p className="text-gray-300">첨단소재빌딩 10층</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">📞</span>
                <p className="text-gray-300">+82-2-1234-5678</p>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">📧</span>
                <p className="text-gray-300">info@advancedmaterials.co.kr</p>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-400 mr-3">🌐</span>
                <p className="text-gray-300">www.advancedmaterials.co.kr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">적용 산업군</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {industries.map((industry, index) => (
              <a
                key={index}
                href={industry.href}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-gray-300 hover:text-cyan-400 transition-all duration-200 border border-gray-700 hover:border-cyan-400/50"
              >
                {industry.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              프로젝트 상담이 필요하신가요?
            </h3>
            <p className="text-gray-300 mb-6">
              전문가와 함께 최적의 소재 솔루션을 찾아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300">
                무료 상담 신청
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300">
                견적 요청
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Advanced Materials Co., Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                이용약관
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                품질보증서
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                사이트맵
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/10 to-blue-600/10"></div>
      </div>
    </footer>
  );
};

export default Footer;