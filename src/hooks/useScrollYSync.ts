import { useSyncExternalStore } from 'react';

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener('scroll', onStoreChange, { passive: true });
  return () => { window.removeEventListener('scroll', onStoreChange); };
};

export const useScrollYSync = (): number | undefined => {
  return useSyncExternalStore(subscribe, () => window.scrollY, () => undefined);
};
