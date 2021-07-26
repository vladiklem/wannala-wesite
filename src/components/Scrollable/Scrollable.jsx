import React, { useRef, useCallback, useMemo } from "react";
import cx from "classnames";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";

import { Button } from "components/index";

import styles from "./Scrollable.module.scss";
import { useMediaQuery } from "react-responsive";
import { mediaBreakpointsEnum } from "constants/enums";

export const Scrollable = ({
    className,
    hasArrows = false,
    isScrollHidden = false,
    isScrollbarVisible = true,
    isLocked = true,
    offset = 145,
    children,
    containerClassName = "",
    components,
    id,
}) => {
    const isTiny = useMediaQuery({ maxWidth: mediaBreakpointsEnum.XXS });
    const scrollableContainer = useRef(null);
    const Header = useMemo(() => (components && components.Header ? components.Header : null), [
        components,
    ]);

    const onScrollLeftTo = useCallback((offset) => {
        return (
            scrollableContainer.current &&
            (() => {
                scrollableContainer.current.scrollLeft += offset;
            })()
        );
    }, []);

    const onClickArrowLeft = useCallback(() => {
        onScrollLeftTo(-offset);
    }, [onScrollLeftTo, offset]);

    const onClickArrowRight = useCallback(() => {
        onScrollLeftTo(offset);
    }, [onScrollLeftTo, offset]);

    return (
        <div className={cx("position-relative", styles.scrollable, className)} id={id}>
            {hasArrows && (
                <div
                    className={cx("d-flex align-items-center", {
                        "justify-content-between": !!Header,
                        "justify-content-end": !Header,
                    })}
                >
                    {!!Header && <span>{Header}</span>}
                    <div className={styles.arrowsPanel}>
                        <Button
                            color="unstyled"
                            onClick={onClickArrowLeft}
                            size="sm"
                            className={cx(styles.arrow, styles.left, "py-2", {
                                "px-3": !isTiny,
                                "px-2_5": isTiny,
                            })}
                        >
                            <ArrowRightLong width={20} height={20} />
                        </Button>
                        <Button
                            color="unstyled"
                            onClick={onClickArrowRight}
                            className={cx(styles.arrow, "py-2", {
                                "px-3": !isTiny,
                                "px-2_5": isTiny,
                            })}
                        >
                            <ArrowRightLong width={20} height={20} />
                        </Button>
                    </div>
                </div>
            )}
            <div
                ref={scrollableContainer}
                className={cx(
                    "transition-quart-250",
                    {
                        "overflow-hidden": isScrollHidden,
                        "p-4": isLocked,
                        [styles.containerScrollbarInvisible]: !isScrollbarVisible,
                    },
                    styles.container,
                    containerClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
};
