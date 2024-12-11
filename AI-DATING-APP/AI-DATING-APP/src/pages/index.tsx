import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// 错误边界组件
const ErrorBoundary = dynamic(() => import('@/components/ErrorBoundary'), {
  ssr: false
});

// 主页组件
const HomePage = dynamic(() => import('@/components/HomePage'), {
  ssr: true,
  loading: () => (
    <div style={{ 
      padding: '20px',
      textAlign: 'center',
      minHeight: '100vh',
      backgroundColor: '#ffe0eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <h1 style={{ color: '#ff1493', marginBottom: '20px' }}>AI Dating App</h1>
        <p>Loading...</p>
      </div>
    </div>
  )
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>AI Dating App - Find Your Perfect Match</title>
        <meta name="description" content="AI-powered dating platform that helps you find your perfect match" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    </>
  );
} 