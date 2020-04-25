import React from "react";
import { ThemeProvider } from "emotion-theming";
import styled from "./styled";
import { lightTheme } from "./";
import { Theme } from "./types";

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
  theme: Theme;
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
  theme: lightTheme,
  includeGlobals: false
};

export default PrefabThemeProvider;

// // {/* {includeGlobals && <Globals theme={theme} />} */ }
// // {/* <ThemeProviderWrapper> */ }

// // {/* </ThemeProviderWrapper> */ }
// //       // </>
// <Global
// styles={css`
//   *,
//   *:before,
//   *:after {
//     box-sizing: border-box;
//   }
//   html {
//     margin: 0;
//     padding: 0;
//     font-size: ${p => p.theme.sizing.remSize};
//   }
//   body {
//     margin: 0;
//     padding: 0;
//     background: ${theme.colors.bg};
//     color: ${p => p.theme.colors.fg};
//   }
//   a {
//     color: inherit;
//   }
// `}
// />
