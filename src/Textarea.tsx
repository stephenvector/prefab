import React, { useCallback } from "react";

const textareaStyle: React.CSSProperties = {
  background: "transparent",
  font: "inherit",
  padding: "0.5rem"
};

type TextareaProps = {
  value: string;
  onChange(newValue: string): void;
};

function Textarea({ value, onChange }: TextareaProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [value]
  );

  return (
    <textarea style={textareaStyle} value={value} onChange={handleChange} />
  );
}

export default Textarea;
