import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useField } from "./Form";
import Label from "./Label";

const monthFormatter = new Intl.DateTimeFormat("en-us", { month: "long" });

const StyledDateField = styled.div`
  border-radius: 3px;
  text-align: center;
  line-height: 2rem;
  margin-bottom: 2rem;
  width: 14rem;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  border-bottom: 2px solid #fff;
  button {
    font: inherit;
    color: inherit;
    background: transparent;
    border: none;
    padding: none;
    margin: none;
    -moz-appearance: none;
    cursor: pointer;
    width: 2rem;
  }
  & > div {
    width: 10rem;
  }
`;

const DaysHeader = styled.div`
  display: flex;
  span {
    width: 2rem;
    height: 2rem;
    display: block;
  }
`;

const Days = styled.div`
  display: flex;
  flex-wrap: wrap;
  span,
  button {
    width: 2rem;
    height: 2rem;
    display: block;
  }
  button {
    color: inherit;
    background: transparent;
    cursor: pointer;
    border: none;
  }
`;

function getNumberOfDaysInMonth(date: Date) {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 0)
  ).getDate();
}

type DatePickerProps = {
  name: string;
  label: string;
};

export default function DateField(props: DatePickerProps) {
  const { label, name } = props;
  const { onChange } = useField(name);
  const [beginningOfCurrentMonth, setBeginningOfCurrentMonth] = useState(() => {
    const rightNow = new Date();

    rightNow.setDate(1);

    return rightNow;
  });

  const handleSelectDate = useCallback(
    (date: number) => {
      onChange(new Date(beginningOfCurrentMonth).setDate(date));
    },
    [onChange, beginningOfCurrentMonth]
  );

  const previousMonth = useCallback(() => {
    if (beginningOfCurrentMonth.getMonth() === 0) {
      const newDate = new Date(beginningOfCurrentMonth);
      newDate.setFullYear(newDate.getFullYear() - 1);
      newDate.setMonth(11);
      setBeginningOfCurrentMonth(newDate);
    } else {
      const newDate = new Date(beginningOfCurrentMonth);
      newDate.setMonth(newDate.getMonth() - 1);
      setBeginningOfCurrentMonth(newDate);
    }
  }, [beginningOfCurrentMonth]);

  const nextMonth = useCallback(() => {
    if (beginningOfCurrentMonth.getMonth() === 11) {
      const newDate = new Date(beginningOfCurrentMonth);
      newDate.setFullYear(newDate.getFullYear() + 1);
      newDate.setMonth(0);
      setBeginningOfCurrentMonth(newDate);
    } else {
      const newDate = new Date(beginningOfCurrentMonth);
      newDate.setMonth(newDate.getMonth() + 1);
      setBeginningOfCurrentMonth(newDate);
    }
  }, [beginningOfCurrentMonth]);

  return (
    <>
      <Label>{label}</Label>
      <StyledDateField>
        <Header>
          <button onClick={previousMonth} type="button">
            &lt;
          </button>

          <div style={{ textAlign: "center" }}>
            {monthFormatter.format(beginningOfCurrentMonth)}
            <br />
            {beginningOfCurrentMonth.getFullYear()}
          </div>

          <button onClick={nextMonth} type="button">
            &gt;
          </button>
        </Header>

        <DaysHeader>
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </DaysHeader>

        <Days>
          {Array(beginningOfCurrentMonth.getDay())
            .fill(0)
            .map((_v, index) => (
              <span key={index}>&nbsp;</span>
            ))}
          {Array(getNumberOfDaysInMonth(beginningOfCurrentMonth))
            .fill(0)
            .map((_v, index) => (
              <button
                key={index}
                onClick={e => {
                  e.preventDefault();
                  handleSelectDate(index);
                }}
              >
                {index + 1}
              </button>
            ))}
        </Days>
      </StyledDateField>
    </>
  );
}
