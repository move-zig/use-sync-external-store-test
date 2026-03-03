'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useState } from 'react';

import { ReaderNew } from '@/components/readerNew';
import { ReaderOld } from '@/components/readerOld';
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

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = e => {
    const c = parseInt(e.target.value, 10);
    if (!isNaN(c) && c >= 0) {
      setCount(c);
    }
  };

  const handlePlusClick = () => {
    setCount(c => (c < Number.MAX_SAFE_INTEGER ? c + 1 : c));
  };

  const handleMinusClick = () => {
    setCount(c => (c > 0 ? c - 1 : c));
  };

  return (
    <>
      <div className="mb-3">
        <div className="flex gap-4">
          <label className="input w-48">
            <span className="label">Count</span>
            <input onChange={handleCountChange} value={count} type="number" />
          </label>
          <div className="flex gap-2">
            <button onClick={handlePlusClick} className="btn min-w-12">+</button>
            <button onClick={handleMinusClick} className="btn min-w-12">-</button>
          </div>
        </div>
      </div>
      <div className="cellGrid">
        {Array.from(
          { length: count * 2 },
          (_, i) => (i % 2 === 0 ? <ReaderOld key={i} expected={canonical} /> : <ReaderNew key={i} expected={canonical} />),
        )}
      </div>
    </>
  );
};
