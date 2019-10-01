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

// import styled from "styled-components";
// import { lightTheme } from "./themes";

// const Container = styled.div`
//   margin: 0 auto;
//   width: ${p => p.theme.breakpoints.xs};

//   @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
//     width: ${p => p.theme.breakpoints.sm};
//   }

//   @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
//     width: ${p => p.theme.breakpoints.md};
//   }

//   @media screen and (min-width: ${p => p.theme.breakpoints.lg}) {
//     width: ${p => p.theme.breakpoints.lg};
//   }

//   @media screen and (min-width: ${p => p.theme.breakpoints.xl}) {
//     width: ${p => p.theme.breakpoints.xl};
//   }
// `;

// Container.defaultProps = {
//   theme: lightTheme
// };

// export default Container;
