'use client';

import type { FC } from 'react';
import { useDeferredValue, useState } from 'react';

import { Form } from '../form';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';
import { CellGrid } from './grid';
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
      <CellGrid count={deferredCount} canonical={canonical} />
    </>
  );
};
