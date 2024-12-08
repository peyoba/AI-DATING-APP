import React from 'react';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onLoginClick,
  onRegisterClick
}) => {
  const { user, logout } = useUser();

  const handleLoginClick = () => {
    onClose();
    onLoginClick();
  };

  const handleRegisterClick = () => {
    onClose();
    onRegisterClick();
  };

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
            <img 
              src={user.avatar || '/images/default-avatar.png'} 
              alt={user.nickname}
              className={styles.avatar}
            />
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
        {!user && (
          <div className={styles.auth}>
            <button onClick={handleLoginClick} className={styles.login}>
              登录
            </button>
            <button onClick={handleRegisterClick} className={styles.register}>
              免费注册
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 