import React, { useState, useEffect } from 'react';

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 새로운 메뉴 구조 정의
  const navItems = [
    {
      name: '회사소개',
      href: '#technology', // 각 섹션 ID에 맞게 수정 가능
      dropdown: [
        { name: 'CEO인사말', href: '#ceo-greeting' },
        { name: '사업연혁', href: '#history' },
        { name: '사업비전', href: '#vision' },
        { name: '조직도', href: '#organization' },
        { name: '복지제도', href: '#welfare' },
        { name: '회사전경', href: '#gallery' },
        { name: '오시는길', href: '#location' },
      ]
    },
    {
      name: '제품소개',
      href: '#applications',
      dropdown: [
        { name: 'Fire Safety Solution', href: '#products-fire-safety' },
        { name: 'Energy Saving', href: '#products-energy-saving' },
        { name: 'Eco Friendly', href: '#products-eco-friendly' },
      ]
    },
    { name: '홍보센터', href: '#simulator' },
    {
      name: '자료실',
      href: '#sustainability',
      dropdown: [
        { name: '특허', href: '#data-patents' },
        { name: '시험성적서', href: '#data-reports' },
        { name: '인증서', href: '#data-certs' },
        { name: '방염형식 승인서', href: '#data-approvals' },
        { name: '관련법규', href: '#data-regulations' },
      ]
    },
    { name: '채용안내', href: '#contact' },
    { name: '게시판',
      href: '#contact',
      dropdown: [
        { name: '견적 문의', href: '#quote-inquiry' },
        { name: '솔루션 문의', href: '#solution-inquiry' },
  ]
    }
    ];

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
          }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold text-white">
              한미르(주)
            </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                      onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                  >
                    <a
                        href={item.href}
                        className="text-gray-300 hover:text-[var(--hanmir-accent-blue)] transition-colors duration-200 font-medium flex items-center gap-1"
                    >
                      {item.name}
                      {/* 요청에 따라 드롭다운 화살표 아이콘 제거 */}
                    </a>

                    {/* Dropdown Menu */}
                    {item.dropdown && openDropdown === item.name && (
                        <div
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-800/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 overflow-hidden"
                        >
                          <div className="flex flex-col p-2">
                            {item.dropdown.map((dropdownItem) => (
                                <a
                                    key={dropdownItem.name}
                                    href={dropdownItem.href}
                                    className="px-4 py-2 text-gray-300 hover:bg-green-500/10 hover:text-[var(--hanmir-accent-blue)] rounded-md transition-all duration-200 text-sm"
                                >
                                  {dropdownItem.name}
                                </a>
                            ))}
                          </div>
                        </div>
                    )}
                  </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden w-6 h-6 flex flex-col justify-center items-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="pt-4 pb-2 space-y-2">
              {navItems.map((item) => (
                  <a
                      key={item.name}
                      href={item.href || '#'}
                      className="block px-3 py-2 text-gray-300 hover:text-[var(--hanmir-accent-blue)] hover:bg-gray-800 rounded-md transition-colors duration-200"
                      onClick={() => {
                        if (!item.dropdown) setMobileMenuOpen(false);
                      }}
                  >
                    {item.name}
                  </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Header;