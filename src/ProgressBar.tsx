import React from "react";
// import { css, StyleSheet } from "aphrodite/no-important";
// import { lightTheme } from "./themes";

// const progressBarStyles = StyleSheet.create({
//   wrapper: {
//     background: `var(--colors-background, ${lightTheme.colors.background})`,
//     border: "none",
//     overflow: "hidden",
//     borderRadius: "0.5rem",
//     boxShadow: `inset 0 0 0 2px var(--colors-accent, ${lightTheme.colors.accent})`
//   },
//   progress: {
//     background: `var(--colors-accent, ${lightTheme.colors.accent})`,
//     border: "none",
//     font: "inherit",
//     height: "1rem",
//     borderRadius: "0.5rem",
//     fontWeight: "bold",
//     fontSize: "90%",
//     lineHeight: "1rem",
//     textAlign: "center",
//     color: `var(--colors-background, ${lightTheme.colors.background})`
//   }
// });

interface Props {
  value: number;
  showText: boolean;
}

function ProgressBar({ value, showText }: Props) {
  // const widthStyle = StyleSheet.create({
  //   width: {
  //     width: `${value}%`
  //   }
  // });

  return (
    <div>
      <div>{showText && `${value}%`}</div>
    </div>
  );
}

ProgressBar.defaultProps = {
  showText: false
};

export default ProgressBar;
