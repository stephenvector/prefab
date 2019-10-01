import React from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

type ButtonBaseProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: true;
  variant?: "default" | "error" | "accent" | "success" | "warning";
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonBaseProps & {
    href?: undefined;
  };

type ButtonAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonBaseProps & {
    href?: string;
  };

type ButtonOverload = {
  (props: ButtonProps): JSX.Element;
  (props: ButtonAnchorProps): JSX.Element;
};

const hasHref = (
  props: ButtonProps | ButtonAnchorProps
): props is ButtonAnchorProps => "href" in props;

const buttonStyles = StyleSheet.create({
  button: {
    background: `var(--colors-accent, ${lightTheme.colors.accent})`,
    cursor: "pointer",
    border: "none",
    font: "inherit",
    padding: "0.5rem 1rem",
    borderRadius: `var(--colors-accent, ${lightTheme.sizing.borderRadius})em`
  }
});

const Button: ButtonOverload = (props: ButtonProps | ButtonAnchorProps) => {
  const { size, ...otherProps } = props;

  if (hasHref(props)) {
    return (
      <a
        {...(otherProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className={css(buttonStyles.button)}
      />
    );
  }

  return (
    <button
      {...(otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={css(buttonStyles.button)}
    />
  );
};

export default Button;
