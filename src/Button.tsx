import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { lightTheme, lightenHex } from "./";

// const Button = function Button(props: any) {
//   return <button {...props} />;
// };

interface ButtonProps {
  fullWidth?: boolean;
  theme?: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  padding: 0 2rem;
  cursor: pointer;

  display: inline-block;
  border: none;
  :focus {
    outline: solid 6px #ccf;
  }
  ${props => {
    const { theme, fullWidth } = Object.assign(
      {},
      {
        theme: lightTheme,
        fullWidth: false
      },
      props
    );
    return {
      lineHeight:
        theme.sizing.formControls !== undefined
          ? theme.sizing.formControls
          : lightTheme.sizing.formControls,
      width: fullWidth ? "100%" : "auto",
      borderRadius: theme.sizing.borderRadius,
      color: theme.colors.bg,
      ":hover": {
        background: lightenHex(theme.colors.accent, 0.3)
      }
    };
  }}
`;

Button.defaultProps = {
  theme: lightTheme,
  fullWidth: false
};

export default Button;
