import React, { useCallback } from "react";

type TextareaProps = {
  value: string;
  onChange(newValue: string): void;
};

function Textarea(
  { value, onChange }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [value]
  );
  return <textarea ref={ref} value={value} onChange={handleChange} />;
}

export default React.forwardRef(Textarea);
