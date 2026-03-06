'use client';

import type { FC } from 'react';
import { useDeferredValue, useReducer, useState } from 'react';

import { CellGrid } from './grid';
import { CountForm } from '../../countForm';
import { Profiler } from '@/components/profiler';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';
import { useWidthSync } from '@/hooks/useWidthSync';

export type Type = 'old' | 'new';

interface Props {
  defaultCount?: number;
  max?: number;
}

export const SpeedTest: FC<Props> = ({ defaultCount = 0, max }) => {
  const [ count, setCount ] = useState(defaultCount);
  const deferredCount = useDeferredValue(count);
  const [ type, handleToggle ] = useReducer<Type, []>(v => (v === 'old' ? 'new' : 'old'), 'old');

  // const canonical = useScrollY();
  // const canonical = useScrollYSync();
  // const canonical = useWidth();
  const canonical = useWidthSync();

  return (
    <>
      <CountForm count={count} setCount={setCount} max={max} />
      <button onClick={handleToggle} className="btn">Switch to {type === 'old' ? 'new' : 'old'}</button>
      <h2><strong>{type} listeners</strong>: {deferredCount}</h2>
      <Profiler id={type}>
        <CellGrid count={deferredCount} canonical={canonical} type={type} />
      </Profiler>
    </>
  );
};
