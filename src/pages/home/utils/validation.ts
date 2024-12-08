export const validateEmail = (email: string): string | null => {
  if (!email) return '请输入邮箱';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return '请输入有效的邮箱地址';
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) return '请输入密码';
  if (password.length < 6) {
    return '密码长度不能少于6位';
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    return '密码必须包含大小写字母和数字';
  }
  return null;
};

export const validateNickname = (nickname: string): string | null => {
  if (!nickname) return '请输入昵称';
  if (nickname.length < 2 || nickname.length > 20) {
    return '昵称长度应在2-20个字符之间';
  }
  return null;
}; 