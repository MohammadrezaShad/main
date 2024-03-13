'use client';

import React from 'react';
import {QueryClient, QueryClientProvider as QCProvider} from '@tanstack/react-query';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';

type QueryClientProviderProps = {
  children: React.ReactNode;
};

export default function QueryClientProvider({children}: QueryClientProviderProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnReconnect: false,
            refetchOnMount: false,
            retry: 3,
          },
        },
      }),
  );
  return (
    <QCProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
    </QCProvider>
  );
}
