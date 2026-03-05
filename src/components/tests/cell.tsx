import type { FC } from 'react';

import styles from './cell.module.scss';
import { Triangle } from './triangle';

type Type = 'old' | 'new';

interface Props {
  type: Type;
  measured?: number;
  match: boolean;
}

export const Cell: FC<Props> = ({ type, measured, match }) => (
  <div className={`${styles.cell} ${styles[type]} ${match ? styles.match : styles.mismatch}`}>
    <Triangle width="33%" className={styles.indicator} />
    <div>{measured}</div>
  </div>
);
