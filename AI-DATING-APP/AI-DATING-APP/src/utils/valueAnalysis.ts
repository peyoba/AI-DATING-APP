interface ValueScore {
  family: number;
  career: number;
  lifestyle: number;
  growth: number;
  social: number;
}

export const calculateValueCompatibility = (
  userValues: ValueScore,
  partnerValues: ValueScore
): number => {
  const weights = {
    family: 0.3,
    career: 0.2,
    lifestyle: 0.2,
    growth: 0.15,
    social: 0.15
  };

  let totalScore = 0;
  let totalWeight = 0;

  Object.entries(weights).forEach(([key, weight]) => {
    const diff = Math.abs(
      userValues[key as keyof ValueScore] - 
      partnerValues[key as keyof ValueScore]
    );
    
    // 差异越小,得分越高
    const score = 100 - (diff * 2);
    totalScore += score * weight;
    totalWeight += weight;
  });

  return Math.round(totalScore / totalWeight);
};

export const generateValueAdvice = (
  compatibility: number,
  userValues: ValueScore,
  partnerValues: ValueScore
): string[] => {
  const advice: string[] = [];

  if (compatibility >= 80) {
    advice.push('您们的价值观高度契合,这是维持长期关系的重要基础');
  } else if (compatibility >= 60) {
    advice.push('您们的价值观基本匹配,通过沟通可以更好地理解彼此');
  } else {
    advice.push('您们在一些关键价值观上存在差异,需要更多沟通和包容');
  }

  // 分析具体差异并给出建议
  Object.entries(userValues).forEach(([key, value]) => {
    const diff = Math.abs(value - partnerValues[key as keyof ValueScore]);
    if (diff > 20) {
      switch(key) {
        case 'family':
          advice.push('在家庭观念上存在一定差异,建议深入交流彼此的期望');
          break;
        case 'career':
          advice.push('在事业发展理念上有所不同,可以相互支持各自的职业规划');
          break;
        // ... 其他维度的建议
      }
    }
  });

  return advice;
}; 