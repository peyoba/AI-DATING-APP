import React from 'react';
import styles from '../styles/SuccessStories.module.css';

interface Story {
  title: string;
  description: string;
  image: string;
  matchRate: string;
  duration: string;
}

const stories: Story[] = [
  {
    title: '缘分天注定',
    description: '通过AI匹配发现我们有90%以上的兴趣爱好重合，现在已经在一起两年了。',
    image: '/images/couple1.jpg',
    matchRate: '95%',
    duration: '2年'
  },
  {
    title: '最佳拍档',
    description: '性格互补，生活习惯契合度高，让我们的相处非常融洽。',
    image: '/images/couple2.jpg',
    matchRate: '92%',
    duration: '1年'
  },
  {
    title: '命中注定',
    description: 'AI算法准确预测了我们的价值观契合度，让我们避免了很多潜在矛盾。',
    image: '/images/couple3.jpg',
    matchRate: '89%',
    duration: '1.5年'
  }
];

export const SuccessStories: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>成功案例</h2>
      <div className={styles.grid}>
        {stories.map((story, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={story.image} alt={story.title} />
            </div>
            <div className={styles.content}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <div className={styles.stats}>
                <span>匹配度: {story.matchRate}</span>
                <span>相处时长: {story.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 