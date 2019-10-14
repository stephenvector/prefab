import React, { useState } from "react";
import { H3 } from "../src";

type DemoControllerPropTypes = {
  initialValue: any;
  label?: string;
  component: React.FunctionComponent<{
    value: any;
    onChange(newValue: any, e?: React.MouseEvent): void;
  }>;
};

export default function DemoController<T>({
  initialValue,
  component,
  label
}: DemoControllerPropTypes) {
  const [value, setValue] = useState(initialValue);
  console.log(component.name);
  return (
    <>
      {label !== undefined && <H3>{label}</H3>}
      {React.createElement(component, { value, onChange: setValue })}
    </>
  );
}
