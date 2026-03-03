import { CodeBlock } from '@/components/codeBlock';
import type { PageComponent } from '@/src/serverComponent';

const HooksPage: PageComponent = () => (
  <div className="container">
    <h1>The <span className="font-mono">use-window-listener</span> Library</h1>
    <CodeBlock language="bash" code={`$ npm i use-window-listener`} />
    <h2>The <span className="font-mono">useWindowListener</span> Hook</h2>
    <p>skdjfksdjhfkdsjh</p>
    <h3>Example</h3>
    <p>Just like with <span className="font-mono">useSyncExternalStore</span>, it's important that the value selector here is referentially stable.</p>
    <CodeBlock code={useWidthLibraryCode} />
    <p>If you have some reason to depend on some other value, you can use <span className="font-mono">useCallback</span> to provide referential stability.</p>
    <CodeBlock code={useWidthLibraryCode2} />
    <h2>The <span className="font-mono">useSyncWindowListener</span> Hook</h2>
    <p>Same API, but uses <span className="font-mono">useSyncExternalStore</span> under the hood.</p>
    <h2>Other Hooks</h2>
  </div>
);

export default HooksPage;

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
};
`;
