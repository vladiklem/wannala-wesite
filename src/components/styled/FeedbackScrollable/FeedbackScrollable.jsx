import React, { useMemo } from "react";

import { Scrollable } from "components/";

import { FeedbackScrollableItem } from "./FeedbackScrollableItem/FeedbackScrollableItem";
import translations from "./FeedbackScrollable.translations";

const strings = translations.ua;

const FeedbackScrollable = ({
    isPortable,
    heading = "",
    headingClassName = "",
    className = "",
    ...props
}) => {
    const offset = useMemo(() => (isPortable ? 390 : 1416), [isPortable]);

    return (
        <div className={className}>
            {!!heading && <h2 className={headingClassName}>{heading}</h2>}
            <Scrollable
                hasArrows={true}
                isScrollbarVisible={false}
                offset={offset}
                containerClassName="mr-n4 ml-n4"
                {...props}
            >
                {strings.map((item, index, array) => (
                    <FeedbackScrollableItem
                        index={index}
                        isPortable={isPortable}
                        length={array.length}
                        {...item}
                    />
                ))}
            </Scrollable>
        </div>
    );
};

export default FeedbackScrollable;
