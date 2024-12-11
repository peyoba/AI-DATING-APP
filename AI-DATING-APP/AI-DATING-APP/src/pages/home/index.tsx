import React from 'react';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/components/HomePage'), {
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return <HomePage />;
} 