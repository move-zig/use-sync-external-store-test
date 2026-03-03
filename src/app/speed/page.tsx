import type { Metadata } from 'next';

import { SpeedTest } from './speedTest';
import type { PageComponent } from '@/src/serverComponent';

export const metadata: Metadata = {
  title: 'Speed Test',
};

const TearTestPage: PageComponent = async props => {
  const searchParams = await props.searchParams;

  const countParam = searchParams.count;
  const defaultCount = typeof countParam === 'string'
    ? parseInt(countParam, 10)
    : undefined;

  return (
    <div className="container">
      <h1>Speed Test</h1>
      <SpeedTest defaultCount={defaultCount} />
    </div>
  );
};

export default TearTestPage;
