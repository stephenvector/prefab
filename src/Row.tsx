import React from "react";
import styled from "./styled";

export type RowProps = {
  padding?: boolean;
};

const Row = styled.div<RowProps>`
  display: flex;
  padding-left: ${p => (p.padding ? `1rem` : "initial")};
  padding-right: ${p => (p.padding ? `1rem` : "initial")};
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export default Row;
