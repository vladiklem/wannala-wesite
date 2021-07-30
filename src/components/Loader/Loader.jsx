import React from "react";
import cx from "classnames";

import styles from "./Loader.module.scss";

export const Loader = () => (
    <div
        className={cx(
            "position-relative d-flex justify-content-center align-items-center",
            styles.loaderContainer,
        )}
    >
        <div className={styles.loader}></div>
    </div>
);
