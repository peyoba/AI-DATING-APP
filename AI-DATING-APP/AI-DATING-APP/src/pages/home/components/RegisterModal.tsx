import React, { useState } from 'react';
import { validateEmail, validatePassword, validateNickname } from '../utils/validation';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/LoginModal.module.css';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitch: () => void;
}

interface FormErrors {
  nickname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  agreement?: string;
  general?: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSwitch }) => {
  const { register } = useUser();
  const [formData, setFormData] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    agreement: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const nicknameError = validateNickname(formData.nickname);
    if (nicknameError) newErrors.nickname = nicknameError;

    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '两次输入的密码不一致';
    }

    if (!formData.gender) {
      newErrors.gender = '请选择性别';
    }

    if (!formData.agreement) {
      newErrors.agreement = '请阅读并同意用户协议';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await register({
        nickname: formData.nickname,
        email: formData.email,
        password: formData.password,
        gender: formData.gender
      });
      onClose();
    } catch (error) {
      setErrors({ 
        general: error instanceof Error ? error.message : '注册失败，请稍后重试'
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
        <h2>注册</h2>
        {errors.general && (
          <div className={styles.error}>{errors.general}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nickname">昵称</label>
            <input
              type="text"
              id="nickname"
              value={formData.nickname}
              onChange={e => setFormData(prev => ({ ...prev, nickname: e.target.value }))}
              className={errors.nickname ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.nickname && (
              <span className={styles.errorText}>{errors.nickname}</span>
            )}
          </div>
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
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">确认密码</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={e => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
              className={errors.confirmPassword ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <span className={styles.errorText}>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>性别</label>
            <div className={styles.radioGroup}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={e => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                  disabled={isLoading}
                />
                <span>男</span>
              </label>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={e => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                  disabled={isLoading}
                />
                <span>女</span>
              </label>
            </div>
            {errors.gender && (
              <span className={styles.errorText}>{errors.gender}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={formData.agreement}
                onChange={e => setFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                disabled={isLoading}
              />
              <span>
                我已阅读并同意
                <a href="/terms" target="_blank" className={styles.link}>
                  《用户协议》
                </a>
                和
                <a href="/privacy" target="_blank" className={styles.link}>
                  《隐私政策》
                </a>
              </span>
            </label>
            {errors.agreement && (
              <span className={styles.errorText}>{errors.agreement}</span>
            )}
          </div>
          <div className={styles.formActions}>
            <button 
              type="submit" 
              className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? '注册中...' : '注册'}
            </button>
          </div>
        </form>
        <div className={styles.switchPrompt}>
          已有账号？
          <button 
            onClick={onSwitch} 
            className={styles.switchButton}
            disabled={isLoading}
          >
            立即登录
          </button>
        </div>
      </div>
    </div>
  );
}; 