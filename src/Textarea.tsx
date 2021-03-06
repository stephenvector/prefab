import React, { useCallback } from "react";
import styled from "./styled";
import { defaultPrefabTheme } from "./";

const StyledTextarea = styled.textarea`
  font: inherit;
  box-sizing: border-box;
  padding: 1rem;
  background: transparent;
  width: 100%;
  min-height: 9rem;
  border: none;
  background: ${p => p.theme.colors.bg};
  box-sizing: border-box;
  border-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: inset 0 0
    ${p => `${p.theme.sizing.border} ${p.theme.colors.meta}`};
  :active,
  :focus {
    box-shadow: inset 0 0
      ${p => `${p.theme.sizing.border} ${p.theme.colors.accent}`};
  }
`;

StyledTextarea.defaultProps = {
  theme: defaultPrefabTheme
};

type TextareaProps = {
  value: string;
  onChange(newValue: string): void;
};

function Textarea(
  { value, onChange }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return <StyledTextarea ref={ref} value={value} onChange={handleChange} />;
}

export default React.forwardRef(Textarea);
