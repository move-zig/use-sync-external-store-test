import { useEffect, useState } from 'react';

export const useWidth = (): number | undefined => {
  const [ width, setWidth ] = useState<number>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWidth(window.innerWidth);

    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler, { passive: true });

    return () => { window.removeEventListener('resize', handler); };
  }, []);

  return width;
};
