import type { Metadata } from 'next';
import Link from 'next/link';

import { CodeBlock } from '@/components/codeBlock';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'use-window-listener Library',
  alternates: { canonical: '/library' },
};

const LibraryPage: PageComponent = () => (
  <div className="container">
    <h1>The <span className="font-mono">use-window-listener</span> Library</h1>
    <CodeBlock language="bash" code={`$ npm i use-window-listener`} />
    <h2>The <span className="font-mono">useWindowListener</span> Hook</h2>
    <p>Use this hook to create your own window listeners in a streamlined way.</p>
    <h3>Example</h3>
    <p>Just like with <span className="font-mono">useSyncExternalStore</span>, it's important that the value selector here is referentially stable.</p>
    <CodeBlock code={useWidthLibraryCode} />
    <p>If you depend on some other value, you can use <span className="font-mono">useCallback</span> to provide referential stability.</p>
    <CodeBlock code={useWidthLibraryCode2} />
    <h2>The <span className="font-mono">useSyncWindowListener</span> Hook</h2>
    <p>Same API, but uses <span className="font-mono">useSyncExternalStore</span> under the hood.</p>
    <h2>Other Built-in Hooks</h2>
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
    <h3>Example</h3>
    <CodeBlock code={otherHookExample} showLineNumbers className="mb-5" />
    <div className="alert alert-outline alert-info">
      <strong className="text-info">Note:</strong> Listening for change events on a MediaQueryList is Less expensive than listening for resize events.
    </div>
  </div>
);

const otherHooks = [
  { name: 'ScrollY', event: 'scroll', value: 'scrollY' },
  { name: 'InnerWidth', event: 'resize', value: 'innerWidth' },
  { name: 'Online', event: 'online / offline', value: 'navigator.onLine', starred: true },
  { name: 'MediaQuery', event: 'change', value: 'match' },
];

export default LibraryPage;

const useWidthLibraryCode = `import { useWindowListener } from 'use-window-listener';

const valueSelector = (w: Window) => window.innerWidth; // module scope for stable reference

export const useWidth = (): number | undefined => {
  return useWindowListener('resize', valueSelector);
};
`;

const useWidthLibraryCode2 = `import { useWindowListener } from 'use-window-listener';

export const useScaledWidth = (scale: number): number | undefined => {
  const valueSelector = useCallback((w: Window) => window.innerWidth * scale, [ scale ]);
  return useWindowListener('resize', valueSelector);
};`;

const otherHookExample = `import type { FC } from 'react';
import { useMediaQuery } from 'use-window-listener';

export const MyComponent: FC = () => {
  const isBigScreen = useMediaQuery('(min-width: 1000px)');

  return (
    <div>
      {isBigScreen ? <>...</> : <>...</>}
    </div>
  )
};`;
