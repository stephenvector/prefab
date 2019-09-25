import defaultStyled, { CreateStyled } from "@emotion/styled";

export interface PrefabTheme {
  colors: {
    background: string;
    foreground: string;
    accent: string;
    danger: string;
    warning: string;
    success: string;
  };
  fonts: {
    primary: string;
    heading: string;
    secondary: string;
  };
}

export default defaultStyled as CreateStyled<PrefabTheme>;
