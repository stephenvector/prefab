import React, { useState } from "react";

type InjectedProps = {
  onChange(value: any): void;
  value: any;
};

type DemoControllerPropTypes = {
  initialValue: any;
  children(props: InjectedProps): any;
};

export default function DemoController({
  initialValue,
  children
}: DemoControllerPropTypes) {
  const [value, onChange] = useState(initialValue);

  return children({ value, onChange });
}
