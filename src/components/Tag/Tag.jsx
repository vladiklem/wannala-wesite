import React from "react";
import cx from "classnames";

export const Tag = ({ children, size = "md", className, type = "default", onSelect }) => (
    <span className={cx(`tag tag--${size} tag--${type}`, className, {})} onClick={onSelect}>
        {children}
    </span>
);
