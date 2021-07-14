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
}) => {
    return (
        <ScrollableItem
            className={cx(styles.item, "pl-1", {
                "mr-4": index !== array.length -1,
                [styles.isPortable]: isPortable,
            })}
            key={src}
        >
            <div className="row">
                <div className="col-5">
                    <img src={src} alt={alt} className="image rounded-circle" />
                </div>
                <div className="col-7">
                    <h3 className="h2 mb-2">{name}</h3>
                    <a href={inst} className="regular font-weight-semibold">
                        INSTAGRAM
                    </a>
                </div>
                <div className="col-12 mt-3">
                    <h4 className="font-weight-normal">{description}</h4>
                </div>
            </div>
        </ScrollableItem>
    );
};
