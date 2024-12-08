import React from 'react';
import styles from '../styles/LifestyleEvaluation.module.css';

const LifestyleEvaluation: React.FC = () => {
  const lifestyleData = [
    {
      category: '作息规律',
      items: [
        { name: '睡眠质量', score: 85, description: '规律的睡眠时间,充足的休息' },
        { name: '工作节奏', score: 75, description: '工作时间适中,注意劳逸结合' },
        { name: '生活规划', score: 80, description: '合理安排时间,生活有序' }
      ]
    },
    {
      category: '生活习惯',
      items: [
        { name: '饮食习惯', score: 90, description: '注重营养均衡,定时用餐' },
        { name: '运动习惯', score: 70, description: '保持适度运动,但可以更规律' },
        { name: '社交活动', score: 85, description: '保持良好的社交圈,积极参与活动' }
      ]
    },
    {
      category: '生活态度',
      items: [
        { name: '积极乐观', score: 95, description: '保持乐观开朗的心态' },
        { name: '责任心', score: 90, description: '对生活和工作富有责任感' },
        { name: '进取心', score: 85, description: '有上进心,愿意不断提升自我' }
      ]
    },
    {
      category: '消费观念',
      items: [
        { name: '理财意识', score: 80, description: '有理财规划,注重未来投资' },
        { name: '消费习惯', score: 85, description: '理性消费,适度享受生活' },
        { name: '资源利用', score: 75, description: '注意资源合理利用,避免浪费' }
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <h2>生活方式评估</h2>
      <div className={styles.description}>
        <p>全方位评估您的生活方式,帮助寻找生活理念相近的伴侣</p>
      </div>

      <div className={styles.lifestyleGrid}>
        {lifestyleData.map((category) => (
          <div key={category.category} className={styles.categoryCard}>
            <h3>{category.category}</h3>
            <div className={styles.items}>
              {category.items.map((item) => (
                <div key={item.name} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemTitle}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.score}>{item.score}%</span>
                    </div>
                    <div className={styles.scoreBar}>
                      <div 
                        className={styles.scoreProgress}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.analysis}>
        <h3>生活方式分析</h3>
        <p>
          您的生活方式整体表现良好,展现出积极向上的生活态度。在作息规律方面保持着健康的
          节奏,这有助于维持良好的身心状态。生活习惯方面注重健康,但在运动的规律性上还可
          以进一步提升。您乐观开朗的生活态度和负责任的处事方式是很大的优点。在消费观念
          上展现出成熟的理财意识和理性的消费习惯。
        </p>
        <div className={styles.suggestions}>
          <h4>改善建议</h4>
          <ul>
            <li>可以制定更规律的运动计划,培养运动习惯</li>
            <li>在工作节奏上可以适当调整,确保充足的休息时间</li>
            <li>可以进一步完善理财规划,为未来生活做好准备</li>
          </ul>
        </div>
        <div className={styles.matchingTips}>
          <h4>匹配建议</h4>
          <ul>
            <li>寻找同样注重生活质量的伴侣,能够共同维持健康的生活方式</li>
            <li>与具有相似消费观念的人更容易在未来生活中达成共识</li>
            <li>积极乐观的生活态度有助于吸引志同道合的伴侣</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LifestyleEvaluation; 