import React from "react";
import cx from "classnames";

import { Button } from "components/";

import translations from "./GeneralInfoBanner.translations";
import { InfoBannerRow } from "./InfoBannerRow/InfoBannerRow";

const strings = translations.ua;

export const GeneralInfoBanner = ({ className, isPortable, onClick }) => (
    <section className={cx("h3 font-weight-normal p-4 rounded-lg shadow-medium bg-white", className)}>
        {strings.info.map((item, index, array) => (
            <InfoBannerRow item={item} index={index} array={array} />
        ))}
        <Button
            color="green-soft"
            className="mt-4 py-3 h3 font-weight-bold rounded-circle"
            onClick={onClick}
            block
        >
            {strings.actionButtonLabel}
        </Button>
    </section>
);
