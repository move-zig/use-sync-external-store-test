import type { CSSProperties, FC } from 'react';

interface Props {
  width: CSSProperties['width'];
  className?: string;
}

export const Triangle: FC<Props> = ({ width, className }) => (
  <svg className={className} width={width} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="0,0 100,0 0,100" fill="currentColor" />
  </svg>
);
