import React from "react";
import cx from "classnames";

export const List = ({
    title,
    list = [],
    type = "primary-new",
    className,
    itemClassName,
    isShort = false,
}) => {
    const finalList = isShort ? list.slice(0, 2) : list;

    return (
        <div className={className}>
            {title && <h2 className="h3 mb-2_5">{title}</h2>}
            <ul className={`list list-${type} text-left`}>
                {finalList.map((item, index) => (
                    <li className={cx("mb-1 list__item", itemClassName)} key={index}>
                        {item}
                    </li>
                ))}
                {isShort && (
                    <li className={cx("mb-1 list__item", itemClassName)} key="uniq">
                        Більше...👇
                    </li>
                )}
            </ul>
        </div>
    );
};
