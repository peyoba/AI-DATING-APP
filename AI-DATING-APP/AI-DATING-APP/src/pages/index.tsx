import React from 'react';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/components/HomePage'), {
  ssr: true,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
} 