import type { Metadata } from 'next';
import Link from 'next/link';

import { CodeBlock } from '@/components/codeBlock';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'UseSyncExternalStore Hook',
  alternates: { canonical: '/useSyncExternalStore' },
};

const useSyncExternalStorePage: PageComponent = () => {
  return (
    <div className="container">
      <h1>The <span className="font-mono">useSyncExternalStore</span> Hook</h1>
      <p>React 18 released with a new hook called <span className="font-mono">useSyncExternalStore</span> for the purpose of subscribing to an <em>external store</em>.</p>
      <h2>What Is an External Store?</h2>
      <p>Some state stored outside of React, e.g.,</p>
      <ul>
        <li>Third-party state management library</li>
        <li>A mutable value or event from browser APIs</li>
      </ul>
      <h2>Parameters</h2>
      <p>Two required parameters and one optional one. All three should be referntially stable.</p>
      <CodeBlock code={typeDefinition} />
      <h3>Parameter 1: <span className="font-mono">subscribe</span> Function</h3>
      <CodeBlock code={subscribeCode} />
      <h3>Parameter 2: <span className="font-mono">getSnapshot</span></h3>
      <CodeBlock code={getSnapshotCode} />
      <h3>Parameter 3: <span className="font-mono">getServerSnapshot</span> (Optional)</h3>
      <CodeBlock code={getServerSnapshotCode} />
      <h2>Putting it All Together</h2>
      <CodeBlock code={allTogether} showLineNumbers />
      <p>Or better yet, make a <Link href="/hooks">custom hook</Link>.</p>
    </div>
  );
};

export default useSyncExternalStorePage;

const typeDefinition = `useSyncExternalStore<T>(
  subscribe: (onStoreChange: () => void) => () => void,
  getSnapshot: () => T,
  getServerSnapshot?: (() => T) | undefined
): T`;

const subscribeCode = `/**
* Creates a new subscription
*
* Will get called once when the hook mounts
*
* @param onStoreChange a void callback function that tells the hook when the value has been updated
* @returns a void cleanup function
*/
const subscribe = (onStoreChange: () => void) => {
  // for example, have the hook call getSnapshot every 10 seconds
  const id = setInterval(() => onStoreChange, 10_000);

  // don't forget to clean up
  return () => { clearInterval(id); }
}`;

const getSnapshotCode = `/**
* Retreives the current value of the store
*
* Will get called when the subscription calls onStoreChange
*
* @returns the current value
*/
const getSnapshot = () => ... // the current value`;

const getServerSnapshotCode = `/**
* Retreives the initial value of the data in the store
*
* Will get called during SSR and during hydration of server-rendered content
*
* @returns the initial value
*/
const getServerSnapshot = () => ... // the SSR value`;

const allTogether = `import type { FC } from 'react';
import { useSyncExternalStore } from 'react';

const subscribe = (onStoreChange: () => void) => {
  // have the hook call getSnapshot when the subscription is first created  
  onStoreChange();

  // have the hook call getSnapshot on resize events
  window.addEventListener('resize', onStoreChange, { passive: true });

  // don't forget to clean up
  return () => { window.removeEventListener('resize', onStoreChange); };
};

// return the current window width
const getSnapshot = () => window.innerWidth;

// we don't have access to the window object during SSR
const getServerSnapshot = () => undefined;

export const MyComponent: FC = () => {
  const width = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div>
      The current window width is {width}
    </div>
  )
};`;
