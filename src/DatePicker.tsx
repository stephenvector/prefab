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

const DayButton = styled.button<{ isSelected: boolean }>`
  width: 3rem;
  height: 3rem;
  border: none;
  font: inherit;
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

type DatePickerProps = {
  value: number;
  onChange(val: number): void;
};

type YearMonthDate = {
  year: number;
  month: number;
  date: number;
};

export default function DatePicker({ value, onChange }: DatePickerProps) {
  const [now, setNow] = useState(new Date(value));

  const [currentSelectedYearMonthDay, setCurrentSelected] = useState<
    undefined | YearMonthDate
  >(undefined);

  useEffect(() => {
    const newNow = new Date(value);
    setNow(newNow);
  }, [value]);

  useEffect(() => {
    setCurrentSelected({
      year: now.getFullYear(),
      month: now.getMonth(),
      date: now.getDate()
    });
  }, [now]);

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

  const handleSelectDate = useCallback(
    (date: number) => {
      const newValue = new Date(
        now.getFullYear(),
        now.getMonth(),
        date
      ).getTime();
      onChange(newValue);
    },
    [now, onChange]
  );

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
          .map((_item, index) => {
            const isSelected = false;
            return (
              <DayButton
                onClick={() => {
                  handleSelectDate(index);
                }}
                key={index}
                isSelected={isSelected}
              >
                {index + 1}
              </DayButton>
            );
          })}
      </div>
    </Wrapper>
  );
}
