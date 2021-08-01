import React from "react";

import { martaContact } from "constants/social";

export const ThankYouSlide = ({ theme }) => (
    <>
        <h2 className="h3 mb-3">Вітаємо з першою домашкою 😊</h2>
        <h3 className="regular">
            Тепер запиши невеличке голосове <a href={martaContact}>в телеграм Марти</a> на тему
            "What I gonna do if {theme}". Не відкладуй на потім 😉
        </h3>
    </>
);
