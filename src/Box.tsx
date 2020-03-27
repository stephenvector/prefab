import React from "react";

const boxStyle = {
  display: "flex"
};

interface BoxProps {
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  return <div {...props} style={boxStyle} />;
}
