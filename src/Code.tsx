import React from "react";
import styled from "./styled";

const Pre = styled.pre`
  background: #f2f2f2;
  font-family: monospace;
`;

const CodeTag = styled.code`
  background: transparent;
`;

export default function Code(props: { children: React.ReactNode }) {
  return (
    <Pre>
      <CodeTag>{props.children}</CodeTag>
    </Pre>
  );
}
