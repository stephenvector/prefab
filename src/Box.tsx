import React from "react";
import styled from "styled-components";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  bg?: string;
  fg?: string;
  aspectRatio?: number;
  centerContent?: boolean;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingX?: number;
  paddingY?: number;
  padding?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginX?: number;
  marginY?: number;
  margin?: number;
};

const BoxInner = styled.div``;

const BoxOuter = styled.div<BoxProps>`
  ${({
    bg,
    fg,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingX,
    paddingY,
    padding,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    marginX,
    marginY,
    margin
  }) => {
    const rules: { [key: string]: any } = {};

    if (bg) {
      rules.background = bg;
    }

    if (fg) {
      rules.color = fg;
    }

    if (paddingTop) {
      rules.paddingTop = `${paddingTop}rem`;
    }

    if (paddingLeft) {
      rules.paddingLeft = `${paddingLeft}rem`;
    }

    if (paddingRight) {
      rules.paddingRight = `${paddingRight}rem`;
    }

    if (paddingBottom) {
      rules.paddingBottom = `${paddingBottom}rem`;
    }

    if (paddingX) {
      rules.paddingLeft = `${paddingX}rem`;
      rules.paddingRight = `${paddingX}rem`;
    }

    if (paddingY) {
      rules.paddingTop = `${paddingY}rem`;
      rules.paddingBottom = `${paddingY}rem`;
    }

    if (padding) {
      rules.padding = `${padding}rem`;
    }

    if (marginTop) {
      rules.marginTop = `${marginTop}rem`;
    }

    if (marginLeft) {
      rules.marginLeft = `${marginLeft}rem`;
    }

    if (marginRight) {
      rules.marginRight = `${marginRight}rem`;
    }

    if (marginBottom) {
      rules.marginBottom = `${marginBottom}rem`;
    }

    if (marginX) {
      rules.marginLeft = `${marginX}rem`;
      rules.marginRight = `${marginX}rem`;
    }

    if (marginY) {
      rules.marginTop = `${marginY}rem`;
      rules.marginBottom = `${marginY}rem`;
    }

    if (margin) {
      rules.margin = `${margin}rem`;
    }

    return rules;
  }}

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
