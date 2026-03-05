import type { FC } from 'react';
import { memo } from 'react';

import type { Type } from '.';
import { ReaderNew } from '../readerNew';
import { ReaderOld } from '../readerOld';

interface Props {
  count: number;
  canonical?: number;
  type: Type;
}

export const CellGrid: FC<Props> = memo(({ count, canonical, type }) => (
  <div className="cellGrid">
    {Array.from(
      { length: count },
      (_, i) => (type === 'old' ? <ReaderOld key={i} expected={canonical} /> : <ReaderNew key={i} expected={canonical} />),
    )}
  </div>
));
