'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { Form } from './form';
import { ReaderNew } from '@/components/tests/readerNew';
import { ReaderOld } from '@/components/tests/readerOld';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';
import { useWidthSync } from '@/hooks/useWidthSync';

interface Props {
  defaultCount?: number;
}

export const TearTest: FC<Props> = ({ defaultCount = 0 }) => {
  // const canonical = useScrollY();
  // const canonical = useScrollYSync();
  // const canonical = useWidth();
  const canonical = useWidthSync();
  const [ count, setCount ] = useState(defaultCount);

  return (
    <>
      <Form count={count} setCount={setCount} />
      <h2>Showing {count} pair{count !== 1 ? 's' : ''} of listeners...</h2>
      <div className="cellGrid">
        {Array.from(
          { length: count * 2 },
          (_, i) => (i % 2 === 0 ? <ReaderOld key={i} expected={canonical} /> : <ReaderNew key={i} expected={canonical} />),
        )}
      </div>
    </>
  );
};
