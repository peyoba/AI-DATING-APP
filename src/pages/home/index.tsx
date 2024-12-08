import React from 'react';
import { Layout } from './components/Layout';
import { ProductIntro } from './components/ProductIntro';
import { FeatureNav } from './components/FeatureNav';
import { SuccessStories } from './components/SuccessStories';
import { Testimonials } from './components/Testimonials';
import styles from './styles/Home.module.css';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <ProductIntro />
        <FeatureNav />
        <SuccessStories />
        <Testimonials />
      </div>
    </Layout>
  );
};

export default HomePage; 