import React, { useState } from "react";
import styled from "styled-components";
import { PrefabThemeConfig, lightTheme } from "./themes";

const Wrapper = styled.div`
  height: 2rem;
  position: relative;
`;

const Bar = styled.div<{ width: number; theme: PrefabThemeConfig }>`
  position: absolute;
  left: 0rem;
  bottom: 0.75rem;
  top: 0.75rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  background: ${p => p.theme.colors.accent};
  width: ${p => p.width}%;
`;

Bar.defaultProps = {
  theme: lightTheme
};

const BackgroundBar = styled(Bar)`
  background: #ddd;
  width: 100%;
  right: 0;
`;

const Dot = styled.div<{ width: number; theme: PrefabThemeConfig }>`
  position: absolute;
  bottom: 0;
  top: 50%;
  height: 2rem;
  width: 2rem;
  background: ${p => p.theme.colors.accent};
  transform: translateY(-1rem) translateX(-1rem);
  left: ${p => p.width}%;
  z-index: 100;
  border-radius: 1rem;
`;

Dot.defaultProps = {
  theme: lightTheme
};

type Props = {
  min: number;
  max: number;
  step: number;
  onChange?(newValue: number): void;
  value?: number;
};

function Slider({ min, max, step, onChange, value }: Props) {
  const [currentValue, setCurrentValue] = useState(
    value !== undefined ? value : max - min / 2
  );

  function handleMouseEvent(e: React.MouseEvent) {
    if (e.buttons === 1 && e.button === 0) {
      const clientRect = e.currentTarget.getBoundingClientRect();
      const newFraction = e.clientX / clientRect.width;
      const range = Math.abs(max - min);

      setCurrentValue(range * newFraction + min);
    }
  }

  return (
    <Wrapper onMouseMove={handleMouseEvent} onMouseDown={handleMouseEvent}>
      <Dot width={currentValue - min} />

      <BackgroundBar width={currentValue - min} />

      <Bar width={currentValue - min} />
    </Wrapper>
  );
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Slider;
