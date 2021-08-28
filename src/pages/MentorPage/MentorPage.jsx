import React, { useEffect, useCallback, lazy } from "react";
import { useParams } from "react-router";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import mentorsList from "constants/lists/mentorsList";
import { mediaBreakpointsEnum } from "constants/enums";
import { Button, List, Loader } from "components/";
import { scrollToTop } from "helpers/general";

import { selectGroups } from "store/groups/selectors";
import { initGroups } from "store/groups/actions";

const LeadForm = lazy(() => import("forms/LeadForm/LeadForm"));
const GroupsScrollableList = lazy(() =>
    import("components/styled/GroupsScrollableList/GroupsScrollableList"),
);

const MentorPage = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();
    const groups = useSelector(selectGroups);
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const mentor = mentorsList.find(({ slug: courseSlug }) => slug === courseSlug);

    const onGroupSelect = useCallback(() => {
        document.getElementById("wannablab-lead-form").scrollIntoView();
        setTimeout(() => document.getElementById("name").focus(), 500);
    }, []);

    useEffect(() => {
        dispatch(initGroups());
        scrollToTop();
    }, [dispatch]);

    return (
        <article className="pt-4">
            <section className="mb-5 container">
                <div className="row">
                    <div className={cx("col-md-6 col-sm-12 d-none", { "d-block": isPortable })}>
                        <img
                            className="image rounded-xl mb-2 shadow-soft"
                            src={mentor.src}
                            alt={`${mentor.name}. ${mentor.description}`}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h1 className="h1 mb-2">{mentor.name}</h1>
                        <p className="regular mb-3">{mentor.longDescription}</p>
                        <div className="row flex-wrap mb-4">
                            {/* <span className="col-6">
                                <Button
                                    className="w-100 font-weight-bold py-2"
                                    color="primary-new"
                                    href="#wannablab-teacher-description"
                                    outline
                                >
                                    {isPortable ? "Більше" : "Читати більше"}
                                </Button>
                            </span> */}
                            <span className={cx("col-md-6 col-12", { "mb-3": isPortable })}>
                                <List list={mentor.list} />
                            </span>
                            <span className="col-md-6 col-12">
                                <Button
                                    className="w-100 font-weight-bold py-2"
                                    color="primary-new"
                                    href="#wannablab-lead-form"
                                    onClick={onGroupSelect}
                                >
                                    Записатися
                                </Button>
                            </span>
                        </div>
                    </div>
                    <div className={cx("col-md-6 col-sm-12", { "d-none": isPortable })}>
                        <img
                            className="image rounded-xl shadow-soft"
                            src={mentor.src}
                            alt={`${mentor.name}. ${mentor.description}`}
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
            </section>
            <section className="container mb-4">
                {groups.length ? (
                    <>
                        <GroupsScrollableList
                            onClick={onGroupSelect}
                            isPortable={isPortable}
                            list={groups}
                        />
                    </>
                ) : (
                    <Loader />
                )}
            </section>
            <section id="wannablab-lead-form" className="full-height bg-primary-new-75">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="hidden-element">
                        Форма для запису на курс англійської мови від школи розмовної англійської
                        wannablab
                    </h2>
                    <h3 className="h2 mt-5 mb-5 text-center text-white">
                        Курс пройшли вже <strong>57 людей</strong>
                    </h3>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </article>
    );
};

export default MentorPage;
