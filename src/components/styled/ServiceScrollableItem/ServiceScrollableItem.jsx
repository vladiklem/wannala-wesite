import React, { useCallback } from "react";
import cx from "classnames";

import { ScrollableItem, Button, buttonColorEnum, List } from "components/";
import { DiscountedPrice } from "components/styled/DiscountedPrice/DiscountedPrice";

import styles from "./ServiceScrollableItem.module.scss";

export const ServiceScrollableItem = ({
    index,
    array,
    list,
    title,
    lessonsCount,
    status,
    price = "300",
    actionButtonLabel,
    className,
    isPortable,
    onClick,
    slug,
}) => {
    const toCourse = useCallback(() => {
        onClick(slug);
    }, [slug, onClick]);

    return (
        <ScrollableItem
            className={cx(
                styles.container,
                "shadow-soft pt-3 pb-4 px-4 bg-primary-new text-white text-highlighted rounded-lg",
                {
                    "mr-3": index !== array.length - 1,
                    [styles.mobile]: isPortable,
                    "px-4_5": !isPortable,
                },
                className,
            )}
        >
            <div className="d-flex align-items-center mb-2">
                <p className={cx("mr-3", { "font-small": isPortable })}>{lessonsCount} уроків</p>
                <span
                    className={cx(
                        styles.status,
                        `circle-pulp-animation ${status.id} transition-250 mr-2`,
                    )}
                ></span>
                <p className={cx({ "font-small": isPortable })}>
                    {cx({
                        "можна приєднатися": status.id === "ongoing",
                        [`початок ${status.date}`]: status.id === "start-soon",
                    })}
                </p>
            </div>
            <h3 className={cx({ h3: !isPortable, h4: isPortable }, "font-weight-semibold mb-3")}>
                {title}
            </h3>
            <div className="row flex-grow-1 mb-2">
                <div className={cx("col-md-8 col-sm-12", { "d-flex flex-column": isPortable })}>
                    <List className="mb-3" type="features-white" list={list} isShort={true} />
                    <div className="row flex-grow-1">
                        <div className={cx({ "mb-2": !isPortable }, "col-12")}>
                            <DiscountedPrice
                                oldPrice={price.old}
                                newPrice={price.new}
                                discount={20}
                                className="h4 d-flex align-items-center"
                                newPriceClassName="h3 ml-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Button
                        className="font-weight-semibold"
                        block
                        size="md"
                        color={buttonColorEnum.WHITE}
                        onClick={toCourse}
                    >
                        {actionButtonLabel || "Взяти пробний урок"}
                    </Button>
                </div>
            </div>
        </ScrollableItem>
    );
};
