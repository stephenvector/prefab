import React from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

const styles = StyleSheet.create({
  label: {
    color: `var(--colors-meta, ${lightTheme.colors.meta})`
  }
});

export default function Label(
  props: React.LabelHTMLAttributes<HTMLLabelElement>
) {
  return <label {...props} className={css(styles.label)} />;
}
