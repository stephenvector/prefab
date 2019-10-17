import React, { useCallback } from "react";
import styled from "styled-components";
import { Label } from "./";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange(newValue: string): void;
  value: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  label?: string;
};

const InputControl = styled.input`
  font: inherit;
  border: none;
  background: #f2f2f2;
  border-radius: 3px;
`;

export default function Input({
  label,
  onChange,
  value,
  error,
  errorMessage,
  ...otherProps
}: InputProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      {label !== undefined && <Label>{label}</Label>}
      <InputControl {...otherProps} value={value} onChange={handleChange} />
      {error !== undefined && errorMessage !== undefined && (
        <div>ERROR: {errorMessage}</div>
      )}
    </>
  );
}
