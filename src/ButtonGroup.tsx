import styled from "./styled";
import { Button, defaultPrefabTheme } from "./";

const ButtonGroup = styled.div


  display: flex;
  border-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: ${p =>
    `inset 0 0 0 ${p.theme.sizing.border} ${p.theme.colors.accent}`};
  overflow: hidden;
  ${Button} {
    color: blue;
    border: none;
    box-shadow: none;
    background: transparent;
    padding: 0;
    flex: 1;
    :hover {
      background: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.bg};
    }
  }
`;

ButtonGroup.defaultProps = {
  theme: defaultPrefabTheme
};

export default ButtonGroup;
