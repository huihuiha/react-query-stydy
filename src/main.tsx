import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// context
import { globalContext } from './context/index';

// 创建一个客户端实例
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <globalContext.Provider value={{ theme: '123' }}>
      <App />
    </globalContext.Provider>
  </QueryClientProvider>
);
