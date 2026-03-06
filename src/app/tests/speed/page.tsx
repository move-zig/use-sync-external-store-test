import type { Metadata } from 'next';

import { BlankLink } from '@/components/blankLink';
import { SpeedTest } from '@/components/tests/speedTest';
import { getIntParam } from '@/src/lib/getIntParam';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'Speed Test',
  alternates: { canonical: '/tests/speed' },
};

const TearTestPage: PageComponent = async props => {
  const searchParams = await props.searchParams;
  const defaultCount = getIntParam(searchParams.count);
  const max = getIntParam(searchParams.max);

  return (
    <div className="container">
      <h1>Speed Test <BlankLink href="/pages/tests/speed"><small>(App Router)</small></BlankLink></h1>
      <SpeedTest defaultCount={defaultCount} max={max} />
    </div>
  );
};

export default TearTestPage;
