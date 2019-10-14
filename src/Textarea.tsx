import React, { useCallback } from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  font: inherit;
  box-sizing: border-box;
  padding: 1rem;
  background: #f2f2f2;
  width: 100%;
  min-height: 9rem;
  border: none;
`;

type TextareaProps = {
  value: string;
  onChange(newValue: string): void;
};

function Textarea({ value, onChange }: TextareaProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [value]
  );
  return <StyledTextarea value={value} onChange={handleChange} />;
}

export default Textarea;
