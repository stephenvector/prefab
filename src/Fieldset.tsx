import React from "react";

export default function Fieldset(
  props: React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >
) {
  return <fieldset {...props} />;
}
