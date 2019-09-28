import React from "react";
import { ThemeProvider } from "styled-components";
import { PrefabThemeConfig } from "./themes";
import GlobalStyles from "./GlobalStyles";

type Props = {
  theme: PrefabThemeConfig;
  children: React.ReactNode;
};

export default function PrefabTheme({ theme, children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles theme={theme} />
        {children}
      </>
    </ThemeProvider>
  );
}
