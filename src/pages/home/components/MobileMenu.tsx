import React from 'react';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
}) => {
  const { user, logout } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="关闭菜单"
        >
          ✕
        </button>
        {user && (
          <div className={styles.userInfo}>
            <span className={styles.nickname}>{user.nickname}</span>
          </div>
        )}
        <nav>
          <a href="/" className={styles.active}>首页</a>
          <a href="/matching">智能匹配</a>
          <a href="/community">社区</a>
          <a href="/about">关于我们</a>
          {user && (
            <>
              <a href="/profile">个人资料</a>
              <a href="/matches">我的匹配</a>
              <a href="/settings">账号设置</a>
              <button onClick={handleLogout} className={styles.logoutButton}>
                退出登录
              </button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}; 