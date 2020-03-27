import React from "react";

interface ButtonProps {
  /** The type of button */
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
  variant?: "default" | "inverse" | "outline" | "inverse-outline";
  /**
   * Background color
   */
  bg?: string;
  /**
   * Foreground color, color of text and border
   */
  fg?: string;
  disabled?: boolean;
}

const buttonStyle = {
  border: "none",
  font: "inherit",
  background: "#000",
  color: "#fff",
  padding: "0.5rem 1rem"
};

function Button({ bg, fg, variant, ...otherProps }: ButtonProps) {
  return <button {...otherProps} style={buttonStyle} />;
}

export default Button;
