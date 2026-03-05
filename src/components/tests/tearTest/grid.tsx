'use client';

import type { FC } from 'react';
import { memo } from 'react';

import { ReaderNew } from '../readerNew';
import { ReaderOld } from '../readerOld';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';

interface Props {
  count: number;
  canonical?: number;
}

export const CellGrid: FC<Props> = memo(({ count, canonical }) => (
  <div className="cellGrid">
    {Array.from(
      { length: count * 2 },
      (_, i) => (i % 2 === 0 ? <ReaderOld key={i} expected={canonical} /> : <ReaderNew key={i} expected={canonical} />),
    )}
  </div>
));
