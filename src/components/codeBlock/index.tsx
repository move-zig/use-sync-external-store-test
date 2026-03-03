import type { FC, HTMLProps } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from './index.module.scss';

SyntaxHighlighter.registerLanguage('typescript', typescript);

interface Props {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  renderer?: (props: rendererProps) => React.ReactNode;
  lineProps?: HTMLProps<HTMLElement> | lineTagPropsFunction;
  className?: string;
}

export const CodeBlock: FC<Props> = ({ code, language = 'typescript', renderer, lineProps, showLineNumbers, className }) => {
  return (
    <div className={className}>
      <SyntaxHighlighter
        showLineNumbers={showLineNumbers}
        language={language}
        style={vscDarkPlus}
        codeTagProps={{ className: styles.code }}
        renderer={renderer}
        lineProps={lineProps}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
