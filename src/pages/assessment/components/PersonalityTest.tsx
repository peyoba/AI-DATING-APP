import React from 'react';
import styles from '../styles/PersonalityTest.module.css';

const PersonalityTest: React.FC = () => {
  const personalityTraits = [
    { name: '外向性', score: 75 },
    { name: '开放性', score: 85 },
    { name: '尽责性', score: 80 },
    { name: '宜人性', score: 70 },
    { name: '情绪稳定性', score: 65 }
  ];

  return (
    <section className={styles.section}>
      <h2>性格测试分析</h2>
      <div className={styles.description}>
        <p>基于大五人格模型(OCEAN)的性格特质分析</p>
      </div>
      
      <div className={styles.traitsContainer}>
        {personalityTraits.map((trait) => (
          <div key={trait.name} className={styles.traitItem}>
            <div className={styles.traitHeader}>
              <span className={styles.traitName}>{trait.name}</span>
              <span className={styles.traitScore}>{trait.score}%</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progress}
                style={{ width: `${trait.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.analysis}>
        <h3>性格特点总结</h3>
        <p>
          您是一个外向开放的人,善于与人交往。同时具有较强的责任心和同理心,
          能够很好地处理人际关系。在情绪管理方面有一定提升空间。
        </p>
        <div className={styles.suggestions}>
          <h4>建议</h4>
          <ul>
            <li>可以尝试冥想或瑜伽来提高情绪稳定性</li>
            <li>充分发挥外向开放的特点,积极参与社交活动</li>
            <li>保持良好的时间管理习惯,发挥尽责的优势</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PersonalityTest; 