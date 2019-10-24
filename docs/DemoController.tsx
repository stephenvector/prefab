import React, { useState } from "react";
import { H2 } from "../src";

type InjectedProps = {
  onChange(value: any): void;
  value: any;
};

type DemoControllerPropTypes = {
  label?: string;
  initialValue: any;
  children(props: InjectedProps): any;
};

export default function DemoController({
  initialValue,
  children,
  label
}: DemoControllerPropTypes) {
  const [value, onChange] = useState(initialValue);

  return (
    <>
      {label !== undefined && <H2>{label}</H2>}
      {children({ value, onChange })}
    </>
  );
}
