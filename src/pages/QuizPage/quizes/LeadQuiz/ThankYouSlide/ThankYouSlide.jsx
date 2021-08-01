import React from "react";

import { telNumber } from "constants/social";

export const ThankYouSlide = () => (
    <>
        <h2 className="h3 mb-3">Дякуємо 😊</h2>
        <h3 className="regular">
            Наш кастомер ловер Марина заретелефонує тобі найближчим часом, або ти можеш зробити це
            сам і отримати <span className="font-weight-semibold">знижку 10%</span> <br /> Тисни{" "}
            <a href={`tel:${telNumber.short}`}>{telNumber.long}</a> 😉
        </h3>
    </>
);
