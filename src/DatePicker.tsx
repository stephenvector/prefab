import React, { useState } from "react";
import styled from "./styled";

const Wrapper = styled("div")`
  background: #fff;
  width: 21rem;
  box-shadow: inset 0 0 0 1px #ddd;
  border-radius: 3px;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  line-height: 3rem;
  border-bottom: 1px solid #ddd;
`;

const DayBox = styled("button")`
  background: transparent;
  height: 3rem;
  width: 3rem;
  min-width: 3rem;
  border: none;
  font: inherit;
  user-select: none;
  &:hover {
    background: blue;
    color: #fff;
  }
`;

const NextPreviousButton = styled("button")`
  background: transparent;
  padding: 0;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  border: none;
  height: 3rem;
  line-height: 3rem;
  width: 3rem;
  text-align: center;
`;

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
    <Wrapper>
      <Header>
        <NextPreviousButton onClick={previousMonth} type="button">
          &larr;
        </NextPreviousButton>
        <div style={{ textAlign: "center" }}>
          {monthFormatter.format(now)} {now.getFullYear()}
        </div>
        <NextPreviousButton onClick={nextMonth} type="button">
          &rarr;
        </NextPreviousButton>
      </Header>

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
            <DayBox key={index} />
          ))}
        {Array(numDaysInMonth)
          .fill(0)
          .map((_item, index) => (
            <DayBox key={index}>{index + 1}</DayBox>
          ))}
      </div>
    </Wrapper>
  );
}
