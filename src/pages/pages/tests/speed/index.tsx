import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { BlankLink } from '@/components/blankLink';
import { SpeedTest } from '@/components/tests/speedTest';
import { siteTitle } from '@/src/pages/_app';

interface Props {
  defaultCount: number | null;
}

const title = `Speed Test - ${siteTitle}`;

const SpeedTestPage: NextPage<Props> = ({ defaultCount }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container">
      <h1>Speed Test <BlankLink href="/tests/speed"><small>(Pages Router)</small></BlankLink></h1>
      <SpeedTest defaultCount={defaultCount ?? 0} />
    </div>
  </>
);

export default SpeedTestPage;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async req => {
  const countParam = req.params?.count;
  const defaultCount = typeof countParam === 'string' ? parseInt(countParam, 10) : null;
  return { props: { defaultCount } };
};
