import { createElement } from 'react-syntax-highlighter';

type Renderer = (props: rendererProps) => React.ReactNode;

interface ErrorSpan {
  row: number;
  children: {
    start: number;
    end: number;
  };
}

export const createErrorRenderer = (errorSpans: ErrorSpan[]): Renderer => async ({ rows, stylesheet, useInlineStyles }) => {
  return Promise.all(rows.map(async (row, i) => {
    const errorSpan = errorSpans.find(e => e.row === i);

    if (!errorSpan) {
      return createElement({ node: row, stylesheet, useInlineStyles, key: i });
    }

    return (
      <div key={i}>
        {row.children?.map((child, j) => {
          const shouldSquiggle = errorSpan.children.start <= j && errorSpan.children.end >= j;
          return (
            <span key={j} style={shouldSquiggle ? { textDecoration: 'underline wavy red', textUnderlineOffset: '3px' } : undefined}>
              {createElement({ node: child, stylesheet, useInlineStyles, key: j })}
            </span>
          );
        })}
      </div>
    );
  }));
};
