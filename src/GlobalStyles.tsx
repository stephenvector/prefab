import { createGlobalStyle } from "styled-components";
import { PrefabThemeConfig, lightTheme } from "./themes";

const GlobalStyles = createGlobalStyle<{ theme: PrefabThemeConfig }>`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  body {
    background: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.foreground};
    font-family: ${p => p.theme.fonts.defaultFamily}
  }
`;

GlobalStyles.defaultProps = {
  theme: lightTheme
};

export default GlobalStyles;
