import React, { useEffect, useRef, useState } from "react";
import { Slider } from "./";
import { isValidHex, getRGBFromHex, getHexFromRGB } from "./utils";

type ColorPickerProps = {
  value: string;
  onChange(newValue: string): void;
};

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [rgbValue, setRGBValue] = useState(getRGBFromHex(value));

  const rRef = useRef<HTMLDivElement>(null);
  const gRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);

  if (!isValidHex(value)) {
    throw new Error("ColorPicker expects a hex value!");
  }

  function handleChange(newValue: number, e: React.MouseEvent) {
    if (rRef.current === e.currentTarget) {
      onChange(getHexFromRGB({ ...rgbValue, r: newValue }));
    } else if (gRef.current === e.currentTarget) {
      onChange(getHexFromRGB({ ...rgbValue, g: newValue }));
    } else if (bRef.current === e.currentTarget) {
      onChange(getHexFromRGB({ ...rgbValue, b: newValue }));
    }
  }

  useEffect(() => {
    setRGBValue(getRGBFromHex(value));
  }, [value]);

  return (
    <div className="ColorPicker">
      <Slider
        ref={rRef}
        onChange={handleChange}
        value={rgbValue.r}
        min={0}
        max={255}
        step={1}
      />
      <Slider
        ref={gRef}
        onChange={handleChange}
        value={rgbValue.g}
        min={0}
        max={255}
        step={1}
      />
      <Slider
        ref={bRef}
        onChange={handleChange}
        value={rgbValue.b}
        min={0}
        max={255}
        step={1}
      />
    </div>
  );
}
