import React from "react";
import { Label, Input } from "../";
import { useField } from "formik";
import { PrefabFieldProps } from "../types";

export default function TextField(props: PrefabFieldProps) {
  const { label, name } = props;
  const [field] = useField<string>(name);

  return (
    <>
      <Label>{label}</Label>
      <Input name={name} onChange={field.onChange} />
    </>
  );
}
