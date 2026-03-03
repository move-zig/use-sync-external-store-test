'use client';

import type { FC, ProfilerOnRenderCallback, PropsWithChildren } from 'react';
import { useCallback, useState } from 'react';

import { Inner } from './inner';

interface Stats {
  id: string;
  phase: 'mount' | 'nested-update' | 'update';
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
}

interface Props {
  id: string;
}

export const Profiler: FC<PropsWithChildren<Props>> = ({ id: profilerId, children }) => {
  const [ records, setRecords ] = useState<Stats[]>([]);

  const handleRender: ProfilerOnRenderCallback = useCallback((id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    const stats: Stats = { id, phase, actualDuration, baseDuration, startTime, commitTime };
    console.log(stats);
    setRecords(r => [ ...r, stats ]);
  }, []);

  const handleResetClick = () => {
    setRecords([]);
  };

  return (
    <>
      <Inner id={profilerId} onRender={handleRender}>
        {children}
      </Inner>
      {records.length > 0 && (
        <div className="mt-4">
          <button onClick={handleResetClick} className="btn">Reset Stats</button>
          <h2>Stats</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Phase</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r, i) => (
                <tr key={i}>
                  <td>{r.id}</td>
                  <td>{r.phase}</td>
                  <td>{r.actualDuration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
