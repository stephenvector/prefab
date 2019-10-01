import React, { useEffect, useState } from "react";

// export const SliderBar = styled.div<{
//   width: number;
//   theme: DefaultTheme;
// }>`
//   position: absolute;
//   left: 0rem;
//   bottom: 0.75rem;
//   top: 0.75rem;
//   height: 0.5rem;
//   border-radius: 0.5rem;
//   background: ${p => p.theme.colors.accent};
//   width: ${p => `${p.width * 100}%`};
// `;

// export const SliderBackgroundBar = styled.div``;

// export const SliderWrapper = styled.div`
//   height: 2rem;
//   position: relative;
//   width: 100%;
//   ${SliderBackgroundBar} {
//     background: #ddd;
//     width: 100%;
//     position: absolute;
//     left: 0rem;
//     bottom: 0.75rem;
//     top: 0.75rem;
//     height: 0.5rem;
//     border-radius: 0.5rem;
//   }
// `;

// export const SliderDot = styled.div<{
//   width: number;
//   theme: DefaultTheme;
// }>`
//   position: absolute;
//   bottom: 0;
//   top: 50%;
//   height: 2rem;
//   width: 2rem;
//   background: ${p => p.theme.colors.background};
//   box-shadow: inset 0 0 2px 0 ${p => p.theme.colors.accent};
//   transform: translateY(-1rem) translateX(-1rem);
//   left: ${p => `${p.width * 100}%`};
//   z-index: 100;
//   border-radius: 1rem;
// `;

type SliderProps = {
  min: number;
  max: number;
  step: number;
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

        onChange(newValue, e);

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

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseEvent}
        onMouseDown={handleMouseEvent}
      >
        <div style={{ width: (value - min) / (max - min) }} />

        <div />

        <div style={{ width: (value - min) / (max - min) }} />
      </div>
    );
  }
);

Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Slider;
