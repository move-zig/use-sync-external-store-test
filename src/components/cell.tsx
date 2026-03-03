import type { FC } from 'react';

import styles from './cell.module.scss';
import { Triangle } from './triangle';

type Type = 'old' | 'new';

interface Props {
  type: Type;
  measured?: number;
  match: boolean;
}

export const Cell: FC<Props> = ({ type, measured: width, match }) => (
  <div className={`${styles.cell} ${match ? styles.match : styles.mismatch}`}>
    {type === 'new' && (
      <Triangle width="33%" className={styles.indicator} />
    )}
    <div>{width}</div>
  </div>
);
