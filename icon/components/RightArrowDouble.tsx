import React from "react";

type RightArrowDoubleProps = {
  size: string;
  stroke: string;
};

const RightArrowDouble: React.FC<RightArrowDoubleProps> = ({
  size,
  stroke,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.5 0.999999L16.5 8L9.5 15M1.5 1L8.5 8L1.5 15"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default RightArrowDouble;
