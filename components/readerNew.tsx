'use client';

import type { FC } from 'react';
import { useSyncExternalStoreWindowListener } from 'use-event-listener';

import styles from './reader.module.scss';

interface Props {
  expected?: number;
}

const valueSelector = (w: Window) => w.innerWidth;

export const ReaderNew: FC<Props> = ({ expected }) => {
  const width = useSyncExternalStoreWindowListener('resize', valueSelector);

  const match = width === expected;

  return (
    <div className={`${styles.box} ${match ? styles.match : styles.mismatch}`}>
      <div><strong>Sync</strong></div>
      <div>{width}</div>
    </div>
  );
};
