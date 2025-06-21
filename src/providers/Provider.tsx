import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/config/queryClient/queryClient';

import { SplitProvider } from './SplitProvider';

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SplitProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SplitProvider>
  );
}

export default Provider;
