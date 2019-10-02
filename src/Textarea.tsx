import React from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

const styles = StyleSheet.create({
  textarea: {
    borderRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius})rem`,
    width: "100%",
    font: "inherit",
    border: `1px solid var(--colors-meta, ${lightTheme.colors.meta})`
  }
});

type TextareaProps = {
  disabled?: boolean;
  valid?: boolean;
  value?: string;
  onChange(newVal: string): void;
};

export default function Textarea({
  disabled,
  valid,
  value,
  onChange,
  ...otherProps
}: TextareaProps) {
  return <textarea {...otherProps} className={css(styles.textarea)} />;
}
