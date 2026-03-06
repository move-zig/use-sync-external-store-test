import type { Metadata } from 'next';
import Link from 'next/link';

import { HooksTable } from './hooksTable';
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
    <p>Use this hook to create your own window listeners.</p>
    <h3>Examples</h3>
    <p>Just like with <span className="font-mono">useSyncExternalStore</span>, it's important that the value selector here is <em>referentially stable</em>.</p>
    <CodeBlock code={useWidthLibraryCode} />
    <p>If you depend on some other value, you can use <span className="font-mono">useCallback</span> to provide referential stability.</p>
    <CodeBlock code={useWidthLibraryCode2} />
    <p>With <Link href="https://react.dev/learn/react-compiler" target="_blank" rel="noopener">React Compiler</Link> enabled you don't even have to think about it.</p>
    <CodeBlock code={useWidthLibraryCode3} />
    <h2>The <span className="font-mono">useSyncWindowListener</span> Hook</h2>
    <p>Same API, but uses <span className="font-mono">useSyncExternalStore</span> under the hood.</p>
    <h2>Other Built-in Hooks</h2>
    <HooksTable />
    <h3>Example</h3>
    <CodeBlock code={otherHookExample} showLineNumbers className="mb-5" />
    <div className="alert alert-outline alert-info">
      <strong className="text-info">Note:</strong> Listening for change events on a MediaQueryList is Less expensive than listening for resize events.
    </div>
  </div>
);

export default LibraryPage;

const useWidthLibraryCode = `import { useWindowListener } from 'use-window-listener';

const valueSelector = (w: Window) => window.innerWidth; // module scope for stable reference

export const useWidth = (): number | undefined => {
  return useWindowListener('resize', valueSelector);
};`;

const useWidthLibraryCode2 = `import { useWindowListener } from 'use-window-listener';

type Button = 0 | 1 | 2;

export interface Position {
  x: number;
  y: number;
}

export const useMousePosition = (button: Button = 0): Position | undefined => {
  const valueSelector = useCallback((w: Window, e?: MouseEvent) => {
    return e?.button === button ? { x: e.clientX, y: e.clientY } : undefined;
  }, [ button ]);

  return useWindowListener('mousedown', valueSelector, undefined, undefined, { capture: true });
};`;

const useWidthLibraryCode3 = `import { useWindowListener } from 'use-window-listener';

export const useWidth = (): number | undefined => {
  return useWindowListener('resize', w => w.innerWidth));
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
