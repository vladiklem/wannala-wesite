import React, { useRef, useEffect, useMemo } from "react";
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import cx from "classnames";

import styles from "./Drawer.module.scss";

const Drawer = ({
    isOpen = false,
    isPortable,
    onClose,
    components,
    position = "right",
    width = "100%",
    className,
    contentClassName: passedContentClassName,
    useContentPadding = true,
    backdropClassName,
    children,
}) => {
    const drawerWidth = useMemo(() => (isPortable ? "100%" : width), [isPortable, width]);
    const contentClassName = useMemo(
        () => passedContentClassName || `py-3 ${isPortable ? "px-2" : "px-3"}`,
        [isPortable, passedContentClassName],
    );
    const drawerRef = useRef(null);

    useEffect(() => {
        drawerRef.current && isOpen && disableBodyScroll(drawerRef.current);
        drawerRef.current && !isOpen && enableBodyScroll(drawerRef.current);

        return () => {
            clearAllBodyScrollLocks();
        };
    }, [isOpen]);

    return (
        <>
            <aside
                className={cx(styles.drawer, `bg-white h-100 d-flex flex-column`, className, {
                    "p-2": useContentPadding,
                    [styles.opened]: isOpen,
                    [styles.drawerRight]: position === "right",
                    [styles.drawerLeft]: position === "left",
                })}
                style={{ width: drawerWidth }}
            >
                {components?.Header && <components.Header />}
                <div
                    ref={drawerRef}
                    className={cx(
                        "py-3",
                        { [styles.notPortable]: !isPortable, [styles.portable]: isPortable },
                        styles.drawerContent,
                        contentClassName,
                    )}
                >
                    {children}
                </div>
                {components?.Footer && <components.Footer />}
            </aside>
            <div
                onClick={onClose}
                className={cx(styles.backdrop, backdropClassName, {
                    [styles.backdropVisible]: isOpen,
                })}
            />
        </>
    );
};

export default Drawer;
