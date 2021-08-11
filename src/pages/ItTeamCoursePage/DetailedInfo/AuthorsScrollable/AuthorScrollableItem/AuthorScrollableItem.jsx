import React from "react";
import cx from "classnames";

import { ScrollableItem } from "components/";

import styles from "./AuthorScrollableItem.module.scss";

export const AuthorScrollableItem = ({
    index,
    array,
    src,
    alt,
    name,
    description,
    inst,
    isPortable,
    isTiny,
}) => {
    return (
        <ScrollableItem
            className={cx(styles.item, "mr-2", {
                [styles.isPortable]: isPortable,
            })}
            key={src}
        >
            <div className="row">
                <div className="col-5">
                    <img src={src} alt={alt} className="image rounded-circle" />
                </div>
                <div className="col-7 bg-white pt-3 rounded-xl">
                    <h3 className={cx("h2 mb-1", { h2: !isTiny, h3: isTiny })}>{name}</h3>
                    <div className="mb-3">
                        <a href={inst} className="regular font-weight-semibold">
                            INSTAGRAM
                        </a>
                    </div>
                    <h4 className={cx("regular", { h4: isTiny })}>{description}</h4>
                </div>
                {/* <div className="col-12 mt-3">
                    <h4 className={cx("regular", { h4: isTiny })}>{description}</h4>
                </div> */}
            </div>
        </ScrollableItem>
    );
};
