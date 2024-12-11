import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import { AssessmentProvider } from '@/contexts/AssessmentContext';
import ValueAssessment from './components/ValueAssessment';
import LifestyleEvaluation from './components/LifestyleEvaluation';
import PersonalityTest from './components/PersonalityTest';
import InterestAnalysis from './components/InterestAnalysis';
import RelationshipPotential from './components/RelationshipPotential';

const styles = {
  container: {
    maxWidth: '48rem',
    margin: '0 auto',
    padding: '2rem 1rem',
    backgroundColor: '#ffe0eb',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#666',
  },
};

const AssessmentPage: React.FC = () => {
  return (
    <AssessmentProvider>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>个人测评分析</h1>
          <p style={styles.subtitle}>深入了解自己，找到最适合的伴侣</p>
        </header>
        
        <Suspense fallback={<Loading />}>
          <main>
            <PersonalityTest />
            <ValueAssessment />
            <InterestAnalysis />
            <LifestyleEvaluation />
            <RelationshipPotential />
          </main>
        </Suspense>
      </div>
    </AssessmentProvider>
  );
};

export default AssessmentPage; 