import { useSyncExternalStore } from 'react';

const subscribe = (onStoreChange: () => void): (() => void) => {
  onStoreChange();
  window.addEventListener('resize', onStoreChange, { passive: true });

  return () => { window.removeEventListener('resize', onStoreChange); };
};

const getSnapshot = () => window.innerWidth;

const getServerSnapshot = () => undefined;

export const useWidthSync = (): number | undefined => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};
