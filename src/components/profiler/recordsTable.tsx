import { type FC, memo } from 'react';

import type { ProfilerStats } from '.';

interface Props {
  records: ProfilerStats[];
  onResetClick: () => void;
}

export const RecordsTable: FC<Props> = memo(({ records, onResetClick: handleResetClick }) => (
  <div className="mt-4">
    <button onClick={handleResetClick} className="btn">Reset Stats</button>
    <h2>Stats</h2>
    <table>
      <thead>
        <tr><th>Count</th><th>ID</th><th>Phase</th><th>Duration</th></tr>
      </thead>
      <tbody>
        {records.map((r, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{r.id}</td>
            <td>{r.phase}</td>
            <td>{r.actualDuration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));
