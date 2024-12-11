import React from 'react';
import styles from '../styles/FeatureNav.module.css';

const features = [
  {
    title: '个人档案建立',
    description: '完整的个人信息评估系统',
    icon: '📝'
  },
  {
    title: 'AI契合度预测',
    description: '多维度智能匹配分析',
    icon: '🤖'
  },
  {
    title: '情侣空间',
    description: '记录您的甜蜜时刻',
    icon: '💑'
  },
  {
    title: '社区互动',
    description: '分享交流感情经验',
    icon: '👥'
  }
];

export const FeatureNav: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>核心功能</h2>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};