import React, { useCallback } from "react";
import cx from "classnames";

import { CourseStructure } from "./CourseStructure/CourseStructure";
import { AuthorsScrollable } from "./AuthorsScrollable/AuthorsScrollable";
import { CollapseGroup } from "components/";

import styles from "./DetailedInfo.module.scss";

export const DetailedInfo = ({ isPortable, strings }) => {
    const getCollapseProps = useCallback(
        (emoji) => (item, index, array) => ({
            togglerClassName: "font-weight-semibold text-left px-3",
            togglerContent: <span className="pr-1">{`${emoji} ${item.title}`}</span>,
            children: item.description,
            className: cx("border border-primary-new border-width-2 rounded-xl", {
                "mb-3": index + 1 !== array.length,
            }),
            contentClassName: "px-3 pb-3",
        }),
        [],
    );

    return (
        <>
            <h2 className="h0 mb-4">{strings.h2_1}</h2>
            <h3 className="font-weight-normal h2-28 mb-5">{strings.h3_1}</h3>
            <div className="mb-5">
                <h2 className="h0 mb-4">{strings.h2_6}</h2>
                <div>
                    {strings.matchList.map(({ emoji, description }) => (
                        <div className={cx("position-relative d-flex mb-5", styles.matchItem)}>
                            <h3 className="h3 font-weight-normal">
                                {emoji} {description}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <h2 id="wannablab-show-action-button" className="h0 mb-4">
                {strings.h2_2}
            </h2>
            <CourseStructure className="mb-5" />
            <h2 className="h0 mb-4">{strings.h2_4}</h2>
            <CollapseGroup
                className="mb-5"
                list={strings.valuesList}
                getCollapseProps={getCollapseProps("✅")}
            />
            <h2 className="h0 mb-3">{strings.h2_3}</h2>
            <AuthorsScrollable
                className="mb-3"
                isPortable={isPortable}
                array={strings.authorsList}
            />
            <h2 className="h0 mb-4">{strings.h2_5}</h2>
            <CollapseGroup
                className="mb-5"
                list={strings.faqList}
                getCollapseProps={getCollapseProps("🤔")}
            />
        </>
    );
};
