import React from "react";
import styled from "styled-components";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  aspectRatio?: number;
  centerContent?: boolean;
};

const BoxInner = styled.div``;

const BoxOuter = styled.div<BoxProps>`
  ${p => {
    if (p.aspectRatio === undefined) {
      return {};
    }

    return {
      position: "relative",
      ":before": {
        display: "block",
        content: '" "',
        width: "100%",
        paddingTop: `${p.aspectRatio * 100}%`
      }
    };
  }}

  ${BoxInner} {
    ${p => {
      if (p.aspectRatio === undefined) {
        return {};
      }

      return {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        flexWrap: "nowrap"
      };
    }}
    ${p => {
      if (p.centerContent !== true) {
        return {};
      }

      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      };
    }}
  }
`;

export default function Box(props: BoxProps) {
  return (
    <BoxOuter {...props}>
      <BoxInner {...props}>{props.children}</BoxInner>
    </BoxOuter>
  );
}
