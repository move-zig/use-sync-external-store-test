'use client';

import type { FC } from 'react';
import { useWindowListener } from 'use-window-listener';

import styles from './reader.module.scss';

interface Props {
  expected?: number;
}

const valueSelector = (w: Window) => w.innerWidth;

export const ReaderOld: FC<Props> = ({ expected }) => {
  const width = useWindowListener('resize', valueSelector);
  const match = width === expected;

  return (
    <div className={`${styles.box} ${match ? styles.match : styles.mismatch}`}>
      <strong>UseState</strong>
      {width}
    </div>
  );
};
