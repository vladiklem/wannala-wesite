import React, { useCallback } from "react";
import cx from "classnames";

import { CollapseGroup, Button } from "components/";
import AndersenPartnerBlock from "components/styled/AndersenPartnerBlock/AndersenPartnerBlock";

import { CourseStructure } from "./CourseStructure/CourseStructure";
import { AuthorsScrollable } from "./AuthorsScrollable/AuthorsScrollable";

export const DetailedInfo = ({ isPortable, isTiny, getHeadingClassName, strings, onClick }) => {
    const getCollapseProps = useCallback(
        (emoji) => (item, index, array) => ({
            togglerClassName: "font-weight-semibold font-18 text-left px-3 py-2_5",
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
            {/* <h2 className={getHeadingClassName(4)}>{strings.h2_1}</h2>
            <h3 className="font-weight-normal h3 mb-5">{strings.h3_1}</h3> */}
            <section>
                <h2 id="wannablab-show-action-button" className={getHeadingClassName(3)}>
                    {strings.h2_2}
                </h2>
                <h3 className="font-weight-normal h3 mb-4">
                    Курс поділений на 3 частини, кожна частина складається з 3-ох уроків і
                    тематичного спікінг клабу.
                </h3>
                <CourseStructure isPortable={isPortable} className={isPortable ? "mb-4" : "mb-5"} />
            </section>
            {isPortable && (
                <Button
                    color="green-soft"
                    className="mt-4 py-3 h3 font-weight-bold rounded-circle mb-5"
                    onClick={onClick}
                    block
                >
                    Записатися ➡️
                </Button>
            )}
            <section>
                <h2 className={getHeadingClassName(4)}>{strings.h2_4}</h2>
                <CollapseGroup
                    className="mb-5"
                    defaultOpenedCollapseId={null}
                    list={strings.valuesList}
                    getCollapseProps={getCollapseProps("✅")}
                />
            </section>
            <section className="position-relative pb-5">
                <h2 className={getHeadingClassName(3)}>{strings.h2_3}</h2>
                <AuthorsScrollable
                    className="mb-3"
                    isPortable={isPortable}
                    isTiny={isTiny}
                    array={strings.authorsList}
                />
                {/* <AndersenPartnerBlock /> */}
            </section>
            <h2 className={getHeadingClassName(4)}>{strings.h2_5}</h2>
            <CollapseGroup
                defaultOpenedCollapseId={null}
                list={strings.faqList}
                getCollapseProps={getCollapseProps("🤔")}
            />
        </>
    );
};
