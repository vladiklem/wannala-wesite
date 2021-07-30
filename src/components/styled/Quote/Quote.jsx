import React from "react";
import { QuoteUpIcon } from "components/Icons/QuoteUpIcon";

import styles from "./Quote.module.scss";

import cx from "classnames";

export const Quote = ({
    src,
    alt = "",
    text,
    author,
    className = "p-2",
    textClassName = "h3 font-weight-normal",
    authorClassName = "regular font-weight-semibold",
    isPortable,
}) => (
    <div className={cx("row d-flex align-items-center", styles.quote, className)}>
        <div className="col-md-2 col-sm-12">
            <img
                width={118}
                height={118}
                className="image rounded-circle border border-width-2"
                src={src}
                alt={alt || `${author} - студент курсів англійської від wanalab.`}
            />
        </div>
        <div
            className={cx("col-md-10 col-sm-12 d-flex flex-column position-relative", {
                "mt-2": isPortable,
            })}
        >
            <p className={cx("mb-2", styles.quote__text, textClassName)}>{text}</p>
            <span className={authorClassName}>{author}</span>
            <QuoteUpIcon width={48} height={48} className={styles.quote__icon} fill="#97d2ff" />
        </div>
    </div>
);
