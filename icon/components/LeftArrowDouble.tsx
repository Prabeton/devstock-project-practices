import React from "react";

type LeftArrowDoubleProps = {
  size: string;
  stroke: string;
};

const LeftArrowDouble: React.FC<LeftArrowDoubleProps> = ({ size, stroke }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 15L1.5 8L8.5 1M16.5 15L9.5 8L16.5 1"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default LeftArrowDouble;
