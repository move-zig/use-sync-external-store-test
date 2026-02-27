'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { useSyncExternalStoreWindowListener } from 'use-event-listener';

interface Props {
  onChange: (width: number | undefined) => void;
}

const valueSelector = (w: Window) => w.innerWidth;

export const Writer: FC<Props> = ({ onChange }) => {
  const width = useSyncExternalStoreWindowListener('resize', valueSelector);

  useEffect(() => {
    onChange(width);
  }, [ onChange, width ]);

  return (
    <h2><strong>Width: {width}</strong></h2>
  );
};
