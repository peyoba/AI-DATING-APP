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
  categoryContainer: {
    marginBottom: '2rem',
  },
  categoryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    color: '#ff1493',
    fontWeight: '600',
  },
  itemContainer: {
    marginBottom: '1.5rem',
    backgroundColor: 'rgba(255, 143, 171, 0.05)',
    borderRadius: '0.5rem',
    padding: '1rem',
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
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  tag: {
    backgroundColor: 'rgba(255, 143, 171, 0.1)',
    color: '#ff1493',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
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
  suggestions: {
    marginTop: '1rem',
    backgroundColor: 'rgba(255, 143, 171, 0.05)',
    borderRadius: '0.5rem',
    padding: '1rem',
  },
  suggestionTitle: {
    color: '#ff1493',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  suggestionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestionItem: {
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
};

const InterestAnalysis: React.FC = () => {
  const interests = [
    {
      category: '文化艺术',
      items: [
        { name: '音乐鉴赏', score: 85, tags: ['古典音乐', '流行音乐', '爵士乐'] },
        { name: '电影欣赏', score: 90, tags: ['剧情片', '纪录片', '艺术电影'] },
        { name: '文学创作', score: 75, tags: ['现代文学', '诗歌', '散文'] }
      ]
    },
    {
      category: '运动健身',
      items: [
        { name: '健身运动', score: 80, tags: ['力量训练', '有氧运动', '瑜伽'] },
        { name: '户外活动', score: 85, tags: ['徒步', '登山', '骑行'] },
        { name: '球类运动', score: 70, tags: ['网球', '羽毛球', '高尔夫'] }
      ]
    },
    {
      category: '生活休闲',
      items: [
        { name: '美食烹饪', score: 95, tags: ['中餐', '西餐', '烘焙'] },
        { name: '旅行探索', score: 88, tags: ['文化游', '美食游', '自然游'] },
        { name: '园艺种植', score: 72, tags: ['花卉', '蔬果', '盆栽'] }
      ]
    }
  ];

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>
        兴趣爱好分析
      </h2>
      
      <div style={styles.description}>
        <p>了解您的兴趣分布，发现共同话题</p>
      </div>

      <div>
        {interests.map((category) => (
          <div key={category.category} style={styles.categoryContainer}>
            <h3 style={styles.categoryHeader}>{category.category}</h3>
            {category.items.map((item) => (
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
                <div style={styles.tagContainer}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={styles.analysis}>
        <h3 style={styles.analysisTitle}>
          兴趣分析
        </h3>
        <p style={styles.analysisText}>
          您的兴趣爱好丰富多样，在文化艺术、运动健身和生活休闲等多个领域都表现出浓厚的兴趣。
          特别是在美食烹饪、电影欣赏和旅行探索方面表现突出，这些都是很好的社交话题和约会选择。
          同时您对运动健身也保持着适度的热情，这有助于保持健康的生活方式。
        </p>
        <div style={styles.suggestions}>
          <h4 style={styles.suggestionTitle}>约会建议</h4>
          <ul style={styles.suggestionList}>
            <li style={styles.suggestionItem}>
              <span style={styles.bullet}>•</span>
              可以选择一起参加烹饪课程或美食品鉴活动
            </li>
            <li style={styles.suggestionItem}>
              <span style={styles.bullet}>•</span>
              观看艺术电影或音乐会，分享文化体验
            </li>
            <li style={styles.suggestionItem}>
              <span style={styles.bullet}>•</span>
              规划短途旅行，探索新的地方和美食
            </li>
            <li style={styles.suggestionItem}>
              <span style={styles.bullet}>•</span>
              一起参加户外运动，培养默契和信任
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InterestAnalysis; 