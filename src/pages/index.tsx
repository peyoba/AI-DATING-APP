import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[var(--primary)] mb-4">
          样式测试页面
        </h1>
        
        <div className="space-y-4">
          <div className="bg-pink-100 rounded-lg p-4">
            <h2 className="text-[var(--primary)] font-semibold mb-2">
              颜色测试
            </h2>
            <div className="h-2 bg-pink-500 rounded-full w-3/4"></div>
          </div>

          <button className="btn-primary w-full">
            测试按钮
          </button>
        </div>
      </div>
    </div>
  );
} 