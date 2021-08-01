import React from "react";
import cx from "classnames";

import { Button, Scrollable } from "components/";
import { coursesList } from "constants/lists";
import { leraContact } from "constants/social";
import { ServiceScrollableItem } from "components/styled/ServiceScrollableItem/ServiceScrollableItem";

const getOffset = (isPortable) => (isPortable ? 263 + 16 + 48 : 599);

export const GreetingsSection = ({ onOrderClick, isPortable, toCourse, className }) => (
    <section className={cx("d-flex flex-column container", className)}>
        <h2
            className={cx({
                "font-medium": !isPortable,
                "regular font-weight-semibold": isPortable,
            })}
        >
            Навчаємо розмовній <strong>англійській</strong> онлайн для професійних цілей
        </h2>
        <div className="typing-container mb-4" id="wannablab-courses">
            <div
                className={cx("typing-wrapper", {
                    "font-medium": !isPortable,
                    "regular font-weight-semibold": isPortable,
                })}
            >
                Цінуємо кожного 😊
            </div>
        </div>
        <Scrollable
            hasArrows={true}
            offset={getOffset(isPortable)}
            containerClassName="ml-n4 mr-n4"
            isScrollbarVisible={false}
            components={{
                Header: (
                    <h2
                        className={cx({ regular: isPortable, h2: !isPortable }, "font-weight-bold")}
                    >
                        Наші плани та курси
                    </h2>
                ),
            }}
        >
            {coursesList.map(({ imgSrc, ...item }, index, array) => (
                <ServiceScrollableItem
                    index={index}
                    array={array}
                    src={imgSrc}
                    key={item.slug}
                    isPortable={isPortable}
                    onClick={toCourse}
                    {...item}
                />
            ))}
        </Scrollable>
        <div className={cx("d-flex mt-3", { "flex-column": isPortable })}>
            <Button
                className={cx(
                    "font-weight-bold text-highlighted rounded-circle bg-action-new border-0 shadow-soft",
                    {
                        "mr-3": !isPortable,
                        "mb-3": isPortable,
                    },
                )}
                size="lg"
                onClick={onOrderClick}
            >
                Замовити дзвінок
            </Button>
            <Button
                className={cx("font-weight-bold rounded-circle", {
                    "mr-3": !isPortable,
                    "mb-3": isPortable,
                })}
                color="primary-new"
                size="lg"
                href="/quiz/lead"
                outline
            >
                Пройти тестування рівня
            </Button>
            <Button
                className="font-weight-bold rounded-circle"
                href={leraContact}
                color="primary-new"
                size="lg"
                outline
            >
                Написати нам в Телеграм
            </Button>
        </div>
    </section>
);
