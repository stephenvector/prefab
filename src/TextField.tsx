import React, { useCallback } from "react";
import { useField } from "./Form";
import { PrefabFieldProps } from "./types";

export default function TextField(props: PrefabFieldProps) {
  const { label, name } = props;
  const { value, onChange } = useField(name);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      <label>{label}</label>
      <input name={name} value={value} onChange={handleChange} />
    </>
  );
}
