'use client';

import React from 'react';

const HomePage = () => {
  return (
    <div style={{ 
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh',
      backgroundColor: '#ffe0eb'
    }}>
      <h1 style={{ color: '#ff1493' }}>AI Dating App</h1>
      <p>Welcome to our platform</p>
      
      {/* 添加更多内容 */}
      <div style={{ marginTop: '2rem' }}>
        <h2>Find Your Perfect Match</h2>
        <p>Using AI to help you find meaningful relationships</p>
      </div>
    </div>
  );
};

export default HomePage; 