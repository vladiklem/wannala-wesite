import React from "react";
import cx from "classnames";
import { Button } from "components/index";

const bannerFields = [
    {
        label: "Старт",
        value: "20 липня",
    },
    {
        label: "Тривалість",
        value: "2 місяці (16 уроків)",
    },
    {
        label: "Час",
        value: "вівторок i четвер 18:15–19:15",
    },
    {
        label: "Вартість",
        value: "4 777 грн або 5554 ( 2 платежі по 2777 грн)",
    },
];

export const GeneralInfoBanner = ({ className, isPortable, onClick }) => (
    <div className={cx("h3 font-weight-normal border p-4 rounded-lg border-width-2", className)}>
        {bannerFields.map(({ label, value }, index, array) => (
            <div className={cx({ "mb-3": index + 1 !== array.length })}>
                <span className="mr-1">{label}:</span>
                <span className="font-weight-semibold">{value}</span>
            </div>
        ))}
        <Button
            href={`#wannablab-it-course-registration${isPortable ? "" : "-inner-container"}`}
            color="green-soft"
            className="mt-4 py-3 h3 font-weight-bold rounded-circle"
            onClick={onClick}
            block
        >
            Записатися ⬇️
        </Button>
    </div>
);
