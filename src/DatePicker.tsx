import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@stephenvector/picto";

const Wrapper = styled.div`
  width: calc(3rem * 7);
`;

const NextPrevMonthButton = styled.button`
  background: transparent;
  padding: 0;
  font: inherit;
  border: none;
  width: 3rem;
  height: 3rem;
`;

const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 3rem;
`;

const DayButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  font: inherit;
  background: transparent;
  :hover {
    background: blue;
    color: #fff;
  }
`;

const BlankDay = styled.span`
  width: 3rem;
  height: 3rem;
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
      <DatePickerHeader>
        <NextPrevMonthButton onClick={previousMonth} type="button">
          <ArrowLeft />
        </NextPrevMonthButton>
        <div style={{ textAlign: "center" }}>
          {monthFormatter.format(now)} {now.getFullYear()}
        </div>
        <NextPrevMonthButton onClick={nextMonth} type="button">
          <ArrowRight />
        </NextPrevMonthButton>
      </DatePickerHeader>

      <div>
        {Array(startDayOfWeek)
          .fill(0)
          .map((_item, index) => (
            <BlankDay key={index} />
          ))}
        {Array(numDaysInMonth)
          .fill(0)
          .map((_item, index) => (
            <DayButton key={index}>{index + 1}</DayButton>
          ))}
      </div>
    </Wrapper>
  );
}
