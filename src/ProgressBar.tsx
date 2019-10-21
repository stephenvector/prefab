import React from "react";

interface Props {
  value: number;
}

function ProgressBar({ value }: Props) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div />
    </div>
  );
}

export default ProgressBar;
