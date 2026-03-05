import type { Metadata } from 'next';
import Link from 'next/link';

import { BlankLink } from '@/components/blankLink';
import { TearTest } from '@/components/tests/tearTest';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'Tear Test',
  alternates: { canonical: '/tests/tear' },
};

const TearTestPage: PageComponent = async props => {
  const searchParams = await props.searchParams;

  const countParam = searchParams.count;
  const defaultCount = typeof countParam === 'string'
    ? parseInt(countParam, 10)
    : undefined;

  return (
    <div className="container">
      <h1>Tear Test <BlankLink href="/pages/tests/tear"><small>(App Router)</small></BlankLink></h1>
      <TearTest defaultCount={defaultCount} />
    </div>
  );
};

export default TearTestPage;
