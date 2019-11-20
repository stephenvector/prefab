import React from "react";
import styled from "./styled";

const Pre = styled.pre`
  background: #f2f2f2;
  font-family: monospace;
`;

const CodeTag = styled.code`
  background: transparent;
`;

function Code(
  props: { children: React.ReactNode },
  ref: React.Ref<HTMLPreElement>
) {
  return (
    <Pre ref={ref}>
      <CodeTag>{props.children}</CodeTag>
    </Pre>
  );
}

export default React.forwardRef(Code);
