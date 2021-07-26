import React from "react";
import cx from "classnames";

import { Tag } from "components/";

import styles from "./InfoBannerRow.module.scss";

export const InfoBannerRow = ({ index, array, item: { label, value, newValue } }) => (
    <>
        <div
            key={index}
            className={cx({ "mb-3": index + 1 !== array.length && !newValue, "mb-1": newValue })}
        >
            <span className="mr-1 font-weight-semibold">{label}:</span>
            <span className={cx({ [styles.oldValue]: !!newValue }, "position-relative")}>
                {value}
                {!!newValue && (
                    <Tag
                        type="danger"
                        size="sm"
                        className={cx(styles.tag, "text-white font-weight-bold")}
                    >
                        -20%
                    </Tag>
                )}
            </span>
        </div>
        {!!newValue && (
            <div key={index} className={cx({ "mb-3_5": index + 1 !== array.length })}>
                <span className="mr-1 text-white visibility-hidden">{label}:</span>
                <span className={cx("font-weight-semibold")}>{newValue}</span>
            </div>
        )}
    </>
);
