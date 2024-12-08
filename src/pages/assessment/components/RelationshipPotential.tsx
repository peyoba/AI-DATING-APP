import React from 'react';
import styles from '../styles/RelationshipPotential.module.css';

const RelationshipPotential: React.FC = () => {
  const potentialScores = [
    { name: '性格契合度', score: 85 },
    { name: '价值观一致性', score: 90 },
    { name: '兴趣相似度', score: 80 },
    { name: '生活方式匹配度', score: 85 },
    { name: '沟通能力', score: 88 },
    { name: '情感成熟度', score: 82 }
  ];

  const advantages = [
    '性格特质互补,能够相互理解和包容',
    '核心价值观高度一致,有利于长期关系发展',
    '有共同的兴趣爱好,易于培养共同话题',
    '生活习惯相近,减少日常摩擦',
    '良好的沟通基础,有助于解决问题'
  ];

  const challenges = [
    '工作时间安排可能需要更好的协调',
    '在理财观念上可能需要更多沟通',
    '对未来规划的细节需要进一步讨论'
  ];

  const suggestions = [
    '建议多创造共处时光,增进了解',
    '可以一起制定未来计划,明确共同目标',
    '保持开放和诚实的沟通态度',
    '学习对方的处事方式,互相适应',
    '共同参与有意义的活动,培养感情'
  ];

  return (
    <section className={styles.section}>
      <h2>关系发展潜力分析</h2>
      <div className={styles.description}>
        <p>基于您的测评结果,分析未来关系发展的潜力</p>
      </div>

      <div className={styles.potentialGrid}>
        <div className={styles.scoreCard}>
          <h3>匹配度评分</h3>
          <div className={styles.scores}>
            {potentialScores.map((item) => (
              <div key={item.name} className={styles.scoreItem}>
                <div className={styles.scoreHeader}>
                  <span>{item.name}</span>
                  <span className={styles.score}>{item.score}%</span>
                </div>
                <div className={styles.scoreBar}>
                  <div 
                    className={styles.scoreProgress}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.analysisCard}>
          <h3>总体分析</h3>
          <p>
            根据综合评估结果显示,您的关系发展潜力较高。在性格特质、价值观和生活方式等
            多个维度都展现出良好的匹配度。特别是在价值观一致��和沟通能力方面表现突出,
            这为建立长期稳定的关系奠定了良好基础。
          </p>
        </div>
      </div>

      <div className={styles.detailsGrid}>
        <div className={styles.advantagesCard}>
          <h3>发展优势</h3>
          <ul>
            {advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.challengesCard}>
          <h3>潜在挑战</h3>
          <ul>
            {challenges.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.suggestionsCard}>
          <h3>发展建议</h3>
          <ul>
            {suggestions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.conclusion}>
        <h3>结论</h3>
        <p>
          总体来看,您具备建立长期稳定关系的潜力。通过良好的沟通和互相理解,
          可以不断增进感情,共同成长。建议在保持现有优势的基础上,积极面对
          可能的挑战,这将有助于关系的健康发展。
        </p>
      </div>
    </section>
  );
};

export default RelationshipPotential; 