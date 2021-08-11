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
        (mutualClassName, desktopClassName, mobileClassName, tinyClassName) =>
            cx(
                {
                    [mobileClassName]: isPortable,
                    [desktopClassName]: !isPortable,
                    [tinyClassName]: isPortable && isTiny,
                },
                mutualClassName,
            ),
        [isPortable, isTiny],
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
                <div class="wave shadow-soft"></div>
                <div name="itIntroSection" className="mb-5">
                    <section className="container pt-4 position-relative">
                        <h1 className={createClassName("mb-3", "h1", "h2 font-weight-bold")}>
                            {strings.heading}
                        </h1>
                        <h2
                            className={createClassName("", "h3", "font-small font-weight-semibold")}
                        >
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
                                    createClassName={createClassName}
                                    onClick={onToggle}
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
                            createClassName={createClassName}
                            onClick={onToggle}
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
