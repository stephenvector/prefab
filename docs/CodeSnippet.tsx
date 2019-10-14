import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const customTheme = {
  ...defaultProps.theme
};

customTheme.plain.padding = "1rem";

export default function CodeSnippet({ code }: { code: string }) {
  return (
    <Highlight {...defaultProps} theme={customTheme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
