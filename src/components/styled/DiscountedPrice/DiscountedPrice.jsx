import React from "react";
import cx from "classnames";

import { Tag } from "components/Tag/Tag";

import styles from "./DiscountedPrice.module.scss";

export const DiscountedPrice = ({ oldPrice, newPrice, discount, className, newPriceClassName }) => (
    <span className={className}>
        <span className={cx(styles.oldPrice, "position-relative")}>{`${oldPrice} `}</span>
        <Tag type="danger" size="xs" className={cx("text-white font-weight-bold ml-2")}>
            {`-${discount}%`}
        </Tag>
        <span className={newPriceClassName}>{`${newPrice} UAH`}</span>
    </span>
);
