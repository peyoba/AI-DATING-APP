import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

interface Styles {
  container: React.CSSProperties;
  nav: React.CSSProperties;
  logo: React.CSSProperties;
  navLinks: React.CSSProperties;
  navLink: React.CSSProperties;
  mobileMenuButton: React.CSSProperties;
  mobileMenu: React.CSSProperties;
  hero: React.CSSProperties;
  title: React.CSSProperties;
  subtitle: React.CSSProperties;
  button: React.CSSProperties;
  features: React.CSSProperties;
  featuresGrid: React.CSSProperties;
  featureCard: React.CSSProperties;
  featureIcon: React.CSSProperties;
  featureTitle: React.CSSProperties;
  featureDescription: React.CSSProperties;
  section: React.CSSProperties;
  sectionTitle: React.CSSProperties;
  testimonials: React.CSSProperties;
  testimonialsGrid: React.CSSProperties;
  testimonialCard: React.CSSProperties;
  testimonialText: React.CSSProperties;
  testimonialAuthor: React.CSSProperties;
  stats: React.CSSProperties;
  statsGrid: React.CSSProperties;
  statNumber: React.CSSProperties;
  statLabel: React.CSSProperties;
  cta: React.CSSProperties;
  ctaTitle: React.CSSProperties;
  ctaText: React.CSSProperties;
  footer: React.CSSProperties;
  footerContent: React.CSSProperties;
  footerSection: React.CSSProperties;
  footerTitle: React.CSSProperties;
  footerLink: React.CSSProperties;
  footerBottom: React.CSSProperties;
  socialLinks: React.CSSProperties;
  socialIcon: React.CSSProperties;
  scrollTopButton: React.CSSProperties;
}

const styles: Styles = {
  container: {
    backgroundColor: '#ffe0eb',
    minHeight: '100vh',
    paddingTop: '4rem',
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#ff1493',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: '#666',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#ff1493',
    cursor: 'pointer',
  },
  mobileMenu: {
    display: 'none',
    flexDirection: 'column',
    position: 'fixed',
    top: '4rem',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    gap: '1rem',
  },
  hero: {
    padding: '6rem 1rem 4rem',
    textAlign: 'center',
    maxWidth: '64rem',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: '1.5rem',
    opacity: 0,
    transform: 'translateY(20px)',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#666',
    marginBottom: '2rem',
    maxWidth: '48rem',
    margin: '0 auto 2rem',
    opacity: 0,
    transform: 'translateY(20px)',
  },
  button: {
    backgroundColor: '#ff1493',
    color: 'white',
    border: 'none',
    padding: '1rem 3rem',
    borderRadius: '9999px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(255, 20, 147, 0.25)',
  },
  features: {
    padding: '4rem 1rem',
    backgroundColor: 'white',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '64rem',
    margin: '0 auto',
  },
  featureCard: {
    padding: '2rem',
    backgroundColor: 'rgba(255, 20, 147, 0.05)',
    borderRadius: '1rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  featureIcon: {
    fontSize: '2.5rem',
    color: '#ff1493',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: '0.5rem',
  },
  featureDescription: {
    color: '#666',
    lineHeight: '1.6',
  },
  section: {
    padding: '4rem 1rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ff1493',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  testimonials: {
    backgroundColor: 'white',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '64rem',
    margin: '0 auto',
  },
  testimonialCard: {
    padding: '2rem',
    backgroundColor: 'rgba(255, 20, 147, 0.05)',
    borderRadius: '1rem',
  },
  testimonialText: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1rem',
    fontStyle: 'italic',
  },
  testimonialAuthor: {
    color: '#ff1493',
    fontWeight: 'bold',
  },
  stats: {
    backgroundColor: '#ff1493',
    color: 'white',
    padding: '4rem 1rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    maxWidth: '64rem',
    margin: '0 auto',
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  statLabel: {
    fontSize: '1.125rem',
    opacity: 0.9,
  },
  cta: {
    backgroundColor: 'white',
    padding: '6rem 1rem',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: '1.5rem',
    maxWidth: '48rem',
    margin: '0 auto 1.5rem',
  },
  ctaText: {
    fontSize: '1.25rem',
    color: '#666',
    marginBottom: '2rem',
    maxWidth: '48rem',
    margin: '0 auto 2rem',
  },
  footer: {
    backgroundColor: '#fff',
    padding: '4rem 1rem',
    color: '#666',
  },
  footerContent: {
    maxWidth: '64rem',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  footerTitle: {
    color: '#ff1493',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  footerLink: {
    color: '#666',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    borderTop: '1px solid #eee',
    marginTop: '2rem',
    paddingTop: '2rem',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: '#666',
    transition: 'color 0.3s ease',
  },
  scrollTopButton: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: '#ff1493',
    color: 'white',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    opacity: 0,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: 'none',
  },
};

const HomePage: React.FC = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowScrollTop(window.scrollY > 500);

      // Add animation to elements when they come into view
      const elements = [heroRef, featuresRef, statsRef];
      elements.forEach(ref => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView = rect.top <= window.innerHeight * 0.75;
          if (isInView) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartTest = () => {
    router.push('/assessment');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={{
        ...styles.nav,
        backgroundColor: scrollPosition > 50 ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrollPosition > 50 ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
      }}>
        <Link href="/" style={styles.logo}>
          <span>💝</span>
          <span>AI婚恋</span>
        </Link>
        <div style={styles.navLinks}>
          <Link href="/about" style={styles.navLink}>关于我们</Link>
          <Link href="/features" style={styles.navLink}>功能介绍</Link>
          <Link href="/success-stories" style={styles.navLink}>成功案例</Link>
          <Link href="/contact" style={styles.navLink}>联系我们</Link>
        </div>
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <Link href="/about" style={styles.navLink}>关于我们</Link>
          <Link href="/features" style={styles.navLink}>功能介绍</Link>
          <Link href="/success-stories" style={styles.navLink}>成功案例</Link>
          <Link href="/contact" style={styles.navLink}>联系我们</Link>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} style={{
        ...styles.hero,
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.8s ease-out',
      }}>
        <h1 style={{...styles.title, opacity: isVisible ? 1 : 0}}>
          AI婚恋契合度预测平台
        </h1>
        <p style={{...styles.subtitle, opacity: isVisible ? 1 : 0}}>
          基于先进的AI算法，深入分析您的性格特征、价值观和生活方式，
          帮助您找到最适合的伴侣，开启幸福的感情之旅。
        </p>
        <button 
          style={{...styles.button, opacity: isVisible ? 1 : 0}}
          onClick={handleStartTest}
        >
          开始测试
        </button>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} style={{
        ...styles.features,
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.8s ease-out',
      }}>
        <h2 style={styles.sectionTitle}>核心功能</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎯</div>
            <h3 style={styles.featureTitle}>科学的评估体系</h3>
            <p style={styles.featureDescription}>
              基于心理学理论与机器学习算法，全方位评估个人特质与匹配度
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎨</div>
            <h3 style={styles.featureTitle}>个性化推荐</h3>
            <p style={styles.featureDescription}>
              根据您的独特特点，智能匹配最适合的伴侣人选
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>隐私保护</h3>
            <p style={styles.featureDescription}>
              采用先进的加密技术，确保您的个人信息安全
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} style={{
        ...styles.stats,
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'all 0.8s ease-out',
      }}>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statNumber}>50,000+</div>
            <div style={styles.statLabel}>注册用户</div>
          </div>
          <div>
            <div style={styles.statNumber}>85%</div>
            <div style={styles.statLabel}>匹配成功率</div>
          </div>
          <div>
            <div style={styles.statNumber}>95%</div>
            <div style={styles.statLabel}>用户满意度</div>
          </div>
          <div>
            <div style={styles.statNumber}>1,000+</div>
            <div style={styles.statLabel}>成功案例</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{...styles.section, ...styles.testimonials}}>
        <h2 style={styles.sectionTitle}>用户评价</h2>
        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "通过AI婚恋平台的测评，我更深入地了解了自己，也找到了志同道合的伴侣。
              现在我们已经在一起一年了，感情越来越好。"
            </p>
            <p style={styles.testimonialAuthor}>- 小李，28岁</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "测评系统非常专业，给出的建议都很实用。让我对择偶有了更清晰的认识，
              也帮助我改善了一些不足。"
            </p>
            <p style={styles.testimonialAuthor}>- 小王，26岁</p>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "这个平台最吸引我的是它的科学性，不是简单的星座配对，而是基于
              心理学和数据分析。推荐给所有单身的朋友！"
            </p>
            <p style={styles.testimonialAuthor}>- 小张，30岁</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>开启您的幸福之旅</h2>
        <p style={styles.ctaText}>
          让AI助您找到最适合的伴侣，开启人生新篇章
        </p>
        <button 
          style={styles.button}
          onClick={handleStartTest}
        >
          立即开始测评
        </button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>关于我们</h3>
            <Link href="/about" style={styles.footerLink}>公��简介</Link>
            <Link href="/team" style={styles.footerLink}>团队介绍</Link>
            <Link href="/careers" style={styles.footerLink}>加入我们</Link>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>服务支持</h3>
            <Link href="/help" style={styles.footerLink}>帮助中心</Link>
            <Link href="/faq" style={styles.footerLink}>常见问题</Link>
            <Link href="/contact" style={styles.footerLink}>联系我们</Link>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>法律条款</h3>
            <Link href="/privacy" style={styles.footerLink}>隐私政策</Link>
            <Link href="/terms" style={styles.footerLink}>服务条款</Link>
            <Link href="/security" style={styles.footerLink}>安全说明</Link>
          </div>
          <div style={styles.footerSection}>
            <h3 style={styles.footerTitle}>关注我们</h3>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialIcon}>📱</a>
              <a href="#" style={styles.socialIcon}>💬</a>
              <a href="#" style={styles.socialIcon}>📧</a>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2024 AI婚恋. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        style={{
          ...styles.scrollTopButton,
          opacity: showScrollTop ? 0.9 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
        }}
        onClick={scrollToTop}
        aria-label="回到顶部"
      >
        ↑
      </button>
    </div>
  );
};

export default HomePage; 