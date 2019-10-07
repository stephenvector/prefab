import React, { useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { lightTheme } from "./themes";

const datePickerStylesheet = StyleSheet.create({
  wrapper: {
    width: "21rem",
    font: "inherit",
    fontFamily: `var(--fonts-familyDefault, ${lightTheme.fonts.familyDefault})`
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "3rem"
  },
  dayBox: {
    background: "transparent",
    border: "none",
    font: "inherit",
    height: "3rem",
    width: "3rem",
    borderRadius: `var(--sizing-borderRadius, ${lightTheme.sizing.borderRadius})px`,
    ":hover": {
      background: `var(--colors-accent, ${lightTheme.colors.accent})`,
      color: `var(--colors-background, ${lightTheme.colors.background})`
    }
  },
  nextPreviousButton: {
    background: "transparent",
    border: "none",
    font: "inherit",
    padding: 0,
    height: "3rem",
    lineHeight: "3rem"
  }
});

const monthFormatter = new Intl.DateTimeFormat("en-us", { month: "long" });

export default function DatePicker() {
  const [now, setNow] = useState(new Date(Date.now()));

  const numDaysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const startDayOfWeek = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  ).getDay();

  function previousMonth() {
    const newNow = new Date(now.getFullYear(), now.getMonth() - 1);
    setNow(newNow);
  }

  function nextMonth() {
    const newNow = new Date(now.getFullYear(), now.getMonth() + 1);
    setNow(newNow);
  }

  return (
    <div className={css(datePickerStylesheet.wrapper)}>
      <div className={css(datePickerStylesheet.header)}>
        <button
          className={css(datePickerStylesheet.nextPreviousButton)}
          onClick={previousMonth}
          type="button"
        >
          &larr;
        </button>
        <div style={{ textAlign: "center" }}>
          {monthFormatter.format(now)} {now.getFullYear()}
        </div>
        <button
          className={css(datePickerStylesheet.nextPreviousButton)}
          onClick={nextMonth}
          type="button"
        >
          &rarr;
        </button>
      </div>

      <div
        style={{
          display: "flex",
          maxWidth: "21rem",
          flexWrap: "wrap"
        }}
      >
        {Array(startDayOfWeek)
          .fill(0)
          .map((_item, index) => (
            <span className={css(datePickerStylesheet.dayBox)} key={index} />
          ))}
        {Array(numDaysInMonth)
          .fill(0)
          .map((_item, index) => (
            <button className={css(datePickerStylesheet.dayBox)} key={index}>
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
