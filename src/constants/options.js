import { eventTypesEnum } from "./enums";

export const eventTypeOptions = [
    { label: "Урок для групи", value: eventTypesEnum.GROUP_LESSON },
    { label: "Лекція", value: eventTypesEnum.LECTION },
    { label: "Перегляд фільму/серіалу", value: eventTypesEnum.WATCH },
    { label: "Вебінар", value: eventTypesEnum.WEBINAR },
    { label: "Звінок", value: eventTypesEnum.CALL },
    { label: "Приватне заняття", value: eventTypesEnum.PRIVATE_LESSON },
];

export const mentorOptions = [
    { label: "Марта Чайковська", value: "martaYarosh" },
    { label: "Марина Торохтій", value: "marinaTorohtiy" },
    { label: "Катя Тимченко", value: "kateTimchenko" },
    { label: "Аня Степова", value: "annStepova" },
];

export const levelOptions = ["A2", "pre-B1", "B1", "pre-B2", "B2", "C1", "Native"];

export const sourceOptions = [
    { label: "Instagram", value: "inst" },
    { label: "Website - form", value: "web-form" },
    { label: "Website - quiz", value: "web-quiz" },
    { label: "Marquiz", value: "marquiz" },
    { label: "Recommendation", value: "recommend" },
];