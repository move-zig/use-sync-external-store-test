'use client';

import type { FC } from 'react';
import { useDeferredValue, useMemo, useReducer, useState } from 'react';

import { CellGrid } from './grid';
import { NumberForm } from '../../numberForm';
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

  // otherwise what we're profiling will be recreated for unrelated state changes
  const grid = useMemo(() => (
    <CellGrid count={deferredCount} canonical={canonical} type={type} />
  ), [ deferredCount, canonical, type ]);

  return (
    <>
      <NumberForm value={count} setValue={setCount} max={max} />
      <button onClick={handleToggle} className="btn">Switch to {type === 'old' ? 'new' : 'old'}</button>
      <h2><strong>{type} listeners</strong>: {deferredCount}</h2>
      <Profiler id={type} visual>
        {grid}
      </Profiler>
    </>
  );
};
