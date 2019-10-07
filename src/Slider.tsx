import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  wrapper: {
    height: "2rem",
    position: "relative",
    width: "100%",
    margin: "0.5rem 0"
  },
  indicatorBar: {
    position: "absolute",
    left: 0,
    bottom: "0.75rem",
    top: "0.75rem",
    height: "0.5rem",
    borderRadius: "0.5rem",
    background: "#f2f2f2"
  },
  backgroundBar: {
    background: "#ddd",
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: "0.75rem",
    top: "0.75rem",
    height: "0.5rem",
    borderRadius: "0.5rem"
  },
  dot: {
    position: "absolute",
    bottom: 0,
    top: "50%",
    height: "2rem",
    width: "2rem",
    borderRadius: "1rem",
    background: "#000",
    transform: "translateY(-1rem) translateX(-1rem)",
    zIndex: 100
  }
});

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
        className={css(styles.wrapper)}
      >
        <div
          className={css(styles.indicatorBar)}
          style={{ width: (value - min) / (max - min) }}
        />

        <div className={css(styles.backgroundBar)} />

        <div
          className={css(styles.dot)}
          style={{ left: `${((value - min) / (max - min)) * 100}%` }}
        />
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
