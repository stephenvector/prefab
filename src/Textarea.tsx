import React from "react";
import styled from "./styled";
import Label from "./Label";

const TextareaControl = styled("textarea")`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

interface TextareaProps {
  label: string;
}

export default function Textarea({ label }: TextareaProps) {
  return (
    <div>
      <Label>{label}</Label>
      <TextareaControl />
    </div>
  );
}
