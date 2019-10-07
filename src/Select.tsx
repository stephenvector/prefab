import React, { useCallback, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

const selectStyles = StyleSheet.create({
  wrapper: {
    position: "relative",
    fontFamily: `var(--fonts-familyDefault, ${lightTheme.fonts.familyDefault})`
  },
  control: {
    height: "3rem",
    minWidth: "10rem",
    display: "flex",
    boxShadow: `inset 0 0 0 2px var(--colors-meta, ${lightTheme.colors.meta})`,
    cursor: "pointer",
    borderRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius}px)`,
    overflow: "hidden",
    ":hover": {
      boxShadow: `inset 0 0 0 1px var(--colors-accent, ${lightTheme.colors.accent})`
    }
  },
  controlOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  controlButton: {
    cursor: "pointer",
    height: "3rem",
    width: "3rem",
    border: "none",
    background: "transparent",
    color: "inherit",
    lineHeight: "3rem"
  },
  currentValue: {
    flex: 1
  },
  optionsContainer: {
    position: "absolute",
    top: "calc(3rem - 1px)",
    left: 0,
    right: 0,
    maxHeight: "12rem",
    overflow: "hidden",
    boxShadow: `inset 0 0 0 2px var(--colors-accent, ${lightTheme.colors.accent})`,
    borderBottomLeftRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius}px)`,
    borderBottomRightRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius}px)`
  },
  option: {
    font: "inherit",
    lineHeight: "3rem",
    border: "none",
    display: "block",
    padding: 0,
    textIndent: "0.5rem",
    width: "100%",
    textAlign: "left",
    background: "transparent",
    cursor: "pointer",
    ":hover": {
      background: `var(--colors-accent, ${lightTheme.colors.accent})`,
      color: `var(--colors-background, ${lightTheme.colors.background})`
    }
  }
});

type SelectProps = {
  value: any;
  multiple: boolean;
  options: {
    label: string;
    value: any;
  }[];
};

function Select({ value, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptionsList = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className={css(selectStyles.wrapper)}>
      <div
        onClick={toggleOptionsList}
        className={css([
          selectStyles.control,
          isOpen ? selectStyles.controlOpen : null
        ])}
      >
        <div className={css(selectStyles.currentValue)}>{value}</div>
        <button
          onClick={toggleOptionsList}
          className={css(selectStyles.controlButton)}
        />
      </div>
      {isOpen && (
        <div className={css(selectStyles.optionsContainer)}>
          {options.map((option, index) => (
            <button
              className={css(selectStyles.option)}
              key={`${option.value}${index}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

Select.defaultProps = {
  multiple: false,
  options: []
};

export default Select;
