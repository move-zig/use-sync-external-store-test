'use client';

import type { FC } from 'react';
import { useDeferredValue, useState } from 'react';

import { Form } from '../form';
import { ReaderNew } from '../readerNew';
import { ReaderOld } from '../readerOld';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';
import { useWidthSync } from '@/hooks/useWidthSync';

interface Props {
  defaultCount?: number;
}

export const TearTest: FC<Props> = ({ defaultCount = 0 }) => {
  const [ count, setCount ] = useState(defaultCount);
  const deferredCount = useDeferredValue(count);

  // const canonical = useScrollY();
  // const canonical = useScrollYSync();
  // const canonical = useWidth();
  const canonical = useWidthSync();

  return (
    <>
      <Form count={count} setCount={setCount} />
      <h2>Showing {deferredCount} pair{deferredCount !== 1 ? 's' : ''} of listeners...</h2>
      <div className="cellGrid">
        {Array.from(
          { length: deferredCount * 2 },
          (_, i) => (i % 2 === 0 ? <ReaderOld key={i} expected={canonical} /> : <ReaderNew key={i} expected={canonical} />),
        )}
      </div>
    </>
  );
};
