import styled from "./styled";
import { defaultPrefabTheme } from "./";

type ColumnProps = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
};

const Column = styled.div<ColumnProps>`
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  min-height: 1px;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  max-width: 100%;
  ${({ xs }) => {
    if (!xs) return;
    return {
      flexBasis: xs,
      maxWidth: xs
    };
  }}
        
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    ${({ sm }) => {
      if (!sm) return;
      return {
        flexBasis: sm,
        maxWidth: sm
      };
    }}
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    ${({ md }) => {
      if (!md) return;
      return {
        flexBasis: md,
        maxWidth: md
      };
    }}
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
    ${({ lg }) => {
      if (!lg) return;
      return {
        flexBasis: lg,
        maxWidth: lg
      };
    }}
  }
`;

Column.defaultProps = {
  theme: defaultPrefabTheme
};

export default Column;
