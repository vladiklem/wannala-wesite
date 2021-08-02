import { Input, inputTypeEnum, Radio } from "components/";
import { localStorageService } from "services/localStorageService";

const name = localStorageService.getItem("user").firstName;

export const stories = {
    friendBirthday: "you forgot about your friend's birthday.",
    fired: "you were fired by your boss.",
    partner: "you saw you partner with smbd else.",
    famous: "you could meet someone famous.",
};

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
        title: "1️⃣ Rewrite the text into past simple",
        description: "I usually get up 7 oclock and have a big breakfast",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans1",
                label: "Нове речення",
                className: "mb-2 mt-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        component: Input,
        title: "2️⃣ Translate the sentance into English",
        description: "Я закінчив працювати над проектом 2 місяці тому.",
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
        title: "3️⃣ Заповни пропуск",
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
        title: "4️⃣ Find a mistake and put down the right sentence",
        description: "Why did he be late for the game?",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans4",
                label: "Правильне речення",
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
        title: "5️⃣ Обери тему та запиши голосове зі своєю розповіддю ось сюди",
        description: "What would you do if...?",
        commonProps: {
            name: "ans5",
        },
        list: Object.keys(stories).map((key) => ({ value: key, children: stories[key] })),
    },
];

export default questions;
