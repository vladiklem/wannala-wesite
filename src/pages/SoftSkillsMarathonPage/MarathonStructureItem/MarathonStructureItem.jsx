import React from "react";
import cx from "classnames";

import { Animated } from "components/Animated/Animated";

export const MarathonStructureItem = ({
    title,
    description,
    setMoveBack,
    emojiSrc,
    isPortable,
    index,
    className,
}) => (
    <li className={cx("row", className)}>
        <div className="pr-2 col-8">
            <span className="h3 font-weight-bold mb-1">{`0${index + 1}`}</span>
            <h3 className="h2 font-weight-bold text-alternative-secondary mb-2">{title}</h3>
            <h4 className={cx({ "regular w-75": !isPortable, "font-small": isPortable })}>
                {description}
            </h4>
            <br />
        </div>
        <Animated
            className={cx("pl-2", { "col-3": !isPortable, "col-4": isPortable })}
            isOnce
            getConfig={setMoveBack}
        >
            <Animated.Node>
                <img alt="Marta's love emoji" src={emojiSrc} className="image" />
            </Animated.Node>
        </Animated>
    </li>
);
