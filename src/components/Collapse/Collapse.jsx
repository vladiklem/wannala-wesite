import React, { useState, useCallback, useMemo } from "react";
import { Collapse as ReactstrapCollapse } from "reactstrap";
import cx from "classnames";

import { Button, buttonColorEnum } from "components/Button/Button";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";

import styles from "./Collapse.module.scss";

export const Collapse = ({
    className = "",
    togglerContent = "Toggle",
    contentClassName = "p-3",
    togglerClassName = "",
    activeTogglerClassName = "",
    hasArrow = false,
    isControlled = false,
    isOpen: passedIsOpen = false,
    arrowClassName = "",
    onToggle,
    children,
}) => {
    const [open, setOpen] = useState(passedIsOpen);

    const toggle = useCallback(() => {
        onToggle && onToggle();
        !isControlled && setOpen((o) => !o);
    }, [onToggle, setOpen, isControlled]);

    const isOpen = useMemo(() => (isControlled ? passedIsOpen : open), [
        isControlled,
        passedIsOpen,
        open,
    ]);

    return (
        <div className={className}>
            <Button
                className={cx(togglerClassName, { [activeTogglerClassName]: isOpen })}
                color={buttonColorEnum.UNSTYLED}
                size="lg"
                block={true}
                onClick={toggle}
            >
                <div
                    className={cx({
                        "d-flex align-items-center justify-content-between": hasArrow,
                    })}
                >
                    {togglerContent}
                    {hasArrow && (
                        <span
                            className={cx("mr-3", styles.arrow, arrowClassName, {
                                [styles.rotated]: isOpen,
                            })}
                        >
                            <ArrowRightLong width={32} height={32} />
                        </span>
                    )}
                </div>
            </Button>
            <ReactstrapCollapse isOpen={isOpen}>
                <div className={contentClassName}>{children}</div>
            </ReactstrapCollapse>
        </div>
    );
};
