import React from "react";
import styled from "@emotion/styled";
import Label from "./Label";

const InputControl = styled("input")`
  font: inherit;
  padding: 0.5rem;
`;

interface Props {
  label: string;
}

export default function Input({ label }: Props) {
  return (
    <div>
      <Label>{label}</Label>
      <InputControl />
    </div>
  );
}
