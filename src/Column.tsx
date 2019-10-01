import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "0 auto"
  }
});

export default function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={css(styles.container)} />;
}
