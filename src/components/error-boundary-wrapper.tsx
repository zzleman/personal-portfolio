'use client';

import { ErrorBoundary } from './error-boundary';
import { Header, Footer } from './layout';

export function ErrorBoundaryWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </ErrorBoundary>
  );
}

