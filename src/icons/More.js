import * as React from "react";

function SvgMore(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="currentColor">
        <path d="M17 12H7m5 5V7" strokeLinecap="round" />
        <path
          clipRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        />
      </g>
    </svg>
  );
}

export default SvgMore;
