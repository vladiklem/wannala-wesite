import React, { lazy, useCallback, useEffect, useState } from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";

import { Button } from "components/";
import { Instagram, Telegram, LinkedIn } from "components/Icons/social";
import { telegramLink, linkedInLink, instagramLink } from "constants/social";
import { toggleHeader } from "store/app/actions";
import logo from "assets/images/new-logo.png";

const DrawerLeadForm = lazy(() => import("./DrawerLeadForm/DrawerLeadForm"));

const getButtonProps = (className, isOutlined) => ({
    size: "lg",
    color: "primary-new",
    className: cx(
        className,
        "d-flex align-items-center justify-content-start h3 font-weight-bold py-2_5 rounded-xl",
    ),
    outline: isOutlined,
});

const TapLink = ({ isPortable }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = useCallback(() => setIsOpen((open) => !open), []);

    useEffect(() => {
        dispatch(toggleHeader());
    }, []);

    return (
        <article className="container position-relative">
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#F0F8FF",
                    zIndex: -2,
                }}
            />
            <div className="d-flex flex-column full-screen-height py-4">
                <h1 className="h2 font-weight-semibold mb-1 mt-3">
                    <a href="/" className="mr-2">
                        <img src={logo} width="36" height="36" alt="Логотип компанії wannablab" />
                    </a>
                    {"English from IT & for IT"}
                </h1>
                <h2 className="h3 font-weight-normal mb-4">Продавай свої послуги за кордон!</h2>
                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                    <section className="d-flex flex-column">
                        <h3></h3>
                        <Button href="/it" {...getButtonProps("mb-3")}>
                            Курс «English for IT teams»
                        </Button>
                        <Button onClick={onToggle} {...getButtonProps("mb-3")}>
                            Пробне заняття 1-на-1
                        </Button>
                        <Button href="/" {...getButtonProps()}>
                            Наш сайтік
                        </Button>
                    </section>
                    <section>
                        <h3 className="h3 py-3_5 text-center">
                            with ❤️ 4 u <br /> 15% знижка якщо прийдеш з другом (обом)
                        </h3>
                    </section>
                    <section className="d-flex flex-column">
                        <h3></h3>
                        <Button href={telegramLink} {...getButtonProps("mb-3", true)}>
                            <Telegram height={24} width={24} className="mr-2_5" /> Telegram
                        </Button>
                        <Button href={linkedInLink} {...getButtonProps("mb-3", true)}>
                            <LinkedIn height={24} width={24} className="mr-2_5" /> LinkedIn
                        </Button>
                        <Button href={instagramLink} {...getButtonProps("", true)}>
                            <Instagram height={24} width={24} className="mr-2_5" /> Instagram
                        </Button>
                    </section>
                </div>
            </div>
            <DrawerLeadForm
                isOpen={isOpen}
                isPortable={isPortable}
                onToggle={onToggle}
                afterWord="Дякуємо, що вирішили займатися з нами ❤️ Чекайте на наш дзвінок після 18-ти вечора."
            />

            <div style={{ zIndex: -1 }} className="wave"></div>
        </article>
    );
};

export default TapLink;
