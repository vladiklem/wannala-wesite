import { Input, inputTypeEnum } from "components/";
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
        title: "2️⃣ Виправ помилку в реченні",
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
        title: "3️⃣ Переклади корисну звичку англійською.",
        description: "Я не спілкуюся з людьми, з якими мені не комфортно.",
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
        title: "4️⃣ Виправ помилку в реченні",
        description: "My coworker spend hours on the phone! ",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new", name: "ans4" },
        list: [
            {
                name: "ans4",
                label: "Виправлене речення",
                className: "mb-2 mt-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        name: "ans5",
        component: Input,
        title: "5️⃣ Переклади корисну звичку англійською.",
        description: "Я регулярно прибираю безлад у своїй квартирі ",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans5",
                label: "Переклад",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
];

export default questions;
