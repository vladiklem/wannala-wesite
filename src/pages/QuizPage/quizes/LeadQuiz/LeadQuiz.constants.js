import { Input, inputTypeEnum, Radio } from "components/";

const questions = [
    {
        type: "radio",
        name: "proffesion",
        component: Radio,
        description: "В якій сфері розвиваєшся зараз?",
        commonProps: {
            name: "profession",
        },
        list: [
            { value: "it", children: "IT" },
            { value: "marketing", children: "Маркетинг" },
            { value: "management", children: "Менеджмент" },
            { value: "medicine", children: "Медицина" },
            { value: "other", children: "Інше" },
        ],
    },
    {
        type: "radio",
        name: "level",
        component: Radio,
        description: "Як оцінюєш свій рівень англійської?",
        commonProps: {
            name: "level",
        },
        list: [
            { value: "elementary", children: "Початковий" },
            { value: "intermediate", children: "Середній" },
            { value: "advanced", children: "Просунутий" },
        ],
    },
    {
        type: "radio",
        name: "problems",
        component: Radio,
        description: "Проблеми, які виникають у мене при вивченні англійської:",
        commonProps: {
            name: "problems",
        },
        list: [
            {
                value: "words-translation",
                children: "Будую речення англійською, перекладаючи слова в голові",
            },
            { value: "grammer", children: "У мене виникають проблеми з граматикою" },
            {
                value: "hardly-switch",
                children: "Важко одразу переключитись з рідної мови на англійську",
            },
        ],
    },
    {
        type: "radio",
        name: "evolution",
        component: Radio,
        description: "Над чим бужемо працювати?",
        commonProps: {
            name: "evolution",
        },

        list: [
            { value: "speaking", children: "Хочу вільно розмовляти" },
            { value: "vocabulary", children: "Збільшити словарний запас" },
            { value: "not-afraid-talking", children: "Хочу не боятись говорити" },
            {
                value: "proffesional-communication",
                children: "Покрищити професійну комунікацію",
            },
        ],
    },
    {
        type: "input",
        component: Input,
        description:
            "Супер! Тепер ми краще розуміємо, що тобі потрібно. 😊 Залиш свій номер телефону і тобі зателефонує наша менеджер Марина. ",
        focus: "firstName",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            { name: "firstName", label: "Ім'я", className: "mx-3 mb-2" },
            {
                name: "phoneNumber",
                label: "Номер телефону",
                className: "mx-3",
                maskProps: {
                    mask: `+38 (\\099) 999 9999`,
                    maskChar: "_",
                    alwaysShowMask: false,
                    name: "phoneNumber",
                },
            },
        ],
        props: {
            type: inputTypeEnum.NEW,
        },
    },
];

export default questions;
