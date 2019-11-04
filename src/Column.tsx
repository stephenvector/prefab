import { Interpolation } from "@emotion/styled";
import styled from "./styled";
import { defaultPrefabTheme, Theme } from "./";

type ColumnProps = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
};

const Column = styled.div<ColumnProps>({}, props => {
  const styles: Interpolation<ColumnProps & { theme: Theme }> = {
    flex: "0 0 auto",
    flexGrow: 1,
    maxWidth: props.xs !== undefined ? props.xs : "100%",
    flexBasis: props.xs !== undefined ? props.xs : 0,
    minHeight: "1px",
    display: "block",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    boxSizing: "border-box"
  };

  if (props.sm !== undefined) {
    styles[`@media screen and(min - width: ${props.theme.breakpoints.sm}`] = {
      flexBasis: props.sm,
      maxWidth: props.sm
    };
  }

  if (props.md !== undefined) {
    styles[`@media screen and(min - width: ${props.theme.breakpoints.md}`] = {
      flexBasis: props.md,
      maxWidth: props.md
    };
  }

  if (props.lg !== undefined) {
    styles[`@media screen and(min - width: ${props.theme.breakpoints.lg}`] = {
      flexBasis: props.lg,
      maxWidth: props.lg
    };
  }

  return styles;
});

Column.defaultProps = {
  theme: defaultPrefabTheme
};

export default Column;
