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
