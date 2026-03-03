import { useEffect, useState } from 'react';

export const useScrollY = (): number | undefined => {
  const [ scrollY, setScrollY ] = useState<number | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScrollY(window.scrollY);
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });

    return () => { window.removeEventListener('scroll', handler); };
  }, []);

  return scrollY;
};
