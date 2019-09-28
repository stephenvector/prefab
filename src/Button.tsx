import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullWidth?: true;
  variant?: "default" | "error" | "accent" | "success" | "warning";
}

export default styled.button`
  border: none;
  font: inherit;
  display: inline-block;
  font-weight: bold;
  background: #eee;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 0.5rem 1rem;
`;
