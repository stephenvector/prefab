import React, { useState } from "react";
// import { PrefabThemeConfig, lightTheme } from "./themes";

// const Wrapper = styled.div`
//   background: ${p => p.theme.colors.background};
//   width: 21rem;
//   border: 1px solid
//     ${(p: { theme: PrefabThemeConfig }) => p.theme.colors.border};
//   border-radius: ${p => p.theme.sizing.borderRadius};
// `;

// Wrapper.defaultProps = {
//   theme: lightTheme
// };

// const Header = styled.div<{ theme: PrefabThemeConfig }>`
//   display: flex;
//   justify-content: space-between;
//   line-height: 3rem;
//   border-bottom: 1px solid
//     ${(p: { theme: PrefabThemeConfig }) => p.theme.colors.border};
// `;

// Header.defaultProps = {
//   theme: lightTheme
// };

// const DayBox = styled.button<{
//   theme: PrefabThemeConfig;
// }>`
//   background: transparent;
//   height: 3rem;
//   width: 3rem;
//   min-width: 3rem;
//   border: none;
//   font: inherit;
//   user-select: none;
//   border-radius: ${p => p.theme.sizing.borderRadius};
//   &:hover {
//     background: ${p => p.theme.colors.accent};
//     color: #fff;
//   }
// `;

// DayBox.defaultProps = {
//   theme: lightTheme
// };

// const NextPreviousButton = styled.button`
//   background: transparent;
//   padding: 0;
//   cursor: pointer;
//   display: inline-block;
//   font: inherit;
//   border: none;
//   height: 3rem;
//   line-height: 3rem;
//   width: 3rem;
//   text-align: center;
// `;

// NextPreviousButton.defaultProps = {
//   theme: lightTheme
// };

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
    <div>
      <div>
        <button onClick={previousMonth} type="button">
          &larr;
        </button>
        <div style={{ textAlign: "center" }}>
          {monthFormatter.format(now)} {now.getFullYear()}
        </div>
        <button onClick={nextMonth} type="button">
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
            <button key={index} />
          ))}
        {Array(numDaysInMonth)
          .fill(0)
          .map((_item, index) => (
            <button key={index}>{index + 1}</button>
          ))}
      </div>
    </div>
  );
}
