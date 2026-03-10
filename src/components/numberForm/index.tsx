import type { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';
import { memo } from 'react';

import { createClamp } from './createClamp';

interface Props {
  label?: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  min?: number;
  max?: number;
  step?: number;
}

export const NumberForm: FC<Props> = memo(({ label = 'Count', value, setValue, min = 0, max = 10_000, step = 1 }) => {
  const clamp = createClamp(min, max);

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = e => {
    const c = parseInt(e.target.value, 10);
    if (isNaN(c)) {
      return;
    }
    setValue(clamp(c));
  };

  const handlePlusClick = () => {
    setValue(c => clamp(c + step));
  };

  const handleMinusClick = () => {
    setValue(c => clamp(c - step));
  };

  return (
    <div className="mb-3">
      <div className="flex gap-4">
        <label className="input w-48">
          <span className="label">{label}</span>
          <input onChange={handleCountChange} value={value} min={min} max={max} step={step} type="number" />
        </label>
        <div className="flex gap-2">
          <button onClick={handlePlusClick} className="btn min-w-12">+</button>
          <button onClick={handleMinusClick} className="btn min-w-12">-</button>
        </div>
        <input type="range" value={value} onChange={handleCountChange} min={min} max={max} step={step} />
      </div>
    </div>
  );
});
