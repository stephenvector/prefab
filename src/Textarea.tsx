import React from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

const styles = StyleSheet.create({
  textarea: {
    borderRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius})`
  }
});

export default function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return <textarea {...props} className={css(styles.textarea)} />;
}
