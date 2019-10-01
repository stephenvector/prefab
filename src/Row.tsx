import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  row: {
    display: "flex"
  }
});

export default function Row(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={css(styles.row)} />;
}
