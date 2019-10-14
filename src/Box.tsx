import React from "react";
import styled from "styled-components";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  aspectRatio?: number;
  centerContent?: boolean;
  floating?: boolean;
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
        paddingTop: `${p.aspectRatio * 100}%`,
        background: "#f2f2f2"
      }
    };
  }}

  ${p => {
    if (p.floating) {
      return {
        boxShadow: "0 0 0.5rem 0 #ddd"
      };
    }

    return {};
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
        display: "flex",
        flexDirection: "row",
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
