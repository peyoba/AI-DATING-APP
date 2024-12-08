import React from 'react';
import styles from '../styles/TestComponent.module.css';

const TestComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>测试组件 - 样式测试</h2>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: '75%' }} />
      </div>
    </div>
  );
};

export default TestComponent; 