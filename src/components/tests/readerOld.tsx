'use client';

import type { FC } from 'react';

import { Cell } from './cell';
// import { useScrollY } from '@/hooks/useScrollY';
import { useWidth } from '@/hooks/useWidth';

interface Props {
  expected?: number;
}

export const ReaderOld: FC<Props> = ({ expected }) => {
  // const measured = useScrollY();
  const measured = useWidth();

  const match = measured === expected;

  return <Cell type="old" measured={measured} match={match} />;
};
