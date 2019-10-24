import React from "react";
import styled, {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle
} from "styled-components";
import { lightTheme } from "./";

const ThemeProviderWrapper = styled.div`
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.fg};

  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900&display=swap");

  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  & ::placeholder {
    color: ${p => p.theme.colors.meta};
    opacity: 1;
  }
  & ::selection {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
  }
`;

const Globals = createGlobalStyle<{ theme: DefaultTheme }>`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    margin: 0;
    padding: 0;
    font-size: ${p => p.theme.sizing.remSize};
  }

  body {
    margin: 0;
    padding: 0;
    background: ${p => p.theme.colors.bg};
    color: ${p => p.theme.colors.fg};
  }

  a {
    color: inherit;
  }
`;

type PrefabThemeProviderProps = {
  theme: DefaultTheme;
  children: React.ReactNode;
  includeGlobals?: boolean;
};

function PrefabThemeProvider({
  theme,
  children,
  includeGlobals
}: PrefabThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        {includeGlobals && <Globals theme={theme} />}
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </>
    </ThemeProvider>
  );
}

PrefabThemeProvider.defaultProps = {
  theme: lightTheme,
  includeGlobals: false
};

export default PrefabThemeProvider;
