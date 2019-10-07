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
    color: `var(--colors-background, ${lightTheme.colors.background})`,
    background: `var(--colors-accent, ${lightTheme.colors.accent})`,
    cursor: "pointer",
    border: "none",
    font: "inherit",
    fontFamily: `var(--fonts-familyDefault, ${lightTheme.fonts.familyDefault})`,
    padding: "0.5rem 1rem",
    borderRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius}px)`
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
