import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';
import { memo } from 'react';

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
  step?: number;
}

export const CountForm: FC<Props> = memo(({ count, setCount, min = 0, max = 10_000, step = 1 }) => {
  const clamp = (n: number): number => Math.min(Math.max(n, min), max);

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = e => {
    const c = parseInt(e.target.value, 10);
    if (isNaN(c)) {
      return;
    }
    setCount(clamp(c));
  };

  const handlePlusClick = () => {
    setCount(c => clamp(c + step));
  };

  const handleMinusClick = () => {
    setCount(c => clamp(c - step));
  };

  return (
    <div className="mb-3">
      <div className="flex gap-4">
        <label className="input w-48">
          <span className="label">Count</span>
          <input onChange={handleCountChange} value={count} min={min} max={max} step={step} type="number" />
        </label>
        <div className="flex gap-2">
          <button onClick={handlePlusClick} className="btn min-w-12">+</button>
          <button onClick={handleMinusClick} className="btn min-w-12">-</button>
        </div>
        <input type="range" value={count} onChange={handleCountChange} min={min} max={max} step={step} />
      </div>
    </div>
  );
});
