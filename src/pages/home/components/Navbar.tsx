import React, { useState } from 'react';
import { MobileMenu } from './MobileMenu';
import { LoginModal } from './LoginModal';
import { RegisterModal } from './RegisterModal';
import { UserDropdown } from './UserDropdown';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  const { user, logout } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h1>AI婚恋</h1>
          </div>
          <div className={styles.menu}>
            <a href="/" className={styles.active}>首页</a>
            <a href="/matching">智能匹配</a>
            <a href="/community">社区</a>
            <a href="/about">关于我们</a>
          </div>
          <div className={styles.auth}>
            {user ? (
              <div className={styles.userMenu}>
                <button 
                  className={styles.avatarButton}
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                >
                  <img 
                    src={user.avatar || '/images/default-avatar.png'} 
                    alt={user.nickname}
                    className={styles.avatar}
                  />
                </button>
                <UserDropdown
                  isOpen={isUserDropdownOpen}
                  onClose={() => setIsUserDropdownOpen(false)}
                  onLogout={handleLogout}
                  nickname={user.nickname}
                />
              </div>
            ) : (
              <>
                <button onClick={handleLoginClick} className={styles.login}>
                  登录
                </button>
                <button onClick={handleRegisterClick} className={styles.register}>
                  免费注册
                </button>
              </>
            )}
          </div>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitch={handleSwitchToRegister}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitch={handleSwitchToLogin}
      />

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
    </>
  );
}; 