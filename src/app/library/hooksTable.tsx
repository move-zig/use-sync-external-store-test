import type { FC } from 'react';

export const HooksTable: FC = () => (
  <table>
    <thead>
      <tr>
        <th>Value</th>
        <th>Event</th>
        <th>Standard</th>
        <th>Synchronous</th>
      </tr>
    </thead>
    <tbody>
      {otherHooks.map(hook => (
        <tr key={hook.name}>
          <td className="font-medium">{hook.value}{hook.starred && <> <span className="text-primary">*</span></>}</td>
          <td>{hook.event}</td>
          <td><span className="font-mono">use{hook.name}</span></td>
          <td><span className="font-mono">useSync{hook.name}</span></td>
        </tr>
      ))}
    </tbody>
  </table>
);

const otherHooks = [
  { name: 'ScrollY', event: 'scroll', value: 'scrollY' },
  { name: 'InnerWidth', event: 'resize', value: 'innerWidth' },
  { name: 'Online', event: 'online / offline', value: 'navigator.onLine', starred: true },
  { name: 'MediaQuery', event: 'change', value: 'match' },
];
