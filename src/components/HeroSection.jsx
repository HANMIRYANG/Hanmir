import React, { useEffect, useRef } from 'react';
// import ParticleBackground from './ParticleBackground'; // 기존 애니메이션 주석 처리
import PaintDripBackground from './PaintDripBackground'; // 새로운 애니메이션 가져오기

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && window.innerWidth >= 768) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
          >
            <source src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAABNtZGF0AAACsQYF//+p3EXpwYmBASoiICAgoAAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAAAwAA=" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80"></div>
        </div>

        <div className="absolute inset-0 md:hidden">
          <div
              className="w-full h-full bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHN0eWxlPgpAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMDs3MDAnKTsKKiB7IGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmOyB9Cjwvc3R5bGU+CjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyRTdEMzI7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM3NDE1MTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8L3N2Zz4K')`
              }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-transparent to-gray-900/90"></div>
        </div>

        {/* 새로운 애니메이션 컴포넌트로 교체 */}
        <PaintDripBackground />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-teal-400 via-green-500 to-lime-500 bg-clip-text text-transparent">
            보이지 않는 기술이
          </span>
            <br />
            <span className="text-white">
            세상을 더 안전하고
          </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text text-transparent">
            지속가능하게 만듭니다
          </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            2009년부터 축적된 무기질 기반 불연 코팅제와 혁신적인 에어로겔 기술로<br />
            국방, 항공우주, 조선, 2차 전지 산업의 안전성을 혁신합니다
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' })}
            >
              🔬 가상 시뮬레이터 체험
            </button>
            <button
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-300"
                onClick={() => document.getElementById('technology').scrollIntoView({ behavior: 'smooth' })}
            >
              📋 기술 자료 보기
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-sky-400/20 to-blue-500/20 rounded-full animate-float-delay"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-lime-400/20 to-green-400/20 rounded-full animate-float-slow"></div>
      </section>
  );
};

export default HeroSection;