import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import { BlankLink } from '@/components/blankLink';
import { TearTest } from '@/components/tests/tearTest';
import { siteTitle } from '@/src/pages/_app';

interface Props {
  defaultCount: number | null;
}

const title = `Tear Test - ${siteTitle}`;

const TearTestPage: NextPage<Props> = ({ defaultCount }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="container">
      <h1>Tear Test <BlankLink href="/tests/tear"><small>(Pages Router)</small></BlankLink></h1>
      <TearTest defaultCount={defaultCount ?? 0} />
    </div>
  </>
);

export default TearTestPage;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<Props> = async req => {
  const countParam = req.params?.count;
  const defaultCount = typeof countParam === 'string' ? parseInt(countParam, 10) : null;
  return { props: { defaultCount } };
};
