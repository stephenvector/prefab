import React from "react";

interface Props {
  value: number;
}

function ProgressBar({ value }: Props, ref: React.Ref<HTMLDivElement>) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      ref={ref}
    >
      <div />
    </div>
  );
}

export default React.forwardRef(ProgressBar);
