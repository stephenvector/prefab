import React from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  input: {
    font: "inherit"
  }
});

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input {...props} className={css(styles.input)} />;
}
