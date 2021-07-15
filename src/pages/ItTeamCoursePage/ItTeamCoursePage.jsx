import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

import { toggleHeader } from "store/app/actions";
import { LeadForm } from "components/styled/LeadForm/LeadForm";
import { fireAnalyticsEvent } from "analytics/";

import { GeneralInfoBanner } from "./GeneralInfoBanner/GeneralInfoBanner";
import { DetailedInfo } from "./DetailedInfo/DetailedInfo";

import styles from "./ItTeamCoursePage.module.scss";
import { mediaBreakpointsEnum } from "constants/enums";
import { getBrowserId } from "helpers/general";

export const ItTeamCoursePage = ({ isPortable, strings }) => {
    const dispatch = useDispatch();
    const isTiny = useMediaQuery({ maxWidth: mediaBreakpointsEnum.XXS });

    const getHeadingClassName = useCallback(
        (indent, portableIndent) =>
            `${isTiny ? "h1" : "h0"} mb-${isPortable && portableIndent ? portableIndent : indent}`,
        [isTiny, isPortable],
    );

    const onSignUpClick = useCallback(() => {
        fireAnalyticsEvent({
            category: "IT",
            action: "clicked Sign Up Course",
        });
        setTimeout(() => document.querySelector("#name").focus(), getBrowserId() === 2 ? 300 : 900);
    }, []);

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    return (
        <article className={cx({ "pt-4": !isPortable, "pt-3": isPortable })}>
            <section name="itIntroSection" className="mb-5">
                <h1
                    className={cx("container", {
                        "h1 lh-44 mb-1": isPortable,
                        "h0 mb-3": !isPortable,
                    })}
                >
                    {strings.itIntroSection.h1}
                </h1>
                <div className="d-md-none">
                    <img
                        alt={strings.itIntroSection.img.alt}
                        src={strings.itIntroSection.img.src}
                        className="image mb-2"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 d-none d-md-block">
                            <img
                                alt={strings.itIntroSection.img.alt}
                                src={strings.itIntroSection.img.src}
                                className="image mb-2"
                            />
                            <DetailedInfo
                                strings={strings.itDetailedInfoSection}
                                isPortable={isPortable}
                                getHeadingClassName={getHeadingClassName}
                                onClick={onSignUpClick}
                                isTiny={isTiny}
                            />
                        </div>
                        <div className="col-12 col-md-5">
                            <GeneralInfoBanner
                                className={cx({ [cx(styles.panel, "mt-5")]: !isPortable })}
                                onClick={onSignUpClick}
                                isPortable={isPortable}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {isPortable && (
                <section name="itDetailedInfoSection" className="container">
                    <DetailedInfo
                        strings={strings.itDetailedInfoSection}
                        isPortable={isPortable}
                        getHeadingClassName={getHeadingClassName}
                        onClick={onSignUpClick}
                        isTiny={isTiny}
                    />
                </section>
            )}
            <section
                id="wannablab-it-course-registration"
                className="py-5 mb-5 full-screen-height container d-flex flex-column align-items-center"
                name="itRegistrationSection"
            >
                <h2 className="h0 mb-4">{strings.itRegistrationSection.h2}</h2>
                <div
                    id="wannablab-it-course-registration-inner-container"
                    className="d-flex align-items-center justify-content-center flex-column"
                >
                    <div className={isPortable ? "col-6" : "col-4"}>
                        <img
                            className="image"
                            src={strings.itRegistrationSection.img.src}
                            alt={strings.itRegistrationSection.img.alt}
                        />
                    </div>
                    <LeadForm
                        className="text-gray-900"
                        description={strings.itRegistrationSection.form.description}
                        afterWord={strings.itRegistrationSection.form.afterWord}
                        type="it"
                    />
                </div>
            </section>
        </article>
    );
};
