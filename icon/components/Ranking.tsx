import React from "react";

type RankingProps = {
  size: string;
  stroke: string;
};

const Ranking: React.FC<RankingProps> = ({ size, stroke }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 6V16M11 9.75V16M6 13.5V16M3.5 21H18.5C19.163 21 19.7989 20.7366 20.2678 20.2678C20.7366 19.7989 21 19.163 21 18.5V3.5C21 2.83696 20.7366 2.20107 20.2678 1.73223C19.7989 1.26339 19.163 1 18.5 1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V18.5C1 19.163 1.26339 19.7989 1.73223 20.2678C2.20107 20.7366 2.83696 21 3.5 21Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Ranking;
