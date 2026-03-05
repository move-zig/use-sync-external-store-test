'use client';

import type { FC } from 'react';
import { useDeferredValue, useState } from 'react';

import { CellGrid } from './grid';
import { CountForm } from '../../countForm';
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
      <CountForm count={count} setCount={setCount} />
      <h2><strong>pairs of listeners:</strong> {deferredCount}</h2>
      <CellGrid count={deferredCount} canonical={canonical} />
    </>
  );
};
