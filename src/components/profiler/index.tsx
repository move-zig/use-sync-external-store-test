'use client';

import type { FC, ProfilerOnRenderCallback, PropsWithChildren } from 'react';
import { memo, useCallback, useDeferredValue, useState } from 'react';

import { Inner } from './inner';
import { RecordsTable } from './recordsTable';

export interface ProfilerStats {
  id: string;
  phase: 'mount' | 'nested-update' | 'update';
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
}

interface Props {
  id: string;
  visual?: boolean;
}

/**
 * Profiles its children and provides a
 */
export const Profiler: FC<PropsWithChildren<Props>> = memo(({ id: profilerId, visual = false, children }) => {
  const [ records, setRecords ] = useState<ProfilerStats[]>([]);
  const deferredRecords = useDeferredValue(records);

  const handleRender: ProfilerOnRenderCallback = useCallback((id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    const stats: ProfilerStats = { id, phase, actualDuration, baseDuration, startTime, commitTime };
    if (visual) {
      setRecords(r => [ ...r, stats ]);
    } else {
      console.log(stats);
    }
  }, [ visual ]);

  const handleResetClick = useCallback(() => {
    setRecords([]);
  }, []);

  return (
    <>
      <Inner id={profilerId} onRender={handleRender}>
        {children}
      </Inner>
      {deferredRecords.length > 0 && (
        <RecordsTable records={deferredRecords} onResetClick={handleResetClick} />
      )}
    </>
  );
});
