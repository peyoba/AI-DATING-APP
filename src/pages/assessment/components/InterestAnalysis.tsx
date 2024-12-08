import React from 'react';
import styles from '../styles/InterestAnalysis.module.css';

const InterestAnalysis: React.FC = () => {
  const interests = [
    {
      category: '文化艺术',
      items: [
        { name: '音乐', level: 85 },
        { name: '电影', level: 90 },
        { name: '文学', level: 75 },
        { name: '艺术', level: 70 }
      ]
    },
    {
      category: '运动健身',
      items: [
        { name: '健身', level: 80 },
        { name: '瑜伽', level: 65 },
        { name: '游泳', level: 70 },
        { name: '户外运动', level: 85 }
      ]
    },
    {
      category: '休闲娱乐',
      items: [
        { name: '美食', level: 95 },
        { name: '旅行', level: 90 },
        { name: '摄影', level: 75 },
        { name: '游戏', level: 80 }
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <h2>兴趣爱好分析</h2>
      <div className={styles.description}>
        <p>探索您的兴趣爱好分布,寻找志同道合的伴侣</p>
      </div>

      <div className={styles.interestsGrid}>
        {interests.map((category) => (
          <div key={category.category} className={styles.categoryCard}>
            <h3>{category.category}</h3>
            <div className={styles.interestItems}>
              {category.items.map((item) => (
                <div key={item.name} className={styles.interestItem}>
                  <div className={styles.itemHeader}>
                    <span>{item.name}</span>
                    <span className={styles.level}>{item.level}%</span>
                  </div>
                  <div className={styles.levelBar}>
                    <div 
                      className={styles.levelProgress}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.analysis}>
        <h3>兴趣分析</h3>
        <p>
          您的兴趣爱好丰富多样,在文化艺术、运动健身和休闲娱乐等方面都表现出较高的参与度。
          特别是在美食、旅行和电影方面表现出浓厚的兴趣,这些都是很好的社交话题和约会活动选择。
          您对运动健身的关注也显示出对健康生活方式的重视。
        </p>
        <div className={styles.suggestions}>
          <h4>匹配建议</h4>
          <ul>
            <li>寻找对文化艺术同样感兴趣的伴侣,可以一起享受艺术活动</li>
            <li>与热爱运动的人更容易培养共同爱好</li>
            <li>美食和旅行爱好者可以创造更多共同体验</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InterestAnalysis; 