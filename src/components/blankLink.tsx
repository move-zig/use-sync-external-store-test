import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

export const BlankLink: FC<PropsWithChildren<LinkProps>> = props => (
  <Link style={{ color: 'inherit', fontWeight: 'inherit' }} {...props}>
    {props.children}
  </Link>
);
