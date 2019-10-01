import React from "react";

interface Props {
  value: number;
  disabled?: boolean;
}

// const Wrapper = styled.div<Props>`
//   height: 1rem;
//   background: #f2f2f2;
//   border-radius: 0.5rem;
//   overflow: hidden;
//   opacity: ${p => (p.disabled ? 0.5 : 1)};
// `;

// const Progress = styled.div<Props>`
//   width: ${p => p.value}%;
//   height: 1rem;
//   background: blue;
// `;

export default function ProgressBar({ value, disabled }: Props) {
  return (
    <div>
      <div style={{ width: `${value}%` }} />
    </div>
  );
}
