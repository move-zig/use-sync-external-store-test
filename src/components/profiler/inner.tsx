'use client';

import type { FC, ProfilerOnRenderCallback, PropsWithChildren } from 'react';
import { memo, Profiler } from 'react';

interface Props {
  id: string;
  onRender: ProfilerOnRenderCallback;
}

export const Inner: FC<PropsWithChildren<Props>> = memo(({ id, onRender: handleRender, children }) => (
  <Profiler id={id} onRender={handleRender}>
    {children}
  </Profiler>
));

Inner.displayName = 'Inner';
