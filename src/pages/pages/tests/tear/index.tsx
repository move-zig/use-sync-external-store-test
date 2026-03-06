import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { BlankLink } from '@/components/blankLink';
import { TearTest } from '@/components/tests/tearTest';
import { getIntParam } from '@/src/lib/getIntParam';
import { siteTitle } from '@/src/pages/_app';

interface Props {
  defaultCount?: number;
  max?: number;
}

const title = `Tear Test - ${siteTitle}`;

const TearTestPage: NextPage<Props> = ({ defaultCount, max = 500 }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="canonical" href="/pages/tests/tear" />
    </Head>
    <div className="container">
      <h1>Tear Test <BlankLink href="/tests/tear"><small>(Pages Router)</small></BlankLink></h1>
      <TearTest defaultCount={defaultCount} max={max} />
    </div>
  </>
);

export default TearTestPage;

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
