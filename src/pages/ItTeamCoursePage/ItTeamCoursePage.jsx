import React, { useEffect, useCallback, useState, lazy } from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

import { toggleHeader } from "store/app/actions";
import { mediaBreakpointsEnum } from "constants/enums";

import { GeneralInfoBanner } from "./GeneralInfoBanner/GeneralInfoBanner";
import { DetailedInfo } from "./DetailedInfo/DetailedInfo";
import translations from "./ItTeamCoursePage.translations";
import styles from "./ItTeamCoursePage.module.scss";

const DrawerLeadForm = lazy(() => import("./DrawerLeadForm/DrawerLeadForm"));
const LeadSection = lazy(() => import("./LeadSection/LeadSection"));

const strings = translations.ua;

const ItTeamCoursePage = ({ isPortable }) => {
    const dispatch = useDispatch();
    const isTiny = useMediaQuery({ maxWidth: mediaBreakpointsEnum.XXS });
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback(() => setIsOpen((open) => !open), [setIsOpen]);

    const getHeadingClassName = useCallback(
        (indent, portableIndent) =>
            `${isTiny ? "h1" : "h0"} mb-${isPortable && portableIndent ? portableIndent : indent}`,
        [isTiny, isPortable],
    );

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    return (
        <>
            <article className={cx({ "pt-4": !isPortable, "pt-3": isPortable })}>
                <section name="itIntroSection" className="mb-5">
                    <h1
                        className={cx("container", {
                            "h1 lh-44 mb-3": isPortable,
                            "h0 mb-5": !isPortable,
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
                                    onClick={onToggle}
                                    isTiny={isTiny}
                                />
                            </div>
                            <div className="col-12 col-md-5 mt-4 mt-md-0">
                                <GeneralInfoBanner
                                    className={cx({ [styles.panel]: !isPortable })}
                                    onClick={onToggle}
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
