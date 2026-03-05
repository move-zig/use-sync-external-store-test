import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Navbar } from './navbar';

import '@/src/style.css';

interface Props {
  className?: string;
}

export const SiteLayout: FC<PropsWithChildren<Props>> = ({ className, children }) => (
  <div id="siteWrapper" className={className}>
    <Navbar />
    <main className="prose prose-a:text-primary prose-a:no-underline">
      {children}
    </main>
    <Footer />
  </div>
);
