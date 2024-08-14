"use client"

import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

import ErrorBoundary from './ErrorBoundary';

type AppContextProps = {
  children: ReactNode;
}

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
		    <ErrorBoundary>
          <React.Suspense fallback={<div>Loading...</div>}>
            {children}
          </React.Suspense>
        </ErrorBoundary>
      </SnackbarProvider>
    </QueryClientProvider>
  );
};
export default AppContext;