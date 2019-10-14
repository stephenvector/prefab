import React from "react";
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
`;

export default function Input({ label }: InputProps) {
  return (
    <>
      {label !== undefined && <Label>{label}</Label>}
      <InputControl />
    </>
  );
}
