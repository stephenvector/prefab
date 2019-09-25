import React from "react";
import styled from "./styled";

interface Props {
  value: number;
}

const Wrapper = styled("div")`
  height: 1rem;
  background: #f2f2f2;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Progress = styled<"div", Props>("div", {
  shouldForwardProp: prop => prop !== "value"
})`
  width: ${p => p.value}%;
  height: 1rem;
  background: blue;
`;

export default function ProgressBar({ value }: Props) {
  return (
    <Wrapper>
      <Progress value={value} />
    </Wrapper>
  );
}
