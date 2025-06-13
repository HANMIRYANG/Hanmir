import React, { useState, useRef, useEffect } from 'react';
import { simulateEnvironment } from '../utils/simulatorLogic';

const SimulatorSection = () => {
  const [selectedProduct, setSelectedProduct] = useState('aircraft-engine');
  const [temperature, setTemperature] = useState(1000);
  const [impact, setImpact] = useState(50);
  const [environment, setEnvironment] = useState('normal');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const products = [
    { value: 'aircraft-engine', label: '항공기 엔진 부품', maxTemp: 1500 },
    { value: 'battery-pack', label: '전기차 배터리팩', maxTemp: 1000 },
    { value: 'ship-bulkhead', label: '선박 격벽재', maxTemp: 800 },
    { value: 'building-panel', label: '건축 외장재', maxTemp: 600 }
  ];

  const environments = [
    { value: 'normal', label: '표준 환경', description: '일반적인 온도와 습도' },
    { value: 'extreme-heat', label: '극고온', description: '1500°C 화염 환경' },
    { value: 'extreme-cold', label: '극저온', description: '-200°C 극한 환경' },
    { value: 'high-impact', label: '강한 충격', description: '고속 충돌 시뮬레이션' }
  ];

  const selectedProductData = products.find(p => p.value === selectedProduct);

  useEffect(() => {
    if (canvasRef.current && simulationResults) {
      drawSimulation();
    }
  }, [simulationResults]);

  const drawSimulation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1f2937');
    gradient.addColorStop(1, '#111827');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Draw comparison boxes
    const boxWidth = width * 0.35;
    const boxHeight = height * 0.6;
    const boxY = height * 0.2;

    // Without coating (left)
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(width * 0.1, boxY, boxWidth, boxHeight);
    ctx.fillStyle = '#ffffff';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('코팅 미적용', width * 0.275, boxY - 10);

    // With coating (right)
    ctx.fillStyle = '#10b981';
    ctx.fillRect(width * 0.55, boxY, boxWidth, boxHeight);
    ctx.fillText('코팅 적용', width * 0.725, boxY - 10);

    // Draw damage effects based on simulation results
    if (simulationResults) {
      // Damage on uncoated material
      ctx.fillStyle = '#7f1d1d';
      const damageHeight = boxHeight * (simulationResults.uncoatedDamage / 100);
      ctx.fillRect(width * 0.1, boxY + boxHeight - damageHeight, boxWidth, damageHeight);

      // Minimal damage on coated material
      ctx.fillStyle = '#064e3b';
      const protectedDamageHeight = boxHeight * (simulationResults.coatedDamage / 100);
      ctx.fillRect(width * 0.55, boxY + boxHeight - protectedDamageHeight, boxWidth, protectedDamageHeight);

      // Draw temperature indicators
      ctx.fillStyle = '#f59e0b';
      ctx.font = '14px Arial';
      ctx.fillText(`손상률: ${simulationResults.uncoatedDamage}%`, width * 0.275, boxY + boxHeight + 30);
      ctx.fillText(`손상률: ${simulationResults.coatedDamage}%`, width * 0.725, boxY + boxHeight + 30);
    }

    // Draw flame/impact effects
    if (isSimulating) {
      drawEffects(ctx, width, height);
    }
  };

  const drawEffects = (ctx, width, height) => {
    // Draw flame effect
    if (environment === 'extreme-heat' || temperature > 800) {
      ctx.fillStyle = '#f97316';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = height * 0.1 + Math.random() * height * 0.3;
        const size = Math.random() * 10 + 5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw impact lines
    if (environment === 'high-impact' || impact > 70) {
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.random() * 50 - 25, y + Math.random() * 50 - 25);
        ctx.stroke();
      }
    }
  };

  const runSimulation = async () => {
    setIsSimulating(true);
    setSimulationResults(null);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    const results = simulateEnvironment({
      product: selectedProduct,
      temperature,
      impact,
      environment
    });

    setSimulationResults(results);
    setIsSimulating(false);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimulationResults(null);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <section id="simulator" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              가상 극한 환경 시뮬레이터
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            다양한 극한 환경에서 당사 코팅 기술의 성능을 직접 체험해보세요
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Control Panel */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">시뮬레이션 설정</h3>
              
              {/* Product Selection */}
              <div className="mb-6">
                <label className="block text-cyan-400 font-medium mb-3">제품 선택</label>
                <select 
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-cyan-400 focus:outline-none"
                >
                  {products.map(product => (
                    <option key={product.value} value={product.value}>
                      {product.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Temperature Control */}
              <div className="mb-6">
                <label className="block text-cyan-400 font-medium mb-3">
                  온도 설정: {temperature}°C
                </label>
                <input
                  type="range"
                  min="0"
                  max={selectedProductData?.maxTemp || 1500}
                  value={temperature}
                  onChange={(e) => setTemperature(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>0°C</span>
                  <span>{selectedProductData?.maxTemp}°C</span>
                </div>
              </div>

              {/* Impact Control */}
              <div className="mb-6">
                <label className="block text-cyan-400 font-medium mb-3">
                  충격 강도: {impact}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={impact}
                  onChange={(e) => setImpact(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>약함</span>
                  <span>강함</span>
                </div>
              </div>

              {/* Environment Selection */}
              <div className="mb-8">
                <label className="block text-cyan-400 font-medium mb-3">환경 조건</label>
                <div className="grid grid-cols-2 gap-3">
                  {environments.map(env => (
                    <button
                      key={env.value}
                      onClick={() => setEnvironment(env.value)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        environment === env.value
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="font-semibold">{env.label}</div>
                      <div className="text-xs opacity-80">{env.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {isSimulating ? '시뮬레이션 중...' : '시뮬레이션 시작'}
                </button>
                <button
                  onClick={resetSimulation}
                  className="px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg transition-all duration-300"
                >
                  초기화
                </button>
              </div>
            </div>

            {/* Visualization Area */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">시뮬레이션 결과</h3>
              
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={500}
                  height={400}
                  className="w-full h-auto bg-gray-800 rounded-lg border border-gray-600"
                />
                
                {isSimulating && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 rounded-lg">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                      <p className="text-cyan-400 font-medium">시뮬레이션 진행 중...</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Results Display */}
              {simulationResults && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">코팅 미적용</h4>
                    <p className="text-white text-2xl font-bold">{simulationResults.uncoatedDamage}%</p>
                    <p className="text-red-300 text-sm">손상률</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-400 font-semibold mb-2">코팅 적용</h4>
                    <p className="text-white text-2xl font-bold">{simulationResults.coatedDamage}%</p>
                    <p className="text-green-300 text-sm">손상률</p>
                  </div>
                </div>
              )}

              {/* Performance Metrics */}
              {simulationResults && (
                <div className="mt-6 bg-gray-800 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-semibold mb-3">성능 지표</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">보호 효과</span>
                      <span className="text-green-400 font-semibold">
                        {simulationResults.protectionRate}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">내구성</span>
                      <span className="text-blue-400 font-semibold">
                        {simulationResults.durability}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">신뢰도</span>
                      <span className="text-purple-400 font-semibold">
                        {simulationResults.reliability}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Notice */}
          <div className="mt-8 lg:hidden bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-300 text-sm text-center">
              💡 모바일에서는 간소화된 시뮬레이션이 제공됩니다. 
              완전한 3D 시뮬레이션은 데스크톱에서 이용해주세요.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #06b6d4;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
};

export default SimulatorSection;