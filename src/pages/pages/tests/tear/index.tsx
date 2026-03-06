import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { BlankLink } from '@/components/blankLink';
import { TearTest } from '@/components/tests/tearTest';
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
