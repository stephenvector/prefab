import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slider, { BackgroundBar, IndicatorBar, Wrapper } from "./Slider";
import { isValidHex, getRGBFromHex, getHexFromRGB, RGBColor } from "./utils";

type ColorPreviewProps = {
  color: string;
};

const ColorPreview = styled.div<ColorPreviewProps>`
  background: ${p => p.color};
  width: 9rem;
  height: 9rem;
`;

const Sliders = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

type ColorPickerWrapperProps = {
  rgbValue: RGBColor;
};

const SliderWrapper = styled.div<ColorPickerWrapperProps>`
  display: flex;
  ${BackgroundBar} {
    background: transparent;
  }
  ${IndicatorBar} {
    background: transparent;
  }
  ${Wrapper} {
    margin: 0;
  }
`;

const RGBWrapper = styled.div<{ rgbValue: RGBColor; rgb: "r" | "g" | "b" }>`
  ${BackgroundBar} {
    background: ${p =>
      `linear-gradient(to right, ${getHexFromRGB({
        ...p.rgbValue,
        [p.rgb]: 0
      })}, ${getHexFromRGB({ ...p.rgbValue, [p.rgb]: 255 })})`};
  }
`;

type ColorPickerProps = {
  value: string;
  onChange(newValue: string): void;
};
function ColorPicker({ value, onChange }: ColorPickerProps) {
  const [rgbValue, setRGBValue] = useState(getRGBFromHex(value));

  if (!isValidHex(value)) {
    throw new Error("ColorPicker expects a hex value!");
  }

  function handleRedChange(newValue: number) {
    const newRGB = { ...rgbValue, r: newValue };
    onChange(getHexFromRGB(newRGB));
  }

  function handleGreenChange(newValue: number) {
    const newRGB = { ...rgbValue, g: newValue };
    onChange(getHexFromRGB(newRGB));
  }

  function handleBlueChange(newValue: number) {
    const newRGB = { ...rgbValue, b: newValue };
    onChange(getHexFromRGB(newRGB));
  }

  useEffect(() => {
    if (value !== undefined) {
      setRGBValue(getRGBFromHex(value));
    }
  }, [value]);

  return (
    <SliderWrapper rgbValue={rgbValue}>
      <ColorPreview color={getHexFromRGB(rgbValue)} />
      <Sliders>
        <RGBWrapper rgbValue={rgbValue} rgb={"r"}>
          <Slider
            onChange={handleRedChange}
            value={rgbValue.r}
            min={0}
            max={255}
            step={1}
          />
        </RGBWrapper>
        <RGBWrapper rgbValue={rgbValue} rgb={"g"}>
          <Slider
            onChange={handleGreenChange}
            value={rgbValue.g}
            min={0}
            max={255}
            step={1}
          />
        </RGBWrapper>
        <RGBWrapper rgbValue={rgbValue} rgb={"b"}>
          <Slider
            onChange={handleBlueChange}
            value={rgbValue.b}
            min={0}
            max={255}
            step={1}
          />
        </RGBWrapper>
      </Sliders>
    </SliderWrapper>
  );
}

export default ColorPicker;
