import React from 'react';
import styles from '../styles/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>关于我们</h3>
            <ul>
              <li><a href="/about">公司介绍</a></li>
              <li><a href="/contact">联系我们</a></li>
              <li><a href="/careers">加入我们</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>帮助中心</h3>
            <ul>
              <li><a href="/faq">常见问题</a></li>
              <li><a href="/guide">使用指南</a></li>
              <li><a href="/feedback">意见反馈</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>隐私安全</h3>
            <ul>
              <li><a href="/privacy">隐私政策</a></li>
              <li><a href="/terms">服务条款</a></li>
              <li><a href="/security">安全说明</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h3>关注我们</h3>
            <div className={styles.social}>
              <a href="/weixin">微信</a>
              <a href="/weibo">微博</a>
              <a href="/douyin">抖音</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2024 AI婚恋平台 版权所有</p>
        </div>
      </div>
    </footer>
  );
}; 