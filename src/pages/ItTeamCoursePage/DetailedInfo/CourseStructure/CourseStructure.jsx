import React, { useState } from "react";
import { Collapse, List } from "components/";

import cx from "classnames";

import translations from "./CourseStructure.translations";

const strings = translations.ua;

export const CourseStructure = ({ className, isPortable }) => {
    const [openCollapseId, setOpenCollapseId] = useState(0);

    return (
        <div className={className}>
            {strings.map(({ lessons, titleEng, emoji }, index, array) => (
                <Collapse
                    togglerClassName={cx("font-weight-semibold text-left px-3 py-2_5", {
                        regular: isPortable,
                    })}
                    togglerContent={`${emoji}  ${titleEng}`}
                    className={cx("shadow-soft rounded-xl bg-white", {
                        "mb-3": index + 1 !== array.length,
                    })}
                    contentClassName="px-3 pb-3"
                    hasArrow
                    isControlled
                    isOpen={openCollapseId === index}
                    onToggle={() =>
                        index === openCollapseId
                            ? setOpenCollapseId(null)
                            : setOpenCollapseId(index)
                    }
                    key={emoji}
                >
                    <List list={lessons(isPortable)} type="none" />
                </Collapse>
            ))}
        </div>
    );
};
