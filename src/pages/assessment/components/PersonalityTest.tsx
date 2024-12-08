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
  traits: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  trait: {
    padding: '1rem',
    backgroundColor: 'rgba(255, 143, 171, 0.05)',
    borderRadius: '0.5rem',
    border: '1px solid rgba(255, 143, 171, 0.1)',
  },
  traitTitle: {
    color: '#ff1493',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  traitDescription: {
    color: '#666',
    fontSize: '0.9rem',
  },
};

const PersonalityTest: React.FC = () => {
  const personalityTraits = [
    { name: '外向性', score: 82, description: '善于社交，乐于表达，充满活力' },
    { name: '开放性', score: 88, description: '思维开放，富有创造力，喜欢新体验' },
    { name: '责任心', score: 85, description: '做事认真，有计划性，值得信赖' },
    { name: '亲和力', score: 90, description: '善解人意，富有同理心，乐于助人' },
    { name: '情绪稳定性', score: 78, description: '情绪管理能力强，抗压性好' }
  ];

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>
        性格特质分析
      </h2>
      
      <div style={styles.description}>
        <p>了解您的性格特点和行为倾向</p>
      </div>

      <div>
        {personalityTraits.map((trait) => (
          <div key={trait.name} style={styles.itemContainer}>
            <div style={styles.itemHeader}>
              <span style={styles.itemName}>{trait.name}</span>
              <span style={styles.itemScore}>
                {trait.score}%
              </span>
            </div>
            <div style={styles.progressBar}>
              <div
                style={{
                  ...styles.progressFill,
                  width: `${trait.score}%`,
                }}
              />
            </div>
            <div style={styles.trait}>
              <p style={styles.traitDescription}>{trait.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.analysis}>
        <h3 style={styles.analysisTitle}>
          性格分析
        </h3>
        <p style={styles.analysisText}>
          您的性格特质呈现出较为均衡的发展，尤其在亲和力和开放性方面表现突出。
          这表明您善于与人相处，同时也乐于接受新事物和新观点。较高的责任心显示
          您是一个值得信赖的伴侣，而良好的情绪稳定性则有助于维持长期稳定的关系。
          建议在社交场合中可以适当展现自己的外向特质，这将有助于扩展社交圈并增加
          遇到理想伴侣的机会。
        </p>
      </div>
    </section>
  );
};

export default PersonalityTest; 