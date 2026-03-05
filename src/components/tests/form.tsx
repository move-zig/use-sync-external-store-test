import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';
import { memo, useCallback } from 'react';

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  max?: number;
}

export const Form: FC<Props> = memo(({ count, setCount, max = 10_000 }) => {
  const clamp = useCallback((n: number): number => Math.min(Math.max(n, 0), max), [ max ]);

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = e => {
    const c = parseInt(e.target.value, 10);
    if (isNaN(c)) {
      return;
    }
    setCount(clamp(c));
  };

  const handlePlusClick = () => {
    setCount(c => clamp(c + 1));
  };

  const handleMinusClick = () => {
    setCount(c => clamp(c - 1));
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
        <input type="range" value={count} onChange={handleCountChange} max={max} />
      </div>
    </div>
  );
});
