// 邮箱验证
export const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return '邮箱不能为空';
  if (!emailRegex.test(email)) return '请输入有效的邮箱地址';
  return '';
};

// 密码验证
export const validatePassword = (password: string): string => {
  if (!password) return '密码不能为空';
  if (password.length < 8) return '密码长度至少8位';
  
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  
  if (!hasLetter || !hasNumber) {
    return '密码必须包含字母和数字';
  }
  
  return '';
}; 