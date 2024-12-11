// 测试结果缓存
export const cacheTestResult = (userId: string, result: any) => {
  try {
    localStorage.setItem(
      `test_result_${userId}`,
      JSON.stringify({
        data: result,
        timestamp: Date.now()
      })
    );
  } catch (error) {
    console.error('Cache save failed:', error);
  }
};

// 获取缓存的测试结果
export const getCachedTestResult = (userId: string) => {
  try {
    const cached = localStorage.getItem(`test_result_${userId}`);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    
    // 缓存24小时有效
    if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
      localStorage.removeItem(`test_result_${userId}`);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Cache read failed:', error);
    return null;
  }
}; 