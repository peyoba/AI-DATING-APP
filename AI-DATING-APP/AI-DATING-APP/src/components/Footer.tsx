import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>关于我们</h3>
          <p>AI婚恋是一个基于人工智能的婚恋匹配平台，致力于帮助用户找到最适合的伴侣。</p>
        </div>
        
        <div className={styles.section}>
          <h3>快速链接</h3>
          <div className={styles.links}>
            <Link href="/home" className={styles.link}>首页</Link>
            <Link href="/assessment" className={styles.link}>测试分析</Link>
            <Link href="/matching" className={styles.link}>智能匹配</Link>
            <Link href="/about" className={styles.link}>关于我们</Link>
          </div>
        </div>
        
        <div className={styles.section}>
          <h3>联系方式</h3>
          <div className={styles.links}>
            <a href="mailto:contact@ai-dating.com" className={styles.link}>电子邮件</a>
            <a href="tel:+86-xxx-xxxx-xxxx" className={styles.link}>客服电话</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© 2023 AI婚恋. All rights reserved.</p>
      </div>
    </footer>
  );
}; 