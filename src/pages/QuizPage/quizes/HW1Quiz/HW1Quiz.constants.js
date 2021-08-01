import { Input, inputTypeEnum, Radio } from "components/";
import { localStorageService } from "services/localStorageService";

const name = localStorageService.getItem("user").firstName;

const questions = [
    {
        type: "input",
        component: Input,
        title: `Привіт${name ? ", " + name : ""}`,
        description: `Дуже раді, що ти вирішив приділити час домашці, ${
            name ? "" : "підкажи як тебе і "
        } погнали`,
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: !name
            ? [
                  {
                      name: "firstName",
                      label: "Твоє ім'я",
                      className: "mb-2",
                      inputClassName: "font-weight-semibold",
                  },
              ]
            : [],
    },
    {
        type: "input",
        component: Input,
        title: "Rewrite the text into past simple",
        description: "I usually get up 7 oclock and have a big breakfast",
        rightAns: "I have been doing it.",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans1",
                label: "Нове речення",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        component: Input,
        title: "Translate into English",
        description: "Я закінчив працювати над проектом 2 місяці тому.",
        rightAns: "I have been doing it.",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans2",
                label: "Переклад",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "radio",
        name: "ans3",
        component: Radio,
        title: "Заповни пропуск",
        description: "How did you learn to drive? My father ___ me.",
        commonProps: {
            name: "ans3",
        },
        list: [
            { value: "wrote", children: "wrote" },
            { value: "spent", children: "spent" },
            { value: "tough", children: "tough" },
            { value: "bought", children: "bought" },
        ],
    },
    {
        type: "input",
        component: Input,
        title: "Find a mistake",
        description: "Why did he be late for the game",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans4",
                label: "Правильне речення",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "radio",
        name: "ans5",
        component: Radio,
        title: "Обери тему та запиши голосове зі своєю розповіддю ось сюди",
        description: "What would you do if...?",
        commonProps: {
            name: "ans5",
        },
        list: [
            { value: "friendBirthday", children: "You forgot about your friend's birthday." },
            { value: "fired", children: "If you were fired by your boss." },
            { value: "partnet", children: "You saw you partner with smbd else." },
            { value: "famous", children: "If you could meet someone famous." },
        ],
    },
];

export default questions;
