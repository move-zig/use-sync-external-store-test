import Link from 'next/link';
import type { FC } from 'react';

export const HooksTable: FC = () => (
  <>
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
    <p className="text-m"><strong>*</strong> Like the React docs example <Link target="_blank" rel="noopener" href="https://react.dev/reference/react/useSyncExternalStore">https://react.dev/reference/react/useSyncExternalStore</Link></p>
  </>
);

const otherHooks = [
  { name: 'ScrollY', event: 'scroll', value: 'scrollY' },
  { name: 'InnerWidth', event: 'resize', value: 'innerWidth' },
  { name: 'Online', event: 'online / offline', value: 'navigator.onLine', starred: true },
  { name: 'MediaQuery', event: 'change', value: 'match' },
];
