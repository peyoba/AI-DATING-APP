import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/home" className={styles.logo}>
          <h1>AI婚恋</h1>
        </Link>
        <div className={styles.menu}>
          <Link href="/home" className={styles.link}>
            首页
          </Link>
          <button 
            onClick={() => handleNavigation('/assessment')}
            className={styles.link}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            测试分析
          </button>
          <Link href="/matching" className={styles.link}>
            智能匹配
          </Link>
          <Link href="/about" className={styles.link}>
            关于我们
          </Link>
        </div>
      </div>
    </nav>
  );
}; 