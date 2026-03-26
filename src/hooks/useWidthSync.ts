import { useSyncExternalStore } from 'react';

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener('resize', onStoreChange, { passive: true });
  return () => { window.removeEventListener('resize', onStoreChange); };
};

export const useWidthSync = (): number | undefined => {
  return useSyncExternalStore(subscribe, () => window.innerWidth, () => undefined);
};
