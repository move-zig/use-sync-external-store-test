import { useSyncExternalStore } from 'react';

const subscribe = (onStoreChange: () => void): (() => void) => {
  onStoreChange();
  window.addEventListener('scroll', onStoreChange, { passive: true });

  return () => { window.removeEventListener('scroll', onStoreChange); };
};

const getSnapshot = () => window.scrollY;

const getServerSnapshot = () => undefined;

export const useScrollYSync = (): number | undefined => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
