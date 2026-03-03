import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'node:fs';
import path from 'node:path';

import { CodeBlock } from '@/components/codeBlock';
import type { PageComponent } from '@/src/serverComponent';

const useWidthCode = fs.readFileSync(path.join(process.cwd(), 'src/hooks/useWidth.ts')).toString();
const useWidthSyncCode = fs.readFileSync(path.join(process.cwd(), 'src/hooks/useWidthSync.ts')).toString();

export const metadata: Metadata = {
  title: 'Custom Hooks',
  alternates: { canonical: '/hooks' },
};

const HooksPage: PageComponent = () => (
  <div className="container">
    <h1>Custom Hooks</h1>
    <h2><span className="font-mono">useWidth</span></h2>
    <CodeBlock code={useWidthCode} showLineNumbers />
    <h2><span className="font-mono">useWidthSync</span></h2>
    <CodeBlock code={useWidthSyncCode} showLineNumbers />
    <h2>Why Go to This Trouble?</h2>
    <p><Link href="/tests/tear">Tearing</Link></p>
  </div>
);

export default HooksPage;
