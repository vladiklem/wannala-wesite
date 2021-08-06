import { Input, inputTypeEnum, Radio } from "components/";
import { localStorageService } from "services/localStorageService";

const name = localStorageService.getItem("user").firstName;

const questions = [
    {
        type: "input",
        component: Input,
        title: `Привіт${name ? ", " + name : ""} 👋`,
        description: `Дуже раді, що ти вирішив приділити час останній домашці по Future Simple. ${
            name ? "Ну що, гоу? :)" : "Підкажи як тебе звати і гоу :)"
        }`,
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: !name
            ? [
                  {
                      name: "firstName",
                      label: "Твоє ім'я",
                      className: "mb-2 mt-2",
                      inputClassName: "font-weight-semibold",
                  },
              ]
            : [],
    },
    {
        type: "input",
        component: Input,
        title: "1️⃣ Переклади речення використовуючи Future Simple and to be going to",
        description: "Він буде працювати в міжнародній компанії в наступному році.",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans1",
                label: "Переклад",
                className: "mb-2 mt-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        component: Input,
        title: "2️⃣ Доповни речення зa допомогою Future Simple",
        description: "What time ________ (the sun/set) today?",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans2",
                label: "Заповнений пропуск",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        name: "ans3",
        component: Input,
        title: "3️⃣ Переклади речення використовуючи Future Simple and to be going to",
        description: "Ти збираєшся починати працювати з Jira?",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans3",
                label: "Переклад",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "radio",
        name: "ans4",
        component: Radio,
        title: "4️⃣ Обери правильний варіант відповіді.",
        description: "I don't think he _____ come tonight. But he says he _____ come.",
        commonProps: {
            name: "ans4",
        },
        list: [
            { value: "will.will", children: "will / will" },
            { value: "isGoingTo.will", children: "is going to / will" },
            { value: "would.isGoingTo", children: "would / is going to" },
            { value: "will.isGoingTo", children: "will / is going to" },
        ],
    },
    {
        type: "radio",
        name: "ans5",
        component: Radio,
        title: "5️⃣ Обери правильний варіант відповіді.",
        description: "What _____ after you graduate. I _____ around the world",
        commonProps: {
            name: "ans5",
        },
        list: [
            { value: "areYouGoingToDo.imGoingToTravel", children: "are you going to do / 'm going to travel" },
            { value: "wouldYouDo.willTravel", children: "would you do / will travel" },
            { value: "willYouDo.imGoingToTravel", children: "will you do / 'm going to travel" },
            { value: "areYouGoingToDo.willTravel", children: "are you going to do / will travel" },
        ],
    },
];

export default questions;
