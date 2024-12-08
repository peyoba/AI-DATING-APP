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

const LifestyleEvaluation: React.FC = () => {
  const lifestyleFactors = [
    { name: '作息规律', score: 75 },
    { name: '饮食习惯', score: 85 },
    { name: '运动频率', score: 70 },
    { name: '工作节奏', score: 80 },
    { name: '休闲方式', score: 90 }
  ];

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>
        生活方式评估
      </h2>
      
      <div style={styles.description}>
        <p>评估您的日常生活习惯和方式</p>
      </div>

      <div>
        {lifestyleFactors.map((factor) => (
          <div key={factor.name} style={styles.itemContainer}>
            <div style={styles.itemHeader}>
              <span style={styles.itemName}>{factor.name}</span>
              <span style={styles.itemScore}>
                {factor.score}%
              </span>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${factor.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div style={styles.analysis}>
        <h3 style={styles.analysisTitle}>
          生活方式分析
        </h3>
        <p style={styles.analysisText}>
          您的生活方式较为健康平衡，特别是在休闲方式和饮食习惯方面表现良好。
          建议可以适当增加运动频率，保持规律的作息时间。这将有助于提升整体生活质量，
          也更容易与潜在伴侣建立健康的生活节奏。
        </p>
      </div>
    </section>
  );
};

export default LifestyleEvaluation; 