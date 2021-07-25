import React, { useEffect, lazy } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { coursesList, usersFeedbackList } from "constants/lists";
import { mediaBreakpointsEnum } from "constants/enums";
import { Button, List } from "components/index";
import { selectGroups } from "store/groups/selectors";
import { Quote } from "components/styled/index";
import { scrollToTop } from "helpers/general";

import styles from "./CoursePage.module.scss";

import { fireAnalyticsEvent } from "analytics/";
import events from "analytics/events";

const LeadForm = lazy(() => import("forms/LeadForm/LeadForm"));
const GroupsScrollableList = lazy(() =>
    import("components/styled/GroupsScrollableList/GroupsScrollableList"),
);
const MentorsScrollableList = lazy(() =>
    import("components/styled/MentorsScrollableList/MentorsScrollableList"),
);

const CoursePage = () => {
    const groups = useSelector(selectGroups);
    const { slug } = useParams();
    const { matchesList, advantagesList, name, quoteId, ...course } = coursesList.find(
        ({ slug: courseSlug }) => slug === courseSlug,
    );
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const onClick = () => fireAnalyticsEvent(events.WANT_THIS_COURSE, slug);

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <article className="pt-4">
            <section className="mb-4 container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1 className="h1 mb-3">{course.title}</h1>
                        <img
                            className={cx(
                                styles.coursePage__image,
                                "d-md-none shadow-soft rounded-lg mb-3",
                            )}
                            src={course.imgSrc}
                            alt={course.title}
                        />
                        <h2 className="regular mb-3">{course.description}</h2>
                        <div className="row flex-nowrap mb-5">
                            <span className="col-6">
                                <Button
                                    className="w-100 text-highlighted rounded-lg py-2 font-weight-bold"
                                    color="primary-new"
                                    outline
                                    href="#wannablab-course-description"
                                >
                                    {isPortable ? "Більше" : "Читати більше"}
                                </Button>
                            </span>
                            <span className="col-6">
                                <Button
                                    className="w-100 rounded-lg py-2 font-weight-bold"
                                    color="primary-new"
                                    href="#wannablab-lead-form"
                                    onClick={onClick}
                                >
                                    {isPortable ? "Хочу" : "Хочу...дуже :3"}
                                </Button>
                            </span>
                        </div>
                        <div>
                            {slug === "solo-plan" && (
                                <MentorsScrollableList
                                    className={cx({ "mx-n4": isPortable, "mx-n2": !isPortable })}
                                    isPortable={isPortable}
                                />
                            )}
                            {(slug === "pro-plan" || slug === "basic-plan") && (
                                <GroupsScrollableList list={groups} isPortable={isPortable} />
                            )}
                        </div>
                        <div className="row">
                            <div className={cx("col-md-6 col-sm-12", { "mb-1": isPortable })}>
                                <span className="font-weight-semibold">Формат:</span> онлайн уроки
                                по Google Meet
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <span className="font-weight-semibold">Ціна:</span>
                                {` ${course.price} грн`}
                            </div>
                        </div>
                    </div>
                    <div className={cx("col-md-6 col-sm-12", { "d-none": isPortable })}>
                        <img
                            className={cx(styles.coursePage__image, "rounded-lg shadow-soft")}
                            src={course.imgSrc}
                            alt={course.title}
                        />
                    </div>
                </div>
            </section>
            <section id="wannablab-course-description" className="pt-3 mb-5 container">
                <h2 className="h2 mb-2">{`План ${name} підходить тобі, якщо:`}</h2>
                <List list={matchesList} className="mb-4" />
            </section>
            <section className="mb-5 container">
                <h2 className="h2 mb-2">Відгук студента курсу</h2>
                <Quote
                    src={usersFeedbackList[quoteId].avatar}
                    text={usersFeedbackList[quoteId].description}
                    author={usersFeedbackList[quoteId].name}
                    isPortable={isPortable}
                />
            </section>
            <section className="mb-5 container">
                <h2 className="h2 mb-2">План Pro підходить тобі, якщо:</h2>
                <List list={advantagesList} className="mb-4" />
            </section>
            <section id="wannablab-lead-form" className="bg-primary-new-75 full-screen-height">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="h2 mt-5 mb-5 text-center text-white">
                        Курс пройшли вже <strong>57 людей</strong>
                    </h2>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </article>
    );
};

export default CoursePage;
