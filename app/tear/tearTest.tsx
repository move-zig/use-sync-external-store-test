'use client';

import type { ChangeEventHandler, FC } from 'react';
import { useId, useState } from 'react';

import styles from '@/app/common.module.scss';
import { ReaderNew } from '@/components/readerNew';
import { ReaderOld } from '@/components/readerOld';
import { Writer } from '@/components/writer';

const defaultCount = 4;

export const TearTest: FC = () => {
  const id = useId();
  const [ count, setCount ] = useState(defaultCount);
  const [ global, setGlobal ] = useState<number | undefined>(undefined);

  const handleChange = setGlobal;

  const handleCountChange: ChangeEventHandler<HTMLInputElement> = e => {
    setCount(parseInt(e.target.value, 10));
  };

  return (
    <>
      <label htmlFor={`${id}Count`}>Count</label>
      <br />
      <input id={`${id}Count`} type="number" onChange={handleCountChange} value={count} />
      <Writer onChange={handleChange} />
      <div className={styles.grid}>
        {Array.from({ length: count }, (_, i) => (
          <ReaderNew key={i} expected={global} />
        ))}
        {Array.from({ length: count }, (_, i) => (
          <ReaderOld key={i} expected={global} />
        ))}
      </div>
    </>
  );
};
