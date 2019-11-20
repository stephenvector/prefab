import styled from "./styled";
import { Theme, defaultPrefabTheme, lightenHex } from "./";

interface ButtonProps {
  fullWidth?: boolean;
  theme?: Theme;
  outline?: boolean;
  bg?: string;
  fg?: string;
}

const Button = styled.button<ButtonProps>(props => {
  let bg = props.bg ? props.bg : props.theme.colors.accent;
  let fg = props.fg ? props.fg : props.theme.colors.bg;

  if (props.outline) {
    const temp = bg;
    bg = fg;
    fg = temp;
  }
  let borderColor = props.outline ? fg : bg;
  return {
    font: "inherit",
    fontSize: "1rem",
    fontWeight: 700,
    margin: 0,
    textDecoration: "none",
    padding: "0 2rem",
    cursor: "pointer",
    display: "inline-block",
    border: "none",
    width: props.fullWidth ? "100%" : "auto",
    lineHeight: props.theme.sizing.formControls,
    borderRadius: props.theme.sizing.borderRadius,
    background: bg,
    color: fg,
    boxShadow: `inset 0 0 0 ${props.theme.sizing.border} ${borderColor}`,
    ":focus": {
      outline: "solid 6px #e56",
      outlineOffset: "2px"
    },
    ":hover": {
      color: props.outline ? bg : fg,
      background: lightenHex(props.outline ? fg : bg, 0.1),
      boxShadow: `inset 0 0 0 ${props.theme.sizing.border} 0 ${lightenHex(
        borderColor,
        0.1
      )}`
    }
  };
});

Button.defaultProps = {
  theme: defaultPrefabTheme
};

export default Button;
