import type { Metadata } from 'next';

import { BlankLink } from '@/components/blankLink';
import { SpeedTest } from '@/components/tests/speedTest';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'Speed Test',
  alternates: { canonical: '/tests/speed' },
};

const TearTestPage: PageComponent = async props => {
  const searchParams = await props.searchParams;

  const countParam = searchParams.count;
  const defaultCount = typeof countParam === 'string'
    ? parseInt(countParam, 10)
    : undefined;

  return (
    <div className="container">
      <h1>Speed Test <BlankLink href="/pages/tests/speed"><small>(App Router)</small></BlankLink></h1>
      <SpeedTest defaultCount={defaultCount} />
    </div>
  );
};

export default TearTestPage;
