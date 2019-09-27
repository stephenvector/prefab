import React, { useState } from "react";
import styled from "./styled";

const DayBox = styled("button")`
  background: transparent;
  height: 3rem;
  width: 3rem;
  min-width: 3rem;
  border: none;
  font: inherit;
  user-select: none;
  &:hover {
    background: ${t => t.theme.colors.accent};
  }
`;

const monthFormatter = new Intl.DateTimeFormat("en-us", { month: "long" });
const dayFormatter = new Intl.DateTimeFormat("en-us", { weekday: "narrow" });

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
    <div>
      <div>
        <div>
          {monthFormatter.format(now)} {now.getFullYear()}
        </div>
        <button onClick={previousMonth} type="button">
          Previous Month
        </button>
        <button onClick={nextMonth} type="button">
          Next Month
        </button>
      </div>

      <div
        style={{
          display: "flex",
          background: "#eee",
          maxWidth: "21rem",
          flexWrap: "wrap"
        }}
      >
        {Array(startDayOfWeek)
          .fill(0)
          .map((_item, index) => (
            <DayBox key={index} />
          ))}
        {Array(numDaysInMonth)
          .fill(0)
          .map((_item, index) => (
            <DayBox key={index}>{index + 1}</DayBox>
          ))}
      </div>

      <p>{now.getFullYear()}</p>
      <p>{numDaysInMonth}</p>
    </div>
  );
}
