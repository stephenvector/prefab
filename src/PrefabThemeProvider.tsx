import React from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { lightTheme } from "./";

const ThemeProviderWrapper = styled.div`
  background: ${p => p.theme.colors.bg};
  color: ${p => p.theme.colors.fg};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  & ::placeholder {
    color: ${p => p.theme.colors.meta};
    opacity: 1;
  }
  & ::selection {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
  }
`;

type PrefabThemeProviderProps = {
  theme: DefaultTheme;
  children: React.ReactNode;
};

function PrefabThemeProvider({ theme, children }: PrefabThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </ThemeProvider>
  );
}

PrefabThemeProvider.defaultProps = {
  theme: lightTheme
};

export default PrefabThemeProvider;
