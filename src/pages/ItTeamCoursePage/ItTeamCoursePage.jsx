import React, { useEffect, useCallback, useState, lazy } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

import { toggleHeader } from "store/app/actions";
import { mediaBreakpointsEnum } from "constants/enums";
import { fireAnalyticsEvent } from "analytics/";
import events from "analytics/events";
import { Button } from "components/";

import { GeneralInfoBanner } from "./GeneralInfoBanner/GeneralInfoBanner";
import { DetailedInfo } from "./DetailedInfo/DetailedInfo";
import translations from "./ItTeamCoursePage.translations";
import styles from "./ItTeamCoursePage.module.scss";
import marta from "assets/images/marta.png";
import { ArrowRight } from "components/Icons/ArrowRight";

const DrawerLeadForm = lazy(() => import("./DrawerLeadForm/DrawerLeadForm"));
const LeadSection = lazy(() => import("./LeadSection/LeadSection"));

const strings = translations.ua;

const ItTeamCoursePage = ({ isPortable }) => {
    const dispatch = useDispatch();
    const isTiny = useMediaQuery({ maxWidth: mediaBreakpointsEnum.XXS });
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback(() => {
        !isOpen && fireAnalyticsEvent(events.IT_COURSE_SIGNUP);
        setIsOpen((open) => !open);
    }, [setIsOpen, isOpen]);

    const createClassName = useCallback(
        (mobileClassName, desktopClassName, mutualClassName) =>
            cx({ [mobileClassName]: isPortable, [desktopClassName]: !isPortable }, mutualClassName),
        [isPortable],
    );

    const getHeadingClassName = useCallback(
        (indent, portableIndent) =>
            `${isTiny ? "h1" : "h1"} mb-${isPortable && portableIndent ? portableIndent : indent}`,
        [isTiny, isPortable],
    );

    useEffect(() => {
        dispatch(toggleHeader());
        fireAnalyticsEvent(events.IT_COURSE_OPENED);
    }, [dispatch]);

    return (
        <>
            <article
                style={{ backgroundColor: "#F0F8FF" }}
                className={cx({ "pt-4": !isPortable, "pt-3": isPortable })}
            >
                <div name="itIntroSection" className="mb-5">
                    {/* <h1
                        className={cx("container", {
                            "h1 lh-44 mb-3": isPortable,
                            "h0 mb-5": !isPortable,
                        })}
                    >
                        {strings.itIntroSection.h1}
                    </h1> */}
                    {/* <div className="d-md-none">
                        <img
                            alt={strings.itIntroSection.img.alt}
                            src={strings.itIntroSection.img.src}
                            className="image mb-2"
                        />
                    </div> */}
                    <section className="container pt-4 position-relative">
                        <h1 className={createClassName("h2 font-weight-bold", "h1", "mb-3")}>
                            {strings.heading}
                        </h1>
                        <h2 className={createClassName("font-small font-weight-semibold", "h3")}>
                            {strings.description}
                        </h2>
                        <div className="mt-4">
                            <img
                                src={marta}
                                alt="Марта - головний вчитель курсу"
                                className="image"
                            />
                        </div>
                        <Button
                            style={{ bottom: 0, right: 36 }}
                            isSquare
                            size="lg"
                            className="bg-white position-absolute border-0 shadow-soft text-gray-900 rounded-circle flying-fast-animation"
                            href="#general-info-banner"
                        >
                            <ArrowRight width={30} height={24} className="rotate-90" />
                        </Button>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7 d-none d-md-block">
                                <DetailedInfo
                                    strings={strings.itDetailedInfoSection}
                                    isPortable={isPortable}
                                    getHeadingClassName={getHeadingClassName}
                                    onClick={onToggle}
                                    isTiny={isTiny}
                                />
                            </div>
                            <div
                                id="general-info-banner"
                                className={cx("col-12 col-md-5", {
                                    "mt-4": !isPortable,
                                    "pt-6": isPortable,
                                })}
                            >
                                <GeneralInfoBanner
                                    className={cx({ [styles.panel]: !isPortable })}
                                    onClick={onToggle}
                                    isPortable={isPortable}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {isPortable && (
                    <section name="itDetailedInfoSection" className="container">
                        <DetailedInfo
                            strings={strings.itDetailedInfoSection}
                            isPortable={isPortable}
                            getHeadingClassName={getHeadingClassName}
                            onClick={onToggle}
                            isTiny={isTiny}
                        />
                    </section>
                )}
                <LeadSection isHidden={isOpen} strings={strings} isPortable={isPortable} />
            </article>
            <DrawerLeadForm
                isOpen={isOpen}
                onToggle={onToggle}
                strings={strings}
                isPortable={isPortable}
            />
        </>
    );
};

export default ItTeamCoursePage;
