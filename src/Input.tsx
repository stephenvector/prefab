import React, { useCallback } from "react";
import styled from "./styled";
import { defaultPrefabTheme } from "./";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange(newValue: string): void;
  value: string;
};

const InputControl = styled.input`
  font: inherit;
  border: none;
  background: ${p => p.theme.colors.bg};
  border-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: inset 0 0 0
    ${p => `${p.theme.sizing.border} ${p.theme.colors.meta}`};
  padding: 0 0.5rem;
  width: 100%;
  box-sizing: border-box;
  line-height: ${p => p.theme.sizing.formControls};
  :active,
  :focus {
    box-shadow: inset 0 0 0
      ${p => `${p.theme.sizing.border} ${p.theme.colors.accent}`};
  }
`;

function Input({ onChange, value, ...otherProps }: InputProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return <InputControl {...otherProps} value={value} onChange={handleChange} />;
}

Input.defaultProps = {
  theme: defaultPrefabTheme
};

export default Input;
