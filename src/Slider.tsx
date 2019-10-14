import React, { useCallback, useEffect, useState, useRef } from "react";
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
  onChange(newValue: number): void;
  value: number;
};

function Slider({ min, max, step, onChange, value }: SliderProps) {
  const [haveMouseDownFocus, setMouseDownFocus] = useState(false);
  const ref = useRef<undefined | HTMLDivElement>();

  const handleMouseEvent = useCallback(
    function(e: React.MouseEvent) {
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

        onChange(newValue);

        if (e.type === "mousedown") {
          setMouseDownFocus(true);
        }
      }
    },
    [haveMouseDownFocus, onChange, setMouseDownFocus]
  );

  useEffect(() => {
    function mousedownHandler() {
      setMouseDownFocus(false);
    }

    window.addEventListener("mouseup", mousedownHandler);

    return () => {
      window.removeEventListener("mouseup", mousedownHandler);
    };
  }, []);

  const mouseMoveListener = useCallback(
    function(this: Window, ev: MouseEvent) {
      if (!haveMouseDownFocus || ref.current === undefined) {
        return;
      }

      const sliderBoundingRect = ref.current.getBoundingClientRect();

      if (ev.clientX <= sliderBoundingRect.left) {
        onChange(min);
      } else if (
        ev.clientX >=
        sliderBoundingRect.left + sliderBoundingRect.width
      ) {
        onChange(max);
      } else {
        const newFraction =
          (ev.clientX - sliderBoundingRect.left) / sliderBoundingRect.width;
        const range = Math.abs(max - min);
        let newValue = range * newFraction + min;
        newValue = newValue - (newValue % step);
        onChange(newValue);
      }
    },
    [haveMouseDownFocus, ref, value, onChange]
  );

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveListener);
    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, [haveMouseDownFocus]);

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

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Slider;
