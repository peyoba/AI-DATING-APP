import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  // 模拟登录验证
  if (email === 'test@example.com' && password === 'Test123') {
    return res.status(200).json({
      token: 'mock_token',
      user: {
        id: '1',
        nickname: '测试用户',
        email,
        gender: 'male'
      }
    });
  }

  return res.status(401).json({ message: '邮箱或密码错误' });
} 