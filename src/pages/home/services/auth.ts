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
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new AuthError('登录失败，请检查邮箱和密码');
      }

      const data = await response.json();
      if (params.rememberMe) {
        localStorage.setItem('auth_token', data.token);
      } else {
        sessionStorage.setItem('auth_token', data.token);
      }

      return data;
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError('登录失败，请稍后重试');
    }
  },

  async register(params: RegisterParams): Promise<AuthResponse> {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new AuthError('注册失败，请稍后重试');
      }

      const data = await response.json();
      sessionStorage.setItem('auth_token', data.token);
      return data;
    } catch (error) {
      if (error instanceof AuthError) {
        throw error;
      }
      throw new AuthError('注册失败，请稍后重试');
    }
  },

  async logout(): Promise<void> {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
  },

  async checkAuth(): Promise<AuthResponse | null> {
    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    if (!token) return null;

    try {
      const response = await fetch('/api/auth/check', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Invalid token');
      }

      return await response.json();
    } catch {
      localStorage.removeItem('auth_token');
      sessionStorage.removeItem('auth_token');
      return null;
    }
  },
}; 