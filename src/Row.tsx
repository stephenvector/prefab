import styled from "styled-components";

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

Row.defaultProps = {
  padding: true
};

export default Row;
