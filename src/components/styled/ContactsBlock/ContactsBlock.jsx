import React from "react";
import cx from "classnames";

import { Instagram, Telegram } from "components/Icons/social";
import { EmailNewsForm } from "forms/EmailNewsForm/EmailNewsForm";
import { email, instagramLink, telegramLink, telNumber } from "constants/social";

export const ContactsBlock = ({ isRow = true, className }) => (
    <div className={cx("d-flex flex-column", className)}>
        {/* <h1 className="hidden-element">Контакти</h1> */}
        <p className="regular mb-1">коннект з нами:</p>
        <ul className={cx("d-flex flex-wrap mb-3", { "flex-column": !isRow })}>
            <li className="mr-4 mb-1">
                <a href={instagramLink}>
                    <Instagram height={20} width={20} /> instagram
                </a>
            </li>
            <li className="mr-4 mb-1">
                <a href={telegramLink}>
                    <Telegram height={24} width={24} /> telegram
                </a>
            </li>
            <li className="mr-4 mb-1">
                <a href={`tel:${telNumber.short}`}>
                    <h2 className="regular">
                        <span className="text-decoration-none text-gray-900">тел:</span>{" "}
                        {telNumber.long}
                    </h2>
                </a>
            </li>
            <li className="mr-4 mb-1">
                <a href={`mailto:${email}`}>
                    <h2 className="regular">
                        <span className="text-decoration-none text-gray-900">mail:</span>{" "}
                        wannablab.eng@gmail.com
                    </h2>
                </a>
            </li>
        </ul>
        {/* <EmailNewsForm /> */}
    </div>
);
