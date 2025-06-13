export const simulateEnvironment = (params) => {
  const { product, temperature, impact, environment } = params;

  // Base damage calculations
  let uncoatedDamage = 0;
  let coatedDamage = 0;

  // Temperature-based damage
  if (temperature > 500) {
    const tempFactor = (temperature - 500) / 1000;
    uncoatedDamage += Math.min(90, tempFactor * 100);
    coatedDamage += Math.min(15, tempFactor * 20);
  }

  // Impact-based damage
  if (impact > 30) {
    const impactFactor = (impact - 30) / 70;
    uncoatedDamage += Math.min(70, impactFactor * 80);
    coatedDamage += Math.min(8, impactFactor * 15);
  }

  // Environment-specific modifications
  switch (environment) {
    case 'extreme-heat':
      uncoatedDamage = Math.min(95, uncoatedDamage + 40);
      coatedDamage = Math.min(12, coatedDamage + 3);
      break;
    case 'extreme-cold':
      uncoatedDamage = Math.min(80, uncoatedDamage + 20);
      coatedDamage = Math.min(8, coatedDamage + 2);
      break;
    case 'high-impact':
      uncoatedDamage = Math.min(85, uncoatedDamage + 30);
      coatedDamage = Math.min(10, coatedDamage + 3);
      break;
    default:
      break;
  }

  // Product-specific adjustments
  const productMultipliers = {
    'aircraft-engine': { uncoated: 1.2, coated: 0.8 },
    'battery-pack': { uncoated: 1.1, coated: 0.7 },
    'ship-bulkhead': { uncoated: 1.0, coated: 0.9 },
    'building-panel': { uncoated: 0.9, coated: 0.8 }
  };

  const multiplier = productMultipliers[product] || { uncoated: 1.0, coated: 1.0 };
  uncoatedDamage = Math.min(100, Math.round(uncoatedDamage * multiplier.uncoated));
  coatedDamage = Math.min(25, Math.round(coatedDamage * multiplier.coated));

  // Ensure minimum values for demonstration
  uncoatedDamage = Math.max(25, uncoatedDamage);
  coatedDamage = Math.max(1, coatedDamage);

  // Calculate derived metrics
  const protectionRate = Math.round(((uncoatedDamage - coatedDamage) / uncoatedDamage) * 100);
  
  const getDurabilityRating = (damage) => {
    if (damage < 5) return '매우 우수';
    if (damage < 15) return '우수';
    if (damage < 30) return '보통';
    if (damage < 60) return '불량';
    return '매우 불량';
  };

  const getReliabilityRating = (protectionRate) => {
    if (protectionRate > 90) return '매우 높음';
    if (protectionRate > 80) return '높음';
    if (protectionRate > 70) return '보통';
    if (protectionRate > 50) return '낮음';
    return '매우 낮음';
  };

  return {
    uncoatedDamage,
    coatedDamage,
    protectionRate,
    durability: getDurabilityRating(coatedDamage),
    reliability: getReliabilityRating(protectionRate),
    timestamp: new Date().toISOString(),
    conditions: {
      product,
      temperature,
      impact,
      environment
    }
  };
};

export const getProductSpecs = (productType) => {
  const specs = {
    'aircraft-engine': {
      name: '항공기 엔진 부품',
      maxTemp: 1500,
      applications: ['터빈 블레이드', '연소실', '배기 시스템'],
      requirements: ['극고온 내열성', '경량화', '내부식성']
    },
    'battery-pack': {
      name: '전기차 배터리팩',
      maxTemp: 1000,
      applications: ['배터리 셀', '냉각 시스템', '보호 하우징'],
      requirements: ['열폭주 방지', '압축 복원력', '전기 절연성']
    },
    'ship-bulkhead': {
      name: '선박 격벽재',
      maxTemp: 800,
      applications: ['격벽', '데크', '상부구조'],
      requirements: ['내염성', 'IMO 규정 준수', '내구성']
    },
    'building-panel': {
      name: '건축 외장재',
      maxTemp: 600,
      applications: ['외벽 패널', '내장재', '방화벽'],
      requirements: ['건축법 준수', '시공성', '미관']
    }
  };

  return specs[productType] || specs['aircraft-engine'];
};

export const calculatePerformanceScore = (results) => {
  const protectionScore = (results.protectionRate / 100) * 40;
  const durabilityScore = results.coatedDamage < 5 ? 30 : 
                         results.coatedDamage < 15 ? 25 : 
                         results.coatedDamage < 30 ? 20 : 10;
  const reliabilityScore = results.protectionRate > 90 ? 30 : 
                          results.protectionRate > 80 ? 25 : 
                          results.protectionRate > 70 ? 20 : 10;

  return Math.round(protectionScore + durabilityScore + reliabilityScore);
};