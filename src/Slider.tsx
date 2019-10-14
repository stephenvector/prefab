import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 3rem;
  display: flex;
  width: 100%;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const BackgroundBar = styled.div`
  height: 1rem;
  width: 100%;
  border-radius: calc(1rem / 2);
  background: #f2f2f2;
  overflow: visible;
  position: relative;
`;

export const IndicatorBar = styled.div<{ position: number }>`
  background: blue;
  height: 100%;
  position: absolute;
  width: ${p => `${p.position}%`};
  border-radius: calc(2rem / 2);
`;

export const Dot = styled.div<{ position: number }>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  background: #fff;
  border-radius: calc(2rem / 2);
  transform: translateY(calc(2rem / -4)) translateX(calc(2rem / -4));
  left: ${p => `${p.position}%`};
  box-shadow: 0 0 0.2rem 0 blue;
`;

type SliderProps = {
  min?: number;
  max?: number;
  step?: number;
  onChange(newValue: number, e: React.MouseEvent): void;
  value: number;
};

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ min, max, step, onChange, value }: SliderProps, ref) => {
    const [haveMouseDownFocus, setMouseDownFocus] = useState(false);
    function handleMouseEvent(e: React.MouseEvent) {
      e.stopPropagation();
      e.preventDefault();

      if (e.type !== "mousedown" && !haveMouseDownFocus) {
        return;
      }

      if (e.buttons === 1 && e.button === 0) {
        const clientRect = e.currentTarget.getBoundingClientRect();
        let newValue = min;

        if (e.clientX > clientRect.left) {
          const newFraction = (e.clientX - clientRect.left) / clientRect.width;
          const range = Math.abs(max - min);
          newValue = range * newFraction + min;
        }

        newValue = newValue - (newValue % step);

        if (onChange !== undefined) {
          onChange(newValue, e);
        }

        if (e.type === "mousedown") {
          setMouseDownFocus(true);
        }
      }
    }

    useEffect(() => {
      function mousedownHandler() {
        setMouseDownFocus(false);
      }

      window.addEventListener("mouseup", mousedownHandler);

      return () => {
        window.removeEventListener("mouseup", mousedownHandler);
      };
    }, []);

    const position = ((value - min) / (max - min)) * 100;

    return (
      <Wrapper
        ref={ref}
        onMouseMove={handleMouseEvent}
        onMouseDown={handleMouseEvent}
      >
        <BackgroundBar>
          <IndicatorBar position={position} />
          <Dot position={position} />
        </BackgroundBar>
      </Wrapper>
    );
  }
);

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Slider;
