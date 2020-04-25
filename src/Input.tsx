import styled from "./styled";
import { defaultPrefabTheme } from "./";

const Input = styled.input`
  font: inherit;
  border: none;
  background: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: inset 0 0 ${p => p.theme.sizing.border} 0
    ${p => p.theme.colors.meta};
  padding: 0 0.5rem;
  width: 100%;
  box-sizing: border-box;
  line-height: ${p => p.theme.sizing.formControls};
  :active,
  :focus {
    box-shadow: inset 0 0 ${p => p.theme.sizing.border} 0
      ${p => p.theme.colors.accent};
  }
`;

Input.defaultProps = {
  theme: defaultPrefabTheme
};

export default Input;
