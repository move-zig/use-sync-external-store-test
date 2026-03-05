'use client';

import type { FC } from 'react';

import { Cell } from './cell';
// import { useScrollYSync } from '@/hooks/useScrollYSync';
import { useWidthSync } from '@/hooks/useWidthSync';

interface Props {
  expected?: number;
}

export const ReaderNew: FC<Props> = ({ expected }) => {
  // const measured = useScrollYSync();
  const measured = useWidthSync();

  const match = measured === expected;

  return <Cell type="new" measured={measured} match={match} />;
};
