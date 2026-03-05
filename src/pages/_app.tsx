import type { AppProps } from 'next/app';
import { Open_Sans as SansSerif } from 'next/font/google';
import Head from 'next/head';
import type { FC } from 'react';

import { SiteLayout } from '@/components/siteLayout';
import { operatorMono } from '@/src/fonts';

import './style.css'; // pages router specific

const sansSerif = SansSerif({
  subsets: [ 'latin' ],
  display: 'swap',
  variable: '--myfont-sans-serif',
});

export const siteTitle = 'The useSyncExternalStore Hook';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <SiteLayout className={`${sansSerif.variable} ${operatorMono.variable}`}>
      <Component {...pageProps} />
    </SiteLayout>
  </>
);

export default App;
