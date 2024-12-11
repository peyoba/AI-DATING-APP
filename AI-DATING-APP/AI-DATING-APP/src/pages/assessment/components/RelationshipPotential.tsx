import React from 'react';

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff1493',
    textAlign: 'center' as const,
    marginBottom: '1.5rem',
  },
  description: {
    textAlign: 'center' as const,
    marginBottom: '2rem',
    color: '#666',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  scoreCard: {
    backgroundColor: 'rgba(255, 143, 171, 0.05)',
    borderRadius: '0.5rem',
    padding: '1.5rem',
  },
  scoreTitle: {
    color: '#ff1493',
    fontWeight: '600',
    marginBottom: '1rem',
    fontSize: '1.125rem',
  },
  itemContainer: {
    marginBottom: '1rem',
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  itemName: {
    fontWeight: '500',
    color: '#444',
  },
  itemScore: {
    color: '#ff1493',
    fontWeight: '600',
  },
  progressBar: {
    width: '100%',
    height: '0.75rem',
    backgroundColor: 'rgba(255, 143, 171, 0.1)',
    borderRadius: '9999px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(135deg, #ff8fab 0%, #ff1493 100%)',
    borderRadius: '9999px',
    transition: 'width 300ms',
  },
  analysisCard: {
    backgroundColor: 'rgba(255, 143, 171, 0.05)',
    borderRadius: '0.5rem',
    padding: '1.5rem',
  },
  analysisTitle: {
    color: '#ff1493',
    fontWeight: '600',
    marginBottom: '1rem',
    fontSize: '1.125rem',
  },
  analysisText: {
    color: '#666',
    lineHeight: '1.75',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    color: '#ff1493',
    fontWeight: '600',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    color: '#666',
    marginBottom: '0.5rem',
    paddingLeft: '1.25rem',
    position: 'relative' as const,
  },
  bullet: {
    position: 'absolute' as const,
    left: 0,
    color: '#ff1493',
  },
  overallScore: {
    textAlign: 'center' as const,
    marginBottom: '2rem',
  },
  scoreNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: '0.5rem',
  },
  scoreLabel: {
    color: '#666',
    fontSize: '1.125rem',
  },
};

const RelationshipPotential: React.FC = () => {
  const scores = [
    { name: '价值观契合度', score: 88 },
    { name: '生活方式匹配度', score: 85 },
    { name: '性格相容性', score: 92 },
    { name: '兴趣相似度', score: 86 },
    { name: '沟通潜力', score: 90 }
  ];

  const advantages = [
    '价值观高度一致，特别是在家庭观念方面',
    '性格特质互补，能够相互理解和包容',
    '有共同的兴趣爱好，易于培养共同话题',
    '生活习惯相近，减少日常摩擦',
    '良好的沟通基础，有助于解决问题'
  ];

  const challenges = [
    '工作时间安排可能需要更好的协调',
    '在理财观念上可能需要更多沟通',
    '对未来规划的细节需要进一步讨论'
  ];

  const suggestions = [
    '多创造共处时光，增进了解',
    '制定共同的未来目标和计划',
    '保持开放和诚实的沟通态度',
    '共同参与兴趣活动，培养感情',
    '适当关注对方的个人空间和成长'
  ];

  // 计算总得分
  const overallScore = Math.round(
    scores.reduce((sum, item) => sum + item.score, 0) / scores.length
  );

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>
        关系发展潜力评估
      </h2>
      
      <div style={styles.description}>
        <p>基于您的测评结果，分析未来关系发展的潜力</p>
      </div>

      <div style={styles.overallScore}>
        <div style={styles.scoreNumber}>{overallScore}%</div>
        <div style={styles.scoreLabel}>总体匹配度</div>
      </div>

      <div style={styles.grid}>
        <div style={styles.scoreCard}>
          <h3 style={styles.scoreTitle}>匹配度详情</h3>
          {scores.map((item) => (
            <div key={item.name} style={styles.itemContainer}>
              <div style={styles.itemHeader}>
                <span style={styles.itemName}>{item.name}</span>
                <span style={styles.itemScore}>
                  {item.score}%
                </span>
              </div>
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${item.score}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={styles.analysisCard}>
          <h3 style={styles.analysisTitle}>发展优势</h3>
          <ul style={styles.list}>
            {advantages.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.bullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={styles.grid}>
        <div style={styles.analysisCard}>
          <h3 style={styles.analysisTitle}>潜在挑战</h3>
          <ul style={styles.list}>
            {challenges.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.bullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={styles.analysisCard}>
          <h3 style={styles.analysisTitle}>发展建议</h3>
          <ul style={styles.list}>
            {suggestions.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.bullet}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={styles.analysisCard}>
        <h3 style={styles.analysisTitle}>总体评估</h3>
        <p style={styles.analysisText}>
          根据综合评估结果显示，您的关系发展潜力非常理想。在价值观、性格特质和生活方式等
          多个维度都展现出良好的匹配度。特别是在性格相容性和沟通潜力方面表现突出，这为建立
          长期稳定的关系奠定了良好基础。虽然在工作时间协调等方面可能存在一些挑战，但这些
          都可以通过良好的沟通和相互理解来克服。建议您保持开放和真诚的态度，循序渐进地发展
          关系，相信会收获一段稳定而富有成长性的感情。
        </p>
      </div>
    </section>
  );
};

export default RelationshipPotential; 