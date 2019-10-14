import styled from "styled-components";

type ButtonProps = {
  fullWidth?: true;
};

const Button = styled.button<ButtonProps>`
  font: inherit;
  font-size: 1rem;
  margin: 0;
  padding: 0 2rem;
  line-height: 3rem;
  display: inline-block;
  border: none;
  background: blue;
  color: #fff;
  width: ${p => (p.fullWidth === true ? "100%" : "auto")};
  :hover {
    cursor: pointer;
    background: blue;
  }
`;

export default Button;
