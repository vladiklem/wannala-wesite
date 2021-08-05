import React from "react";

import { martaContact } from "constants/social";

export const ThankYouSlide = ({ theme }) => (
    <>
        <h2 className="h2 mb-3">Раді що приділив свій час англійській </h2>
        <h3 className="h3 font-weight-normal">
            Останнє завдання буде наступним — розкажи про свій типовий робочий день, записавши
            коротке хвилинне аудіо{" "}
            <a className="font-weight-semibold" href={martaContact}>
                в телеграм Марти.
            </a>{" "}
            Використовуй ці слова:{" "}
            <span className="font-weight-semibold">
                always, frequently, sometimes, rarely, often.
            </span>
             {" "}Не відкладуй на потім 😉
        </h3>
    </>
);
