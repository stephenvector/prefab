import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { defaultPrefabTheme, lightenHex } from "./";

interface ButtonProps {
  fullWidth?: boolean;
  theme: DefaultTheme;
  outline?: boolean;
  bg?: string;
  fg?: string;
}

interface ButtonPropsComputed extends ButtonProps {
  bg: string;
  fg: string;
  borderColor: string;
}

const Button = styled.button.attrs((p: ButtonProps) => {
  let bg = p.bg ? p.bg : p.theme.colors.accent;
  let fg = p.fg ? p.fg : p.theme.colors.bg;
  let borderColor = p.outline ? fg : bg;
  if (p.outline) {
    const temp = bg;
    bg = fg;
    fg = temp;
  }
  return {
    bg,
    fg,
    borderColor
  };
})<ButtonPropsComputed>`
  font: inherit;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  padding: 0 2rem;
  cursor: pointer;
  display: inline-block;
  border: none;
  width: ${p => (p.fullWidth ? "100%" : "auto")};
  line-height: ${p => p.theme.sizing.formControls};
  border-radius: ${p => p.theme.sizing.borderRadius};
  background: ${p => p.bg};
  color: ${p => p.fg};
  box-shadow: ${p =>
    `inset 0 0 0 ${p.theme.sizing.border} ${p.theme.colors.accent}`};
  :focus {
    outline: solid 6px #ccf;
    outline-offset: 2px;
  }
  :hover {
    color: ${p => (p.outline ? p.bg : p.fg)};
    background: ${({ theme }) => lightenHex(theme.colors.accent, 0.3)};
    box-shadow: ${({ theme }) =>
      `inset 0 0 ${theme.sizing.border} 0 ${lightenHex(
        theme.colors.accent,
        0.3
      )}`};
  }
`;

Button.defaultProps = {
  theme: defaultPrefabTheme,
  fullWidth: false,
  outline: false
};

export default Button;
