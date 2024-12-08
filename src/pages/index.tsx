import React from 'react';
import { Layout } from './home/components/Layout';
import { ProductIntro } from './home/components/ProductIntro';
import { FeatureNav } from './home/components/FeatureNav';
import { SuccessStories } from './home/components/SuccessStories';
import { Testimonials } from './home/components/Testimonials';
import styles from './home/styles/Home.module.css';

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