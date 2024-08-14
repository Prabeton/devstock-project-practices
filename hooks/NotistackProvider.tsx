"use client"

import React, { ReactNode } from 'react';
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';

type NotistackProviderProps = Partial<SnackbarProviderProps> & {
  children: ReactNode;
};

const defaultProps: Partial<SnackbarProviderProps> = {
  maxSnack: 3,
};

export function NotistackProvider({ children, ...props }: NotistackProviderProps) {
  const mergedProps = { ...defaultProps, ...props };

  return (
    <SnackbarProvider {...mergedProps}>
      {children}
    </SnackbarProvider>
  );
}