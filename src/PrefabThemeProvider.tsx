import React from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { DefaultPrefabTheme } from "./";

const ThemeProviderWrapper = styled.div`
  font-family: sans-serif;
`;

function PrefabThemeProvider({
  theme,
  children
}: {
  theme: DefaultTheme;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </ThemeProvider>
  );
}

PrefabThemeProvider.defaultProps = {
  theme: DefaultPrefabTheme
};

export default PrefabThemeProvider;
