import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { UserProvider } from '../contexts/UserContext';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <UserProvider>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}; 