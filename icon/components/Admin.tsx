import React from "react";

type AdminProps = {
  stroke: string;
  size: string;
};

const Admin: React.FC<AdminProps> = ({ size, stroke }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.66667 11.2455L9.88889 13.5082L14.3333 8.9828M20.5756 4.4393C17.0623 4.62927 13.6186 3.39237 11 1C8.38141 3.39237 4.93767 4.62927 1.42445 4.4393C1.14171 5.55381 0.999086 6.70036 1 7.85145C1 14.1768 5.24889 19.493 11 21C16.7511 19.493 21 14.178 21 7.85145C21 6.67259 20.8522 5.52992 20.5756 4.4393Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Admin;
