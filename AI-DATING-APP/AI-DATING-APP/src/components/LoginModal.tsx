import React, { useState } from 'react';
import { validateEmail, validatePassword } from '../utils/validation';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitch: () => void;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitch }) => {
  const { login } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await login(formData.email, formData.password, formData.rememberMe);
      onClose();
    } catch (error) {
      setErrors({ 
        general: error instanceof Error ? error.message : '登录失败，请稍后重试'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="关闭"
        >
          ✕
        </button>
        <h2>登录</h2>
        {errors.general && (
          <div className={styles.error}>{errors.general}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">邮箱</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={errors.email ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className={errors.password ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.password && (
              <span className={styles.errorText}>{errors.password}</span>
            )}
          </div>
          <div className={styles.formOptions}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={e => setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}
                disabled={isLoading}
              />
              <span>记住登录</span>
            </label>
            <a href="/forgot-password" className={styles.forgotPassword}>
              忘记密码？
            </a>
          </div>
          <div className={styles.formActions}>
            <button 
              type="submit" 
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? '登录中...' : '登录'}
            </button>
          </div>
        </form>
        <div className={styles.switchPrompt}>
          还没有账号？
          <button 
            onClick={onSwitch} 
            className={styles.switchButton}
            disabled={isLoading}
          >
            立即注册
          </button>
        </div>
      </div>
    </div>
  );
}; 