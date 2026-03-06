import type { Metadata } from 'next';

import { BlankLink } from '@/components/blankLink';
import { TearTest } from '@/components/tests/tearTest';
import { getIntParam } from '@/src/lib/getIntParam';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'Tear Test',
  alternates: { canonical: '/tests/tear' },
};

const TearTestPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const defaultCount = getIntParam(searchParams.count);
  const max = getIntParam(searchParams.max);

  return (
    <div className="container">
      <h1>Tear Test <BlankLink href="/pages/tests/tear"><small>(App Router)</small></BlankLink></h1>
      <TearTest defaultCount={defaultCount} max={max} />
    </div>
  );
};

export default TearTestPage;
