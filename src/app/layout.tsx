import type { Metadata } from 'next';
import { Open_Sans as SansSerif } from 'next/font/google';

import { Footer } from './footer';
import { Navbar } from './navbar';
import { operatorMono } from '@/src/fonts';
import type { LayoutComponent } from '@/src/serverComponent';
import '@/src/style.scss';

const sansSerif = SansSerif({
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--myfont-sans-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s - useSyncExternalStore vs. useEffect',
    default: 'useSyncExternalStore vs. useEffect',
  },
  description: 'Demonstrating a use case for using the useSyncExternalStore hook',
};

const RootLayout: LayoutComponent = ({ children }) => {
  return (
    <html lang="en" className={`${sansSerif.variable} ${operatorMono.variable}`}>
      <body>
        <Navbar />
        <main className="prose prose-a:text-primary prose-a:no-underline">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
