'use client';

import type { FC } from 'react';
import { useReducer, useState } from 'react';

import { Form } from './form';
import { Profiler } from '@/components/profiler';
import { ReaderNew } from '@/components/readerNew';
import { ReaderOld } from '@/components/readerOld';
// import { useScrollY } from '@/hooks/useScrollY';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
// import { useWidth } from '@/hooks/useWidth';
import { useWidthSync } from '@/hooks/useWidthSync';

export type Type = 'old' | 'new';

interface Props {
  defaultCount?: number;
}

export const SpeedTest: FC<Props> = ({ defaultCount = 0 }) => {
  // const canonical = useScrollY();
  // const canonical = useScrollYSync();
  // const canonical = useWidth();
  const canonical = useWidthSync();
  const [ count, setCount ] = useState(defaultCount);
  const [ type, toggleType ] = useReducer<Type, []>(v => (v === 'old' ? 'new' : 'old'), 'old');

  const handleToggle = toggleType;

  return (
    <>
      <Form count={count} setCount={setCount} type={type} onTypeToggle={handleToggle} />
      <h2>Showing {count} {type} listener{count !== 1 ? 's' : ''}...</h2>
      <Profiler id={type}>
        <div className="cellGrid">
          {Array.from(
            { length: count },
            (_, i) => (type === 'old' ? <ReaderOld key={i} expected={canonical} /> : <ReaderNew key={i} expected={canonical} />),
          )}
        </div>
      </Profiler>
    </>
  );
};
