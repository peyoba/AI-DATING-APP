import React, { useRef, useEffect } from 'react';
import styles from '../styles/UserDropdown.module.css';

interface UserDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => Promise<void>;
  nickname: string;
}

export const UserDropdown: React.FC<UserDropdownProps> = ({
  isOpen,
  onClose,
  onLogout,
  nickname
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleLogout = async () => {
    try {
      await onLogout();
      onClose();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={styles.dropdown} 
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
      role="menu"
      tabIndex={-1}
    >
      <div className={styles.header}>
        <span>Hi, {nickname}</span>
      </div>
      <div className={styles.menu}>
        <a href="/profile" className={styles.menuItem}>
          <span className={styles.icon}>👤</span>
          个人资料
        </a>
        <a href="/matches" className={styles.menuItem}>
          <span className={styles.icon}>❤️</span>
          我的匹配
        </a>
        <a href="/settings" className={styles.menuItem}>
          <span className={styles.icon}>⚙️</span>
          账号设置
        </a>
        <button onClick={handleLogout} className={styles.menuItem}>
          <span className={styles.icon}>🚪</span>
          退出登录
        </button>
      </div>
    </div>
  );
};
