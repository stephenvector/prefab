import React from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

const loadingStyles = StyleSheet.create({
  text: {
    color: `var(--colors-meta, ${lightTheme.colors.meta})`
  }
});

export default function Loading() {
  return <span className={css(loadingStyles.text)}>Loading</span>;
}
