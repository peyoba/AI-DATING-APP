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
  itemContainer: {
    marginBottom: '1.5rem',
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
  analysis: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #f3f4f6',
  },
  analysisTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#ff1493',
    marginBottom: '1rem',
  },
  analysisText: {
    color: '#666',
    lineHeight: '1.75',
  },
};

const ValueAssessment: React.FC = () => {
  const values = [
    { name: '家庭观念', score: 90 },
    { name: '事业发展', score: 85 },
    { name: '生活品质', score: 80 },
    { name: '个人成长', score: 88 },
    { name: '社会责任', score: 75 }
  ];

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>
        价值观测评
      </h2>
      
      <div style={styles.description}>
        <p>了解您的核心价值观倾向</p>
      </div>

      <div>
        {values.map((value) => (
          <div key={value.name} style={styles.itemContainer}>
            <div style={styles.itemHeader}>
              <span style={styles.itemName}>{value.name}</span>
              <span style={styles.itemScore}>
                {value.score}%
              </span>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${value.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={styles.analysis}>
        <h3 style={styles.analysisTitle}>
          价值观分析
        </h3>
        <p style={styles.analysisText}>
          您的价值观体系较为均衡，特别重视家庭观念和个人成长。
          在事业发展和生活品质方面也保持着积极的态度。
          这种价值观有助于建立稳定且有发展潜力的关系。
        </p>
      </div>
    </section>
  );
};

export default ValueAssessment; 