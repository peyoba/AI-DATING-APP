import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/home" className={styles.logo}>
          <h1>AI婚恋</h1>
        </Link>
        <div className={styles.menu}>
          <Link 
            href="/home" 
            className={`${styles.link} ${router.pathname === '/home' ? styles.active : ''}`}
          >
            首页
          </Link>
          <Link 
            href="/assessment" 
            className={`${styles.link} ${router.pathname === '/assessment' ? styles.active : ''}`}
          >
            测试分析
          </Link>
          <Link 
            href="/matching" 
            className={`${styles.link} ${router.pathname === '/matching' ? styles.active : ''}`}
          >
            智能匹配
          </Link>
          <Link 
            href="/about" 
            className={`${styles.link} ${router.pathname === '/about' ? styles.active : ''}`}
          >
            关于我们
          </Link>
        </div>
      </div>
    </nav>
  );
}; 