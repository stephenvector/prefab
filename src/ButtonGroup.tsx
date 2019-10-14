import React from "react";
import styled from "styled-components";
import { Button } from "./";

const ButtonGroupWrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  border-radius: 0.2rem;
  overflow: hidden;
  ${Button} {
    color: blue;
    border: none;
    background: transparent;
    padding: 0;
    flex: 1;
    :hover {
      background: blue;
      color: #fff;
    }
  }
`;

export default function ButtonGroup(props: any) {
  return (
    <ButtonGroupWrapper>
      {React.Children.map(props.children, (child, index) => {
        return child;
      })}
    </ButtonGroupWrapper>
  );
}
