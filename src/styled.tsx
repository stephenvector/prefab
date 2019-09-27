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
}

export default defaultStyled as CreateStyled<PrefabTheme>;
