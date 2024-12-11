'use client';

import React, { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import LoginModal from '../components/LoginModal';
import { RegisterModal } from '../components/RegisterModal';
import { MobileMenu } from '../components/MobileMenu';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <div style={{ 
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh',
      backgroundColor: '#ffe0eb'
    }}>
      {/* 导航栏 */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{ color: '#ff1493', margin: 0 }}>AI婚恋平台</h1>
        <div>
          {user ? (
            <>
              <button onClick={() => setIsMobileMenuOpen(true)}>
                菜单
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsLoginModalOpen(true)}>
                登录
              </button>
              <button 
                onClick={() => setIsRegisterModalOpen(true)}
                style={{ marginLeft: '1rem' }}
              >
                注册
              </button>
            </>
          )}
        </div>
      </nav>

      {/* 主要内容 */}
      <main>
        <h2>寻找你的完美伴侣</h2>
        <p>让AI助你找到真爱，开启幸福人生</p>
        
        {/* 功能区块 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div>
            <h3>智能匹配</h3>
            <p>基于AI算法的精准匹配</p>
          </div>
          <div>
            <h3>个性测评</h3>
            <p>深入了解自己和潜在伴侣</p>
          </div>
          <div>
            <h3>隐私保护</h3>
            <p>严格的隐私保护机制</p>
          </div>
        </div>
      </main>

      {/* 模态框 */}
      {isLoginModalOpen && (
        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onSwitch={() => {
            setIsLoginModalOpen(false);
            setIsRegisterModalOpen(true);
          }}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={() => setIsRegisterModalOpen(false)}
          onSwitch={() => {
            setIsRegisterModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      )}

      {/* 移动端菜单 */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
} 