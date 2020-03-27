import React, { useState, useEffect, useCallback } from "react";

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
    date: atBeginningOfMonth ? 0 : date.getDate(),
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

function DatePicker(
  { value, onChange }: DatePickerProps,
  ref: React.Ref<HTMLDivElement>
) {
  const [selectedDateInfo, setSelectedDateInfo] = useState(() =>
    getCalendarInfo(new Date(value))
  );

  const [calendarInfo, setCalendarInfo] = useState(() =>
    getCalendarInfo(new Date(value), true)
  );

  const [rightNowInfo] = useState(() => getCalendarInfo(new Date(), true));

  useEffect(() => {
    setSelectedDateInfo(getCalendarInfo(new Date(value)));
  }, [value]);

  const handleSelectDate = useCallback(
    (date: number) => {
      const newValue = new Date(
        Date.UTC(calendarInfo.year, calendarInfo.month, date)
      ).getTime();

      onChange(newValue);
    },
    [calendarInfo, onChange]
  );

  const previousMonth = useCallback(
    function previousMonth() {
      const newNow = new Date(calendarInfo.year, calendarInfo.month - 1);
      setCalendarInfo(getCalendarInfo(newNow, true));
    },
    [calendarInfo, setCalendarInfo, getCalendarInfo]
  );

  const nextMonth = useCallback(
    function nextMonth() {
      const newNow = new Date(calendarInfo.year, calendarInfo.month + 1);
      setCalendarInfo(getCalendarInfo(newNow, true));
    },
    [calendarInfo, setCalendarInfo, getCalendarInfo]
  );

  return (
    <div ref={ref}>
      <div>
        <button onClick={previousMonth} type="button">
          Prev
        </button>
        <div style={{ textAlign: "center" }}>
          {monthFormatter.format(
            new Date(calendarInfo.year, calendarInfo.month)
          )}{" "}
          {calendarInfo.year}
        </div>
        <button onClick={nextMonth} type="button">
          Next
        </button>
      </div>

      <div>
        {Array(calendarInfo.startDayOfWeek)
          .fill(0)
          .map((_item, index) => (
            <span key={index} />
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
              <button
                onClick={() => {
                  handleSelectDate(index);
                }}
                key={index}
                // isSelected={isSelected}
                // isToday={isToday}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default React.forwardRef(DatePicker);
