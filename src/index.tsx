import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {}

export function Button(props: ButtonProps) {
  return React.createElement("button", props);
}
