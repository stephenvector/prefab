import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@stephenvector/picto";
import { defaultPrefabTheme } from "./";

const Wrapper = styled.div`
  width: calc(3rem * 7);
  border-radius: ${p => p.theme.sizing.borderRadius};
  box-shadow: inset 0 0 ${p => p.theme.sizing.border} 0
    ${p => p.theme.colors.meta};
`;

Wrapper.defaultProps = { theme: defaultPrefabTheme };

const NextPrevMonthButton = styled.button`
  background: transparent;
  padding: 0;
  font: inherit;
  border: none;
  width: 3rem;
  height: 3rem;
  background: transparent;
  cursor: pointer;
  border-radius: ${p => p.theme.sizing.borderRadius};
  :hover {
    background: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.bg};
    svg polyline {
      stroke: #fff;
    }
  }
`;

NextPrevMonthButton.defaultProps = { theme: defaultPrefabTheme };

const DatePickerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 3rem;
`;

const DayButton = styled.button<{ isSelected: boolean; isToday: boolean }>`
  width: 3rem;
  height: 3rem;
  border: none;
  font: inherit;
  font-weight: ${p => (p.isToday ? "bold" : "normal")};
  background: ${p => (p.isSelected ? p.theme.colors.accent : "transparent")};
  color: ${p => (p.isSelected ? p.theme.colors.bg : "inherit")};
  cursor: pointer;
  border-radius: ${p => p.theme.sizing.borderRadius};
  :hover {
    background: ${p => p.theme.colors.accent};
    color: #fff;
  }
`;

DayButton.defaultProps = { theme: defaultPrefabTheme };

const BlankDay = styled.span`
  width: 3rem;
  height: 3rem;
`;

const monthFormatter = new Intl.DateTimeFormat("en-us", { month: "long" });

type CalendarInfo = {
  year: number;
  month: number;
  date: number;
  numDaysInMonth: number;
  startDayOfWeek: number;
};

function getCalendarInfo(
  date: Date,
  atBeginningOfMonth: boolean = false
): CalendarInfo {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: atBeginningOfMonth ? 1 : date.getDate(),
    numDaysInMonth: new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate(),
    startDayOfWeek: new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  };
}

type DatePickerProps = {
  value: number;
  onChange(val: number): void;
};

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [selectedDateInfo, setSelectedDateInfo] = useState(() =>
    getCalendarInfo(new Date(value))
  );

  const [calendarInfo, setCalendarInfo] = useState(() =>
    getCalendarInfo(new Date(value), true)
  );

  const [rightNowInfo] = useState(() => getCalendarInfo(new Date()));

  useEffect(() => {
    setSelectedDateInfo(getCalendarInfo(new Date(value)));
  }, [value]);

  const handleSelectDate = useCallback(
    (date: number) => {
      const newValue = new Date(
        calendarInfo.year,
        calendarInfo.month,
        date
      ).getTime();

      onChange(newValue);
    },
    [calendarInfo, onChange]
  );

  const previousMonth = useCallback(function previousMonth() {
    const newNow = new Date(calendarInfo.year, calendarInfo.month - 1);
    setCalendarInfo(getCalendarInfo(newNow, true));
  }, []);

  const nextMonth = useCallback(function nextMonth() {
    const newNow = new Date(calendarInfo.year, calendarInfo.month + 1);
    setCalendarInfo(getCalendarInfo(newNow, true));
  }, []);

  return (
    <Wrapper>
      <DatePickerHeader>
        <NextPrevMonthButton onClick={previousMonth} type="button">
          <ArrowLeft />
        </NextPrevMonthButton>
        <div style={{ textAlign: "center" }}>
          {monthFormatter.format(calendarInfo.month)} {calendarInfo.year}
        </div>
        <NextPrevMonthButton onClick={nextMonth} type="button">
          <ArrowRight />
        </NextPrevMonthButton>
      </DatePickerHeader>

      <div>
        {Array(calendarInfo.startDayOfWeek)
          .fill(0)
          .map((_item, index) => (
            <BlankDay key={index} />
          ))}
        {Array(calendarInfo.numDaysInMonth)
          .fill(0)
          .map((_item, index) => {
            let isSelected =
              selectedDateInfo.year === calendarInfo.year &&
              selectedDateInfo.month === calendarInfo.month &&
              selectedDateInfo.date === index;

            let isToday =
              rightNowInfo.year === calendarInfo.year &&
              rightNowInfo.month === calendarInfo.month &&
              rightNowInfo.date === index;

            return (
              <DayButton
                onClick={() => {
                  handleSelectDate(index);
                }}
                key={index}
                isSelected={isSelected}
                isToday={isToday}
              >
                {index + 1}
              </DayButton>
            );
          })}
      </div>
    </Wrapper>
  );
}
