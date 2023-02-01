import { useEffect, useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    try {
      // 获取初始数据
      const { count = 0 } = window.__INIT_DATA__;
      setCount(count);
    } catch(e) {}
  }, []);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>add count</button>
    </div>
  )
}


