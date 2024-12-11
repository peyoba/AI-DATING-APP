import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProductIntro.module.css';

export const ProductIntro: React.FC = () => {
  const router = useRouter();

  const handleStartTest = () => {
    console.log('Navigating to assessment page...');
    router.push('/assessment');
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>AI婚恋契合度预测平台</h1>
      <p className={styles.description}>
        基于AI的智能婚恋关系评估平台，通过科学的模型算法，帮助您更好地了解和经营感情关系
      </p>
      <button 
        className={styles.startButton}
        onClick={handleStartTest}
      >
        <span>开始测试</span>
      </button>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>科学的评估体系</h3>
          <p>基于心理学理论与机器学习算法</p>
        </div>
        <div className={styles.feature}>
          <h3>个性化服务</h3>
          <p>定制化的建议方案与成长追踪</p>
        </div>
        <div className={styles.feature}>
          <h3>隐私保护</h3>
          <p>严格的数据加密与隐私控制</p>
        </div>
      </div>
    </section>
  );
}; 