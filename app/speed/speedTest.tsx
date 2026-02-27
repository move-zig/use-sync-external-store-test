'use client';

import type { ChangeEventHandler, FC } from 'react';
import { Fragment, useId, useLayoutEffect, useState } from 'react';

import styles from '@/app/common.module.scss';
import { ReaderNew } from '@/components/readerNew';
import { ReaderOld } from '@/components/readerOld';
import { Writer } from '@/components/writer';

type Mode = 'useEffect' | 'useSyncExternalStore';

const defaultCount = 600;

let startTime = 0;

export const SpeedTest: FC = () => {
  const id = useId();
  const [ count, setCount ] = useState(defaultCount);
  const [ mode, setMode ] = useState<Mode>('useEffect');
  const [ global, setGlobal ] = useState<number | undefined>(undefined);

  const handleChange = setGlobal;

  const handleClick = () => {
    setMode(m => (m === 'useEffect' ? 'useSyncExternalStore' : 'useEffect'));
  };

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = e => {
    setCount(parseInt(e.target.value, 10));
  };

  // Reset timer if this is a fresh mount
  if (startTime === 0) {
    // eslint-disable-next-line react-hooks/purity, react-hooks/globals
    startTime = performance.now();
  }

  // We use a LayoutEffect to measure exactly when the DOM is ready
  useLayoutEffect(() => {
    const duration = performance.now() - startTime;
    console.log(`%c TOTAL RENDER TIME (${mode}): ${duration.toFixed(2)}ms `, 'background: #222; color: #bada55');

    // Reset for the next resize test
    startTime = 0;
  });

  return (
    <>
      <label htmlFor={`${id}Count`}>Count</label>
      <br />
      <input id={`${id}Count`} type="number" onChange={handleCountChange} value={count} />
      <div>
        <h3>{mode}</h3>
        <button onClick={handleClick}>Switch</button>
      </div>
      <Writer onChange={handleChange} />
      <div className={styles.grid}>
        {Array.from({ length: 4 }, (_, i) => (
          <Fragment key={i}>
            <ReaderOld expected={global} />
            <ReaderNew expected={global} />
          </Fragment>
        ))}

        {Array.from({ length: count }, (_, i) => (
          mode === 'useEffect'
            ? <ReaderOld key={i} expected={global} />
            : <ReaderNew key={i} expected={global} />
        ))}
      </div>
    </>
  );
};
