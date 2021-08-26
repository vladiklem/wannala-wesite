import React, { memo } from "react";
import { Button as ReactstrapButton } from "reactstrap";
import cx from "classnames";

import { Loader } from "components/";

import styles from "./Button.module.scss";

export const buttonColorEnum = {
    WHITE: "white",
    INVISIBLE: "invisible",
    UNSTYLED: "unstyled",
    SECONDARY_NEW: "secondary-new",
};

export const Button = memo(
    ({
        className,
        isSquare,
        isRounded,
        isLoading,
        isBold,
        size = "md",
        children,
        disabled,
        ...props
    }) => {
        return (
            <ReactstrapButton
                className={cx(className, "rounded-lg", {
                    "py-3": isSquare && size === "lg",
                    "p-1": isSquare && size === "md",
                    [styles.rounded50]: isRounded,
                    "font-weight-bold": isBold,
                })}
                size={size}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? <Loader /> : children}
            </ReactstrapButton>
        );
    },
);
