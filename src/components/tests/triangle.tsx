import type { CSSProperties, FC } from 'react';

interface Props {
  width: CSSProperties['width'];
  className?: string;
  showStar?: boolean;
}

export const Triangle: FC<Props> = ({ width, className, showStar = false }) => (
  <svg className={className} width={width} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <polygon points="0,0 100,0 0,100" fill="currentColor" />
    {showStar ? (
      <path
        d="M31 20L34.4 27L42 28.1L36.5 33.5L37.8 41L31 37.4L24.2 41L25.5 33.5L20 28.1L27.6 27L31 20Z"
        fill="white"
      />
    ) : null}
  </svg>
);
