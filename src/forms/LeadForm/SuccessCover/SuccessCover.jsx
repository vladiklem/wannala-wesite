import React from "react";
import cx from "classnames";

import { Instagram, Telegram } from "components/Icons/social";
import { instagramLink, telegramLink } from "constants/social";

import styles from "./SuccessCover.module.scss";

const SuccessCover = ({ isSuccess, strings, afterWord }) => (
    <div
        className={cx("px-4 pt-4", styles.successCover, {
            [styles.isSuccess]: isSuccess,
            "mt-5": !isSuccess,
        })}
    >
        <p className="regular mb-4">{afterWord}</p>
        <p className="regular mb-3">{strings.contentDescription}</p>
        <a
            href={isSuccess ? instagramLink : undefined}
            className="d-flex align-items-center mb-3 h3"
        >
            <Instagram height={24} width={24} className="mr-2" /> {strings.social.inst}
        </a>
        <a href={isSuccess ? telegramLink : undefined} className="d-flex align-items-center h3">
            <Telegram height={28} width={28} className="mr-1" />
            {strings.social.telegram}
        </a>
    </div>
);

export default SuccessCover;
