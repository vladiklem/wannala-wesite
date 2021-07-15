import React, { useEffect, useState } from "react";

import { Scrollable } from "components/";

import { AuthorScrollableItem } from "./AuthorScrollableItem/AuthorScrollableItem";

const getOffset = (isPortable) => (isPortable ? document.documentElement.clientWidth - 64 : 599);

export const AuthorsScrollable = ({ array, isPortable, className }) => {
    const [offset, setOffset] = useState(100);

    useEffect(() => {
        setOffset(getOffset(isPortable));
    }, [isPortable]);

    return (
        <Scrollable
            className={className}
            hasArrows
            isScrollbarVisible={false}
            offset={offset}
            id="wannablab-authors"
        >
            {array.map(({ img, description, name, inst }, index) => (
                <AuthorScrollableItem
                    src={img.src}
                    alt={img.alt}
                    index={index}
                    name={name}
                    description={description}
                    inst={inst}
                    array={array}
                    isPortable={isPortable}
                />
            ))}
        </Scrollable>
    );
};
