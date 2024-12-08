import React from 'react';
import styles from '../styles/Testimonials.module.css';

interface Testimonial {
  avatar: string;
  name: string;
  content: string;
  usageDuration: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    avatar: '/images/avatar1.jpg',
    name: '小王',
    content: '这个平台的AI匹配算法真的很准确，帮我找到了志同道合的另一半。最让我惊喜的是，平台不仅关注外在条件的匹配，更注重内在价值观的契合。',
    usageDuration: '使用3个月',
    highlight: '找到灵魂伴侣'
  },
  {
    avatar: '/images/avatar2.jpg',
    name: '小李',
    content: '平台的个性化建议很实用，帮助我更好地经营感情。通过平台的指导，我学会了如何更好地表达自己，也更懂得如何理解对方。',
    usageDuration: '使用6个月',
    highlight: '改善沟通能力'
  },
  {
    avatar: '/images/avatar3.jpg',
    name: '小张',
    content: '最开始我对AI婚恋平台持怀疑态度，但使用后发现这里的匹配质量确实很高。平台的隐私保护做得也很好，让人感觉很安心。',
    usageDuration: '使用2个月',
    highlight: '高质量匹配'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>用户见证</h2>
      <div className={styles.grid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className={styles.avatar}
              />
              <div className={styles.info}>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.usageDuration}</span>
              </div>
            </div>
            <p className={styles.content}>{testimonial.content}</p>
            <div className={styles.highlight}>
              <span>主要收获：{testimonial.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 