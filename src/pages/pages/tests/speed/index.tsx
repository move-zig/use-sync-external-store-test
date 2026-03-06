import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { BlankLink } from '@/components/blankLink';
import { SpeedTest } from '@/components/tests/speedTest';
import { siteTitle } from '@/src/pages/_app';

interface Props {
  defaultCount?: number;
  max?: number;
}

const title = `Speed Test - ${siteTitle}`;

const SpeedTestPage: NextPage<Props> = ({ defaultCount, max = 500 }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container">
      <h1>Speed Test <BlankLink href="/tests/speed"><small>(Pages Router)</small></BlankLink></h1>
      <SpeedTest defaultCount={defaultCount} max={max} />
    </div>
  </>
);

export default SpeedTestPage;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async req => {
  const countParam = req.query.count;
  const maxParam = req.query.max;

  const defaultCount = typeof countParam === 'string' ? parseInt(countParam, 10) : undefined;
  const max = typeof maxParam === 'string' ? parseInt(maxParam, 10) : undefined;

  const props: Props = {};

  if (typeof defaultCount !== 'undefined') {
    props.defaultCount = defaultCount;
  }
  if (typeof max !== 'undefined') {
    props.max = max;
  }
  return { props };
};
