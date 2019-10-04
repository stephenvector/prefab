import React from "react";
import { StyleSheet, css } from "aphrodite";

type ColumnProps = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: "0 auto"
  }
});

export default function Column(props: ColumnProps) {
  return <div {...props} className={css(styles.container)} />;
}
