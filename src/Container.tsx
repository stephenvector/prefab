import React from "react";
import styled from "./styled";
import { defaultPrefabTheme } from "./";

type ContainerProps = {
  fullWidth?: boolean;
  center?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  margin-left: ${p => (p.center === true ? "auto" : 0)};
  margin-right: ${p => (p.center === true ? "auto" : 0)};
  max-width: ${p => (p.fullWidth === true ? "100%" : p.theme.breakpoints.xl)};
  width: 100%;
`;

Container.defaultProps = {
  center: true,
  fullWidth: false,
  theme: defaultPrefabTheme
};

export default Container;
