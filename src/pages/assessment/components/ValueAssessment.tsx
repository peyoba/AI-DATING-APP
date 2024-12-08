import React from 'react';
import styles from '../styles/ValueAssessment.module.css';

const ValueAssessment: React.FC = () => {
  const values = [
    {
      category: '家庭观',
      items: [
        { name: '家庭责任', score: 90 },
        { name: '亲子关系', score: 85 },
        { name: '婚姻期待', score: 80 }
      ]
    },
    {
      category: '事业观',
      items: [
        { name: '职业发展', score: 85 },
        { name: '工作与生活平衡', score: 75 },
        { name: '个人成就', score: 80 }
      ]
    },
    {
      category: '生活观',
      items: [
        { name: '生活品质', score: 85 },
        { name: '休闲方式', score: 70 },
        { name: '消费习惯', score: 75 }
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <h2>价值观测评</h2>
      <div className={styles.description}>
        <p>深入分析您的核心价值观念和生活态度</p>
      </div>

      <div className={styles.valuesContainer}>
        {values.map((category) => (
          <div key={category.category} className={styles.categoryCard}>
            <h3>{category.category}</h3>
            <div className={styles.itemsGrid}>
              {category.items.map((item) => (
                <div key={item.name} className={styles.valueItem}>
                  <div className={styles.itemHeader}>
                    <span>{item.name}</span>
                    <span className={styles.score}>{item.score}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progress}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.analysis}>
        <h3>价值观分析</h3>
        <p>
          您的价值观体系较为完整,特别注重家庭和事业的平衡发展。在家庭观方面,
          您对家庭责任和亲子关系有较高的重视度。在事业发展上,您追求个人成就的
          同时也注重工作与生活的平衡。生活品质和休闲方式的选择显示出您是一个
          懂得享受生活的人。
        </p>
        <div className={styles.compatibility}>
          <h4>匹配建议</h4>
          <ul>
            <li>寻找同样重视家庭的伴侣</li>
            <li>与理解工作与生活平衡重要性的人更容易相处</li>
            <li>在生活方式上寻找有共同追求的伴侣</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValueAssessment; 