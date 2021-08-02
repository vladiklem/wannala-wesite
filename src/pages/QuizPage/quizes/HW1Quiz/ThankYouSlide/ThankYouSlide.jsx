import React from "react";

import { martaContact } from "constants/social";
import { stories } from "../HW1Quiz.constants";

export const ThankYouSlide = ({ theme }) => (
    <>
        <h2 className="h3 mb-3">Вітаємо з першою домашкою 😊</h2>
        <h3 className="regular">
            Залишилось записати невеличке голосове{" "}
            <a className="font-weight-semibold" href={martaContact}>
                в телеграм Марти
            </a>{" "}
            на тему{" "}
            <span className="font-weight-semibold">"What would you do if {stories[theme]}"</span>.
            Не відкладуй на потім 😉
        </h3>
    </>
);
