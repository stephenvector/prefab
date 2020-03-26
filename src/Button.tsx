import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
  variant?: "default" | "inverse" | "outline" | "inverse-outline";
  bg?: string;
  fg?: string;
  disabled?: boolean;
}

const buttonStyle = {
  border: "none",
  font: "inherit"
};

export default function Button({
  bg,
  fg,
  variant,
  ...otherProps
}: ButtonProps) {
  return <button style={buttonStyle} {...otherProps} />;
}
