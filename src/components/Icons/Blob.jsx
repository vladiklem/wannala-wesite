import React from "react";

export const Blob = ({ width = 100, height = 100, className, fill = "#094886", ...props }) => (
    <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className={className}
        {...props}
    >
        <path
            fill={fill}
            d="M33.4,-37.1C42.2,-32.4,47.5,-20.8,53.6,-6.4C59.8,8,66.9,25.3,61.9,37.5C57,49.7,40.1,56.8,23.6,61.4C7,66,-9.3,68.1,-23.6,63.4C-37.9,58.8,-50.2,47.4,-60.9,33.1C-71.5,18.8,-80.6,1.5,-74.5,-9.6C-68.3,-20.6,-46.8,-25.4,-31.9,-29.1C-16.9,-32.7,-8.5,-35.1,1.9,-37.4C12.3,-39.6,24.6,-41.8,33.4,-37.1Z"
            transform="translate(100 100)"
        />
    </svg>
);
