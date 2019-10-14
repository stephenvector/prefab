import React from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

type ColorPalette = {
  bg: string;
  fg: string;
  accent: string;
  meta: string;
};

import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorPalette;
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    sizing: {
      formControls: string;
      borderRadius: string;
    };
    typefaces: {
      base: string;
      headings: string;
    };
  }
}

export const PrefabTheme: DefaultTheme = {
  colors: {
    bg: "#fff",
    fg: "#000",
    accent: "#e56",
    meta: "#bbb"
  },
  breakpoints: {
    sm: "600px",
    md: "1024px",
    lg: "1200px"
  },
  sizing: {
    formControls: "3rem",
    borderRadius: "3px"
  },
  typefaces: {
    base: "sans-serif",
    headings: "sans-serif"
  }
};

const ThemeProviderWrapper = styled.div`
  font-family: sans-serif;
`;

export function PrefabThemeProvider({
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
