import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import cx from "classnames";

import { buttonColorEnum, Button } from "components/Button/Button";

import { NavItem } from "./NavItem/NavItem";
import styles from "./Header.module.scss";

import logo from "assets/images/new-logo.png";

import { fireAnalyticsEvent } from "analytics";
import events from "analytics/events";

const navigation = [
    {
        children: "Вчителі",
        id: "wannablab-teachers",
    },
    {
        children: "Ціни",
        id: "wannablab-prices",
    },
    {
        children: "Курси",
        id: "wannablab-courses",
    },
    {
        children: "Відгуки",
        id: "wannablab-feedback",
    },
    {
        children: "Контакти",
        id: "wannablab-footer",
    },
];

export const Header = ({
    onCoursesClick = () => {},
    onPricesClick = () => {},
    isPortable,
    isVisible,
}) => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const onClick = useCallback(() => {
        setIsOpen((open) => !open);
    }, [setIsOpen]);

    const handleRedirect = useCallback(
        (id) => {
            history.location.pathname !== "/" && history.push("/");
            id === "wannablab-courses" && onCoursesClick();
            id === "wannablab-prices" && onPricesClick();

            fireAnalyticsEvent(events.TOP_NAVIGATION_MENU, id);
        },
        [history, onCoursesClick, onPricesClick],
    );

    return (
        <header
            className={cx("container pt-3", {
                "flex-column": isPortable,
                "align-items-center": !isPortable,
                "d-none": !isVisible,
                "d-flex": isVisible,
            })}
        >
            <div className="d-flex align-items-center justify-content-center">
                <a href="/">
                    <img src={logo} width="40" height="45" alt="Логотип компанії wannablab" />
                </a>
                <a href="/" className="text-decoration-none text-gray-900 mx-2">
                    <p
                        className={cx("h1", {
                            "ml-4 font-weight-bold": !isPortable,
                        })}
                    >
                        wannablab
                    </p>
                </a>
                <Button
                    className={cx({ "d-none": !isPortable })}
                    color={buttonColorEnum.UNSTYLED}
                    onClick={onClick}
                >
                    меню
                </Button>
            </div>
            <nav
                className={cx("transition-250 overflow-hidden", {
                    [styles.mobileMenu]: isPortable,
                    "pl-6": !isPortable,
                    [styles.visible]: isPortable && isOpen,
                })}
            >
                <ul className="d-flex scrollbar-invisible overflow-auto p-3">
                    {navigation.map((item) => (
                        <NavItem onClick={handleRedirect} key={item.id} {...item} />
                    ))}
                </ul>
                <Button
                    onClick={onClick}
                    className={cx("p-1 ml-auto mr-4", {
                        "d-none": !isPortable,
                        "d-flex": isPortable,
                    })}
                    color={buttonColorEnum.UNSTYLED}
                >
                    закрити
                </Button>
            </nav>
        </header>
    );
};
