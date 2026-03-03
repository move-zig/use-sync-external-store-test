import Link from 'next/link';

import { CodeBlock } from '@/components/codeBlock';
import { createErrorRenderer } from '@/components/codeBlock/errorRenderer';
import type { PageComponent } from '@/src/serverComponent';

const HomePage: PageComponent = () => (
  <div className="container">
    <h1>Listening for DOM Events</h1>
    <p>Listen for:</p>
    <ul>
      <li>resize events on <strong className="font-mono">window</strong> and use <strong className="font-mono">.innerWidth</strong></li>
      <li>scroll events on <strong className="font-mono">window</strong> and use <strong className="font-mono">.scrollY</strong></li>
      <li>change events on a MediaQueryList and use <strong className="font-mono">.match</strong></li>
    </ul>

    <h2>Setting the Initial State</h2>
    <CodeBlock code={initialState} showLineNumbers />

    <h2>Updating the State</h2>
    <CodeBlock code={updating} renderer={errorRenderer} showLineNumbers />

    <h3>The Error</h3>
    <pre style={{ fontSize: '0.875rem', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{errorMessage}</pre>

    <h2>So What Do We Do?</h2>
    <p>If we don't call <span className="font-mono">setWidth</span> we won't know the screen width until a resize event is fired.</p>
    <h3>Avoid a Synchronous Call</h3>
    <CodeBlock code={solution1} />
    <p>But it's a hack.</p>
    <h3>Silence the Error</h3>
    <CodeBlock code={solution2} />
    <h3>Use a Different Hook</h3>
    <p><Link href="/theHook" className="link link-primary">useSyncExternalStore</Link></p>
  </div>
);

export default HomePage;

const initialState = `useState(window.innerWidth); // ✘ window is undefined
useState(() => (typeof window === 'undefined' ? undefined : window.innerWidth)); // ✘ hydration mismatch
useState<number | undefined>(undefined); // ✔`;

const updating = `// window is always defined inside useEffect 
useEffect(() => {
  // get the initial state
  setWidth(window.innerWidth);
  
  // listen for resize events and update the state
  const handler = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handler, { passive: true });
  
  // don't forget to clean up
  return () => { window.removeEventListener('resize', handler); };
}, []);`;

const solution1 = `startTransition(() => setWidth(window.innerWidth));`;

const solution2 = `// eslint-disable-next-line react-hooks/set-state-in-effect
setWidth(window.innerWidth);`;

const errorRenderer = createErrorRenderer([ { row: 3, children: { start: 2, end: 2 } } ]);

const errorMessage = `Error: Calling setState synchronously within an effect can trigger cascading renders

Effects are intended to synchronize state between React and external systems such as manually updating the DOM, state management libraries, or other platform APIs. In general, the body of an effect should do one or both of the following:
* Update external systems with the latest state from React.
* Subscribe for updates from some external system, calling setState in a callback function when external state changes.

Calling setState synchronously within an effect body causes cascading renders that can hurt performance, and is not recommended. (https://react.dev/learn/you-might-not-need-an-effect).`;
