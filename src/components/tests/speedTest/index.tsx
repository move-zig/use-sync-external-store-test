'use client';

import type { FC } from 'react';
import { useDeferredValue, useReducer, useState } from 'react';

import { Form } from '../form';
import { CellGrid } from './grid';
import { Profiler } from '@/components/profiler';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';
import { useWidthSync } from '@/hooks/useWidthSync';

export type Type = 'old' | 'new';

interface Props {
  defaultCount?: number;
}

export const SpeedTest: FC<Props> = ({ defaultCount = 0 }) => {
  const [ count, setCount ] = useState(defaultCount);
  const deferredCount = useDeferredValue(count);
  const [ type, toggleType ] = useReducer<Type, []>(v => (v === 'old' ? 'new' : 'old'), 'old');

  // const canonical = useScrollY();
  // const canonical = useScrollYSync();
  // const canonical = useWidth();
  const canonical = useWidthSync();

  const handleToggle = toggleType;

  return (
    <>
      <Form count={count} setCount={setCount} />
      <button onClick={handleToggle} className="btn">Switch to {type === 'old' ? 'new' : 'old'}</button>
      <h2>Showing {deferredCount} {type} listener{deferredCount !== 1 ? 's' : ''}...</h2>
      <Profiler id={type}>
        <CellGrid count={deferredCount} canonical={canonical} type={type} />
      </Profiler>
    </>
  );
};
