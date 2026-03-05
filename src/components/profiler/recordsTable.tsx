import type { FC } from 'react';

import type { ProfilerStats } from '.';

interface Props {
  records: ProfilerStats[];
}

export const RecordsTable: FC<Props> = ({ records }) => (
  <table>
    <thead>
      <tr><th>ID</th><th>Phase</th><th>Duration</th></tr>
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
);
