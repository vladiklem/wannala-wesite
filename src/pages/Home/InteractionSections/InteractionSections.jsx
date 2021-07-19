import React, { lazy } from "react";
import cx from "classnames";

import styles from "./InteractionSection.module.scss";

const MentorsScrollableList = lazy(() =>
    import("components/styled/MentorsScrollableList/MentorsScrollableList"),
);

export const InteractionSections = (props) => {
    return (
        <>
            <section
                id="wannablab-teachers"
                className={cx("container pt-3 mb-5", styles.container)}
            >
                <MentorsScrollableList className="mx-n4" {...props} />
            </section>
        </>
    );
};
