import styled from "./styled";

type PaddingProps = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  x?: number;
  y?: number;
  all?: number;
};

const Padding = styled.div<PaddingProps>`
  ${function padding({ top, left, right, bottom, x, y, all }) {
    const rules: { [key: string]: any } = {};

    if (top) {
      rules.paddingTop = `${top}rem`;
    }

    if (left) {
      rules.paddingLeft = `${left}rem`;
    }

    if (right) {
      rules.paddingRight = `${right}rem`;
    }

    if (bottom) {
      rules.paddingBottom = `${bottom}rem`;
    }

    if (x) {
      rules.paddingLeft = `${x}rem`;
      rules.paddingRight = `${x}rem`;
    }

    if (y) {
      rules.paddingTop = `${y}rem`;
      rules.paddingBottom = `${y}rem`;
    }

    if (all) {
      rules.padding = `${all}rem`;
    }

    return rules;
  }}
`;

export default Padding;
