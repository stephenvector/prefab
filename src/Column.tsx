import React from "react";
import { StyleSheet, css } from "aphrodite";

type ContainerProps = {
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "0 auto"
  }
});

export default function Container(props: ContainerProps) {
  return <div {...props} className={css(styles.container)} />;
}
