import React from "react";
import cx from "classnames";

import { ProgressBar } from "components/";

export const ProgressItem = ({ isPortable, current, goal, className, children }) => (
    <div className={className}>
        <h3 className="regular mb-2">{children}</h3>
        <div
            className={cx("d-flex align-items-center", {
                "flex-column mt-1": isPortable,
                "mt-2": isPortable,
            })}
        >
            <span
                style={{ width: "13%" }}
                className={cx("font-weight-semibold", { "mr-3": !isPortable, "mb-1": isPortable })}
            >{`${current}/${goal}`}</span>
            <ProgressBar redLimit={25} current={current} goal={goal} />
        </div>
    </div>
);
