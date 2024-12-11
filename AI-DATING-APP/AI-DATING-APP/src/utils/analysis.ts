// 性格特质评分计算
export const calculatePersonalityScore = (answers: Record<string, number>) => {
  const traits = {
    extraversion: 0,
    openness: 0, 
    conscientiousness: 0,
    agreeableness: 0,
    neuroticism: 0
  };

  // 计算各维度得分
  Object.entries(answers).forEach(([key, value]) => {
    if (key.startsWith('E')) traits.extraversion += value;
    if (key.startsWith('O')) traits.openness += value;
    if (key.startsWith('C')) traits.conscientiousness += value;
    if (key.startsWith('A')) traits.agreeableness += value;
    if (key.startsWith('N')) traits.neuroticism += value;
  });

  // 标准化得分
  Object.keys(traits).forEach(key => {
    traits[key as keyof typeof traits] = Math.round(
      (traits[key as keyof typeof traits] / 20) * 100
    );
  });

  return traits;
};

// 生成个性化建议
export const generatePersonalityAdvice = (traits: Record<string, number>) => {
  const advice: string[] = [];
  
  if (traits.extraversion > 80) {
    advice.push('您是一个外向开朗的人,建议寻找能与您分享社交活动的伴侣');
  }
  
  if (traits.openness > 80) {
    advice.push('您思维开放,富有创造力,适合找寻同样具有探索精神的伴侣');
  }

  // ... 其他特质建议

  return advice;
}; 