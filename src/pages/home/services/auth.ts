interface LoginParams {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterParams {
  nickname: string;
  email: string;
  password: string;
  gender: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    nickname: string;
    email: string;
    avatar?: string;
    gender: string;
  };
}

class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}

export const authService = {
  async login(params: LoginParams): Promise<AuthResponse> {
    try {
      // TODO: 替换为实际的API调用
      const response = await new Promise<AuthResponse>((resolve, reject) => {
        setTimeout(() => {
          // 模拟API响应
          if (params.email === 'test@example.com' && params.password === 'Test123') {
            resolve({
              token: 'mock_token',
              user: {
                id: '1',
                nickname: '测试用户',
                email: params.email,
                gender: 'male'
              }
            });
          } else {
            reject(new AuthError('邮箱或密码错误'));
          }
        }, 1000);
      });

      if (params.rememberMe) {
        localStorage.setItem('auth_token', response.token);
      } else {
        sessionStorage.setItem('auth_token', response.token);
      }

      return response;
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError('登录失败，请稍后重试');
    }
  },

  async register(params: RegisterParams): Promise<AuthResponse> {
    try {
      // TODO: 替换为实际的API调用
      const response = await new Promise<AuthResponse>((resolve, reject) => {
        setTimeout(() => {
          // 模拟API响应
          if (params.email.includes('@')) {
            resolve({
              token: 'mock_token',
              user: {
                id: '1',
                nickname: params.nickname,
                email: params.email,
                gender: params.gender
              }
            });
          } else {
            reject(new AuthError('注册失败，邮箱已被使用'));
          }
        }, 1000);
      });

      sessionStorage.setItem('auth_token', response.token);
      return response;
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError('注册失败，请稍后重试');
    }
  },

  async logout(): Promise<void> {
    // TODO: 替换为实际的API调用
    await new Promise(resolve => setTimeout(resolve, 500));
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
  },

  async checkAuth(): Promise<AuthResponse | null> {
    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    if (!token) return null;

    try {
      // TODO: 替换为实际的API调用
      return await new Promise<AuthResponse>(resolve => {
        setTimeout(() => {
          resolve({
            token,
            user: {
              id: '1',
              nickname: '测试用户',
              email: 'test@example.com',
              gender: 'male'
            }
          });
        }, 500);
      });
    } catch {
      return null;
    }
  }
}; 