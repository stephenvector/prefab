import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  return <div {...props} />;
}
