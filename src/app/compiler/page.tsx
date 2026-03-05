'use client';

import { useSyncExternalStore } from 'react';

import type { PageComponent } from '@/src/serverComponent';

const CompilerPage: PageComponent = () => {
  const width = useSyncExternalStore(
    onStoreChange => {
      window.addEventListener('resize', onStoreChange, { passive: true });
      return () => { window.removeEventListener('resize', onStoreChange); };
    },
    () => window.innerWidth,
    () => undefined,
  );

  return (
    <div className="container">
      <h1>React Compiler</h1>
      Width: { width }
    </div>
  );
};

export default CompilerPage;
