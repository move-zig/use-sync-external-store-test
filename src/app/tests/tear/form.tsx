'use client';

import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const Form: FC<Props> = ({ count, setCount }) => {

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
  );
};
