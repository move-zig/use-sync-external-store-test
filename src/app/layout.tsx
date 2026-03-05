import type { Metadata } from 'next';
import { Open_Sans as SansSerif } from 'next/font/google';

import { SiteLayout } from '@/components/siteLayout';
import { operatorMono } from '@/src/fonts';
import type { LayoutComponent } from '@/src/serverComponent';
import '@/src/style.css';

const sansSerif = SansSerif({
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--myfont-sans-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s - The useSyncExternalStore Hook',
    default: 'The useSyncExternalStore Hook',
  },
  description: 'Demonstrating a use case for using the useSyncExternalStore hook',
};

const RootLayout: LayoutComponent = ({ children }) => (
  <html lang="en" className={`${sansSerif.variable} ${operatorMono.variable}`}>
    <body>
      <SiteLayout>
        {children}
      </SiteLayout>
    </body>
  </html>
);

export default RootLayout;
