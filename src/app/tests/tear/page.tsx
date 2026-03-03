import type { Metadata } from 'next';

import { TearTest } from './tearTest';
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
      <h1>Tear Test</h1>
      <TearTest defaultCount={defaultCount} />
    </div>
  );
};

export default TearTestPage;
