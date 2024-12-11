import React, { useState, ChangeEvent, FormEvent } from 'react';
import { validateEmail, validatePassword, validateNickname } from '../utils/validation';
import { useUser } from '../contexts/UserContext';
import styles from '../styles/LoginModal.module.css';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitch: () => void;
}

interface FormData {
  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  agreement: boolean;
}

interface FormErrors {
  nickname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  agreement?: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSwitch }) => {
  const { register } = useUser();
  const [formData, setFormData] = useState<FormData>({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    agreement: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

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

  const handleSubmit = async (e: FormEvent) => {
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
      console.error('Registration failed:', error);
      setErrors(prev => ({
        ...prev,
        submit: '注册失败，请重试'
      }));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.content}>
        <h2>注册账号</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nickname">昵称</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleInputChange}
              className={errors.nickname ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.nickname && <span className={styles.error}>{errors.nickname}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">邮箱</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={errors.password ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">确认密码</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={errors.confirmPassword ? styles.inputError : ''}
              disabled={isLoading}
            />
            {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>性别</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <span>男</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <span>女</span>
              </label>
            </div>
            {errors.gender && <span className={styles.error}>{errors.gender}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
                disabled={isLoading}
              />
              <span>我已阅读并同意<a href="/terms">用户协议</a></span>
            </label>
            {errors.agreement && <span className={styles.error}>{errors.agreement}</span>}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? '注册中...' : '注册'}
          </button>
        </form>

        <p className={styles.switchMode}>
          已有账号？
          <button onClick={onSwitch} disabled={isLoading}>
            立即登录
          </button>
        </p>
      </div>
    </div>
  );
}; 