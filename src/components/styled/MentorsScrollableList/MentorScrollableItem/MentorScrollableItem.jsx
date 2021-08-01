import React, { useCallback } from "react";
import cx from "classnames";

import { ScrollableItem, Button, List } from "components/";
import { Instagram } from "components/Icons/social/Instagram";

import styles from "./MentorScrollableItem.module.scss";

export const MentorScrollableItem = ({
    name,
    src,
    index,
    array,
    className,
    list,
    shortDescription,
    slug,
    isPortable,
    onClick,
    instaHref,
}) => {
    const handleClick = useCallback(() => {
        onClick(slug);
    }, [onClick, slug]);

    return (
        <ScrollableItem
            direction={!isPortable ? "row" : undefined}
            className={cx(
                "shadow-soft rounded-xl bg-white-exp transition-250 p-2",
                { [cx(styles.isPortable, "flex-column-reverse")]: isPortable },
                { "mr-4": array.length - 1 !== index },
                styles.container,
                className,
            )}
        >
            <div className="d-flex flex-column justify-content-between mr-2 p-2 flex-grow-1">
                <div>
                    <a className="position-relative text-decoration-none" href={instaHref}>
                        <h3 className="h3 d-flex align-items-center text-gray-900 mb-2 mt-1">
                            <Instagram width={20} height={20} className="mr-2" />
                            {name}
                        </h3>
                    </a>
                    {!!shortDescription && <p className="mb-1">{shortDescription}</p>}
                    <List className="mb-2" type="primary-new" list={list} />
                </div>
                <Button color="primary-new" onClick={handleClick} outline>
                    Більше
                </Button>
            </div>
            <a href={`/mentor/${slug}`} className="d-block image">
                <img
                    className="rounded-lg"
                    height={250}
                    width={250}
                    src={src}
                    alt={`${name} - вчитель англійської на курсах wannablab`}
                />
            </a>
        </ScrollableItem>
    );
};
