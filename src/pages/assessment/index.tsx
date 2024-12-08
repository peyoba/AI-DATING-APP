import React from 'react';
import { Layout } from '../home/components/Layout';
import PersonalityTest from './components/PersonalityTest';
import ValueAssessment from './components/ValueAssessment';
import InterestAnalysis from './components/InterestAnalysis';
import LifestyleEvaluation from './components/LifestyleEvaluation';
import RelationshipPotential from './components/RelationshipPotential';
import styles from './styles/Assessment.module.css';

const AssessmentPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>个人测评分析</h1>
          <p>深入了解自己，找到最适合的伴侣</p>
        </header>
        
        <main className={styles.main}>
          <div className={styles.section}>
            <PersonalityTest />
          </div>
          
          <div className={styles.section}>
            <ValueAssessment />
          </div>
          
          <div className={styles.section}>
            <InterestAnalysis />
          </div>
          
          <div className={styles.section}>
            <LifestyleEvaluation />
          </div>
          
          <div className={styles.section}>
            <RelationshipPotential />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default AssessmentPage; 