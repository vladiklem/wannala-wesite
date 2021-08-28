import { Input, inputTypeEnum, Radio } from "components/";
import { localStorageService } from "services/localStorageService";

const name = localStorageService.getItem("user").firstName;

const questions = [
    {
        type: "input",
        component: Input,
        title: `Прівєтіки-пісталєтіки${name ? ", " + name : ""} 👋`,
        description: `Друже, ти красавчик що приділив час домашці. ${
            name ? "Гоу? :)" : "Підкажи як тебе звати і гоу :)"
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
        title: "1️⃣ Заповни пропуски в реченнях правильною формою дієслова.",
        description: "Would your husband mind _______ (to fix) the sink, it's clogged.",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans1",
                label: "Пропуск",
                className: "mb-2 mt-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        component: Input,
        title: "2️⃣ Виправ помилки в реченнях.",
        description: "Can you tell me where can I buy a good camera?",
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
        title: "3️⃣ Прийми або відхили прохання.",
        description: "Could you please lend me $600, I need to pay rent. (accept)",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans3",
                label: "Відповідь",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        name: "ans4",
        component: Input,
        title: "4️⃣ Заповни пропуски в реченнях правильною формою дієслова.",
        description: "Would they mind ________ (to eat out) at a restaurant tonight? I don't feel like cooking.",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans4",
                label: "Пропуск",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
    {
        type: "input",
        name: "ans5",
        component: Input,
        title: "5️⃣ Прийми або відхили прохання.",
        description: "Would you mind looking after my dog while I am on vacation? We will be gone for only a month. (decline).",
        commonProps: { type: inputTypeEnum.NEW, labelClassName: "bg-white-new" },
        list: [
            {
                name: "ans5",
                label: "Відповідь",
                className: "mb-2",
                tag: "textarea",
                inputClassName: "font-weight-semibold",
            },
        ],
    },
];

export default questions;
