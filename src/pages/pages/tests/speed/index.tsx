import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { BlankLink } from '@/components/blankLink';
import { SpeedTest } from '@/components/tests/speedTest';
import { getIntParam } from '@/src/lib/getIntParam';
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
      <link rel="canonical" href="/pages/tests/speed" />
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
  const defaultCount = getIntParam(req.query.count);
  const max = getIntParam(req.query.max);

  const props: Props = {
    ...(typeof defaultCount !== 'undefined' && { defaultCount }),
    ...(typeof max !== 'undefined' && { max }),
  };

  return { props };
};
