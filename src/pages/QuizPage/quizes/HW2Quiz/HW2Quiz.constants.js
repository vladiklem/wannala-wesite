import { Input, inputTypeEnum, Radio } from "components/";
import { localStorageService } from "services/localStorageService";

const name = localStorageService.getItem("user").firstName;

const questions = [
    {
        type: "input",
        component: Input,
        title: `Привіт${name ? ", " + name : ""} 👋`,
        description: `Дуже раді, що ти вирішив приділити час домашці, ${
            name ? "" : "підкажи як тебе звати і "
        } погнали 🚀`,
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
        title: "1️⃣ Переклади корисну звичку англійською.",
        description: "Я постійний читач, тому кожен місяць читаю нову книгу.",
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
        title: "2️⃣ Виправ помилки в реченні",
        description: "What are you usually have for breakfast?",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans2",
                label: "Виправлене речення",
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
        title: "3️⃣ Переклади речення використовуючи future simple and to be going to",
        description: "Мені здається, він не пройде цей етап інтерв'ю.",
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
        type: "input",
        component: Input,
        name: "ans4",
        title: "4️⃣ Доповни речення з допомогою Future Simple ",
        description: "What time ________ (the sun/set) today?",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new", name: "ans4" },
        list: [
            {
                name: "ans4",
                label: "Пропуск",
                className: "mb-2 mt-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "radio",
        name: "ans5",
        component: Radio,
        title: "5️⃣ Обери правильний варіант відповіді.",
        description: "I don't think he _____ come tonight. But he says he _____ come.",
        commonProps: {
            name: "ans5",
        },
        list: [
            { children: "will / will", value: "will.will" },
            { children: "is going to / will", value: "isGoingTo.will" },
            { children: "will / is going to", value: "will.isGoingTo" },
            { children: "is going to / would", value: "isGoingTo.would" },
        ],
    },
];

export default questions;
