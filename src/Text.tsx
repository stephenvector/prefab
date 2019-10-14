import React from "react";
import styled from "styled-components";

export const H1 = styled.h1``;

// const styleDeclaration: {
//   [key: string]: { [k: string]: string | number };
// } = {
//   base: {
//     fontFamily: `var(--fonts-base-family, ${lightTheme.fonts.base.family})`,
//     lineHeight: `var(--fonts-base-lineHeight), ${lightTheme.fonts.base.lineHeight})`,
//     fontWeight: `var(--fonts-base-fontWeight), ${lightTheme.fonts.base.weight})`
//   },
//   headings: {
//     fontFamily: `var(--fonts-headings-family, ${lightTheme.fonts.headings.family})`,
//     lineHeight: `var(--fonts-headings-lineHeight), ${lightTheme.fonts.headings.lineHeight})`,
//     fontWeight: `var(--fonts-headings-fontWeight), ${lightTheme.fonts.headings.weight})`
//   },
//   display: {
//     fontFamily: `var(--fonts-display-family, ${lightTheme.fonts.display.family})`,
//     lineHeight: `var(--fonts-display-lineHeight), ${lightTheme.fonts.display.lineHeight})`,
//     fontWeight: 900 //`var(--fonts-display-fontWeight), ${lightTheme.fonts.display.weight})`
//   },
//   h1: { fontSize: `var(--sizing-h1, ${lightTheme.sizing.h1})` },
//   h2: { fontSize: `var(--sizing-h2, ${lightTheme.sizing.h2})` },
//   h3: { fontSize: `var(--sizing-h3, ${lightTheme.sizing.h3})` },
//   h4: { fontSize: `var(--sizing-h4, ${lightTheme.sizing.h4})` },
//   h5: { fontSize: `var(--sizing-h5, ${lightTheme.sizing.h5})` },
//   h6: { fontSize: `var(--sizing-h6, ${lightTheme.sizing.h6})` },
//   display1: {
//     fontSize: `var(--sizing-display1, ${lightTheme.sizing.display1})`
//   },
//   display2: {
//     fontSize: `var(--sizing-display2, ${lightTheme.sizing.display2})`
//   },
//   display3: {
//     fontSize: `var(--sizing-display3, ${lightTheme.sizing.display3})`
//   },
//   display4: {
//     fontSize: `var(--sizing-display4, ${lightTheme.sizing.display4})`
//   }
// };

// const textStyles = StyleSheet.create(styleDeclaration);

// export function H1(props) {
//   return <h1 {...props} />;
// }

export function H2(props) {
  return <h2 {...props} />;
}

export function H3(props) {
  return <h1 {...props} />;
}

export function H4(props) {
  return <h1 {...props} />;
}

export function H5(props) {
  return <h1 {...props} />;
}

export function H6(props) {
  return <h1 {...props} />;
}

export function P(props) {
  return <p {...props} />;
}

export function Display1(props) {
  return (
    <div
      {...props}
      // className={css([textStyles.display, textStyles.display1])}
    />
  );
}

// export function Display2(props) {
//   return (
//     <div
//       {...props}
//       // className={css([textStyles.display, textStyles.display2])}
//     />
//   );
// }

// export function Display3(props) {
//   return (
//     <div
//       {...props}
//       className={css([textStyles.display, textStyles.display3])}
//     />
//   );
// }

// export function Display4(props) {
//   return (
//     <div
//       {...props}
//       className={css([textStyles.display, textStyles.display4])}
//     />
//   );
// }
