import { Input, inputTypeEnum, Radio } from "components/index";
import beginner from "assets/audio/beginner_elementary.mp3";
import intermediate from "assets/audio/pre_intermediate_intermediate.mp3";
import advanced from "assets/audio/upper_intermediate_advanced.mp3";
import { Conversation } from "components/Icons/Conversation";
import { PersonalAttitude } from "components/Icons/PersonalAttitude";
import { Learning } from "components/Icons/Learning";
import { Grammar } from "components/Icons/Grammar";

import sophia from "assets/images/sophia.jpeg";
import kateAvatar from "assets/images/kate_avatar.jpeg";
import anyaAvatar from "assets/images/anya_avatar.jpeg";
import groupCover from "assets/images/group-cover.webp";
import soloCover from "assets/images/solo-cover.webp";
import proCover from "assets/images/pro-cover.png";
import vovaAvatar from "assets/images/vova_avatar.webp";
import volodymyrAvatar from "assets/images/volodymyr_avatar.webp";
import marynaAvatar from "assets/images/maryna_avatar.webp";
import soloEconomCover from "assets/images/solo-econom-cover.webp";
import martaItAvatar from "assets/images/marta_it_avatar.jpeg";

export const coursesList = [
    {
        title: "Pro - для швидкого навчання",
        slug: "pro-plan",
        name: "Pro",
        quoteId: 0,
        description:
            "2 групових заняття в тиждень, 1 індивідуальне заняття в тиждень, 2 small talk з нейтів спікером в тиждень, вічна підписка на Netflix",
        list: [
            "8 групових занять",
            "4 індивідуальних заняття",
            "2 small talks з нейтів спікером / тиждень",
            "∞ підписка на Netflix",
        ],
        matchesList: [
            "Тобі потрібно покращити розмовну англійську в найкоротший термін",
            "Хочеш зробити англійську частиною буденної рутини",
            "Потрібно навчитись розмовляти на професійні теми",
            "Рівень англійської: A2+",
        ],
        advantagesList: [
            "Швидко думати англійською ",
            "Спілкуватись з носіями один на один",
            "Швидко сприймати на слух",
            "Поставиш правильну вимову",
            "Зможеш правильно використовувати професійну лексику",
        ],
        imgSrc: proCover,
        lessonsCount: 20,
        price: 2970,
        className: "bg-pro-new",
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Basiс - для веселого навчання",
        slug: "basic-plan",
        quoteId: 1,
        name: "Basic",
        description:
            "2 групових заняття в тиждень, вічна підписка на Netflix, командний перегляд серіалів англійською",
        imgSrc: groupCover,
        lessonsCount: 8,
        price: 1270,
        className: "bg-group-new",
        list: [
            "8 групових занять",
            "∞ підписка на Netflix",
            "командний перегляд серіалів англійською",
        ],
        matchesList: [
            "Можеш будувати прості речення англійською у помірному темпі",
            "Орієнтуєшся в минулому та майбутньому часах",
            "Розумієш базову граматику ",
            "Рівень англійської: B1+",
        ],
        advantagesList: [
            "Швидше формувати думки англійською",
            "Покращиш вимову та граматику в розмові",
            "Швидко переключатись з рідної мови на англійську",
            "Підтримувати діалог на побутові та професійні теми",
            "Краще сприймати на слух",
        ],
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Solo - для персонального навчання",
        slug: "solo-plan",
        name: "Solo",
        quoteId: 2,
        description:
            "Індивідуальний план навчання, 2 індивідуальних заняття в тиждень, вічна підписка на Netflix",
        imgSrc: soloCover,
        lessonsCount: 8,
        price: 2370,
        className: "bg-solo-new",
        list: ["Індивідуальний план навчання", "8 індивідуальних занять", "∞ підписка на Netflix"],
        matchesList: [
            "Хочеш вивчити англійську з 0",
            "Хочеш заповнити свої пробіли у граматиці",
            "Є чітке розуміння потрібної лексики",
            "Потрібен гнучкий графік",
            "Рівень англійської: будь-який",
        ],
        advantagesList: [
            "Базовій граматиці",
            "Поставиш правильну вимову",
            "Зможеш правильно використовувати професійну лексику",
            "Зможеш коригувати свій план навчання так, щоб тобі було максимально цікаво та ефективно",
        ],
        status: {
            id: "ongoing",
        },
    },
    {
        title: "Solo econom",
        slug: "solo-econom-plan",
        name: "Solo",
        quoteId: 2,
        description:
            "Індивідуальний план навчання, 2 індивідуальних заняття в тиждень, вічна підписка на Netflix",
        imgSrc: soloEconomCover,
        lessonsCount: 8,
        price: 1870,
        className: "bg-solo-econom-new text-white",
        list: [
            "Індивідуальний план навчання",
            "8 індивідуальних по 45 хв",
            "∞ підписка на Netflix",
        ],
        matchesList: [
            "Хочеш вивчити англійську з 0",
            "Хочеш заповнити свої пробіли у граматиці",
            "Є чітке розуміння потрібної лексики",
            "Потрібен гнучкий графік",
            "Рівень англійської: будь-який",
        ],
        advantagesList: [
            "Базовій граматиці",
            "Поставиш правильну вимову",
            "Зможеш правильно використовувати професійну лексику",
            "Зможеш коригувати свій план навчання так, щоб тобі було максимально цікаво та ефективно",
        ],
        status: {
            id: "ongoing",
        },
    },
];

export const valuesList = {
    speaking: {
        title: "Розмовляємо 100% навчання",
        Icon: Conversation,
        description:
            "Нашим учням потрібна англійська для спілкування з замовниками із міжнародних компаній, для подорожей та побудови нетворкінгу. Тому ми навіть граматику вчимо розмовляючи.",
    },
    personalAttitude: {
        title: "Індивідуальне ставлення до учнів",
        Icon: PersonalAttitude,
        description:
            "До нас приходить із різним рівнем англійської та цілями. Комусь потрібна англійська швидко і зараз, а хтось хоче покращити граматику чи вокабуляр у певних темах. Тому індивідуальні заняття у всіх проходять по-різному: хтось вчиться продавати свою маркетинг стратегію, а хтось підтягує Past Perfect Continuous.",
    },
    learning: {
        title: "Вчимо слова та вирази у контексті",
        Icon: Learning,
        description:
            "Групові заняття у нас завжди тематичні та мають свій воджист. Тому ти проговриш та почуєш ці слова по декілька разів за заняття і не просто запам’ятаєш їх, а зрозумієш як і коли їх потрібно вживати.",
    },
    grammar: {
        title: "Граматика в іграх",
        Icon: Grammar,
        description:
            "Частина кожного групового заняття  - це гра. Ось як ми вчили використання модальних дієслів: Кожний учасник загадував певний вік, а завдання іншого було вгадати цей вік, задаючи питання з використанням модальних дієслів. Наприклад, Should you go to school? Should you have a lot of rest? Can you drive?",
    },
};

export const mentorsList = [
    {
        slug: "marta-yarosh",
        name: "Марта Чайковська",
        src: martaItAvatar,
        list: ["IELTS (7.5 CERF C1)", "50+ успішних студентів"],
        color: "light-green",
        shortDescription: "Вчитель англійської мови для дорослих починаючи від рівня А2 до С1.",
        longDescription:
            'Знання підтверджені міжнародним сертифікатом IELTS (7.5 CERF C1) \nЗа рік роботи вчителем у wannablab допомогла більше 30 студентам позбавитися мовного бар\'єру та перестати нарешті говорити "I am agree". \n Маю досвід в підготовці студентів до таких екзаменів як ЄВІ, ЗНО, IELTS.',
        instaHref: "https://www.instagram.com/p/CKQ3toJnQRk/",
    },
    {
        slug: "ann-stepova",
        name: "Аня Степова",
        src: anyaAvatar,
        longDescription: (
            <>
                {" "}
                Hello, Buddy! <br /> <br /> Мене звати <strong>Аня</strong> і я твій{" "}
                <strong>personal tutor</strong> у wannablab. Моя місія тут не тільки для того, щоб
                навчити тебе розуміти англійські серільчики чи пісні, а ще й для того, щоб зробити
                англійську твоїм улюбленим хобі! <br /> <br /> Навчати англійській мові - це моя
                мрія, тож я do my best, щоб твоя англійська була бездоганною! На тебе чекає безліч
                обговорень життєвих ситуацій, комфортна та дружня атмосфера на наших уроках (можу,
                навіть, бути твоїм personal English психологом 🤫) У мене є багато experience у
                вивченні англійської, тож, я би хотіла поділитись ним саме з тобою 😉{" "}
            </>
        ),
        shortDescription: "Ваш нереально короткий дескріпшен.",
        list: ["Сертифікат IELTS на C1", "30+ задоволених учнів"],
        color: "soft-blue",
        instaHref: "https://www.instagram.com/p/CNrniuEBoL9/",
    },
    {
        slug: "kate-timchenko",
        name: "Катя Тимченко",
        src: kateAvatar,
        list: ["3+ роки практики", "1500+ уроків"],
        shortDescription: "Репетитор англійської мови для дорослих та дітей.",
        longDescription:
            "Мене звати Катя, я викладаю англійську з 18 років і готова поділитись усіма знаннями, які накопичила за ці роки. Можу підтримати розмову на будь-яку тему - від бізнес-новин до моди та серіалів.",
        color: "soft-purple",
        instaHref: "https://www.instagram.com/p/CLMI-SRnLwM/",
    },
    {
        slug: "marina-torokhtiy",
        name: "Марина Торохтій",
        src: marynaAvatar,
        shortDescription: "Вчитель яка знає 6 мов  та пожила вже у чотирьох країнах!",
        longDescription:
            "Привіт, я Марина, думаєш говорити англійською страшно? Тоді мої смол токи саме для тебе, це буде ізі & фані адже я маю безліч досвіду в спілкуванні з іноземцями, чого і тебе навчу😊 Жила в Португалії, в Канаді та наразі в Німеччині.",
        list: ["native speaker", "500+ проведених уроків"],
        color: "soft-purple",
        instaHref: "https://www.instagram.com/p/CLoWqlBHXQv/",
    },
];

export const usersFeedbackList = [
    {
        name: "Софія",
        avatar: sophia,
        description:
            "Нещодавно підписала контракт з англомовним клієнтом, з яким сама працювала. Можу говорити з ним по 45 хвилин і взагалі ніякого дискомфорту немає. Під час дзвінків я знаю, що навіть якщо щось не знатиму на англ, то зможу це пояснити і все буде окей.",
        alt: "Софія, студентка школи розмовної англійської wannablab",
    },
    {
        name: "Вова",
        avatar: vovaAvatar,
        description:
            "Мій рівень на тестуванні оцінили в А2. Ціллю була робота, пов’язана із комунікацією англійською. Через 2 місяці я успішно пройшов співбесіду та працюю customer support і далі вивчаю англійську.",
        alt: "Вова, студент школи розмовної англійської wannablab",
    },
    {
        name: "Володимир",
        avatar: volodymyrAvatar,
        description:
            "Я навчився думати англійською на побутовому рівні. Навіть вдома я намагаюся проговорювати назви предметів англійською. Зараз я переписуюся зі своїм знайомим з Лондону і мені вже не потрібен для цього перекладач. Скоро ми плануємо зустрітися, тому це для мене ще один стимул вдосконалювати мову. ",
        alt: "Володимир, студент школи розмовної англійської wannablab",
    },
];

export const quizQuestionsObj = {
    lead: [
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
    ],
};

export const questionsList = [
    {
        type: "radio",
        name: "listening-1",
        component: Radio,
        audio: {
            source: beginner,
            description: "Прослухай аудіо і відміть правильну відповідь",
        },
        description: "Kelly is satisfied with her rest in Blackpool.",
        commonProps: {
            name: "listening-1",
        },
        list: [
            { value: "yes1", children: "yes" },
            { value: "no1", children: "no" },
        ],
    },
    {
        type: "radio",
        name: "grammer-1",
        component: Radio,
        description: "We ... to work every day.",
        commonProps: {
            name: "grammer-1",
        },
        list: [
            { value: "going", children: "going" },
            { value: "go", children: "go" },
            { value: "goes", children: "goes" },
        ],
    },
    {
        type: "radio",
        name: "grammer-2",
        component: Radio,
        description: "Nick is Ukrainian. He’s ... Ukraine.",
        commonProps: {
            name: "grammer-2",
        },
        list: [
            { value: "from", children: "from" },
            { value: "to", children: "to" },
            { value: "at", children: "at" },
        ],
    },
    {
        type: "radio",
        name: "reading-1",
        component: Radio,
        text:
            "David is a typical man – he is 27 and works as a manager for an international company. But there is something special about him – he designs clothes for his pet Dolly – the hairless Sphynx cat. In university he went to sewing courses and now he cannot imagine his life without creating clothes even for a cat.",
        description: "Why does David design clothes for his cat?",
        commonProps: {
            name: "reading-1",
        },
        list: [
            {
                value: "answer-1-1",
                children: "All Sphynx cats need clothes because they do not have fur.",
            },
            { value: "answer-2-1", children: "He attended special classes and likes sewing." },
            {
                value: "answer-3-1",
                children: "He is bored at his work so he wants to do something new.",
            },
        ],
    },
    {
        type: "radio",
        name: "grammer-3",
        component: Radio,
        description: "London is ... than Kyiv.",
        commonProps: {
            name: "grammer-3",
        },
        list: [
            { value: "nosiest", children: "nosiest" },
            { value: "noisy", children: "noisy" },
            { value: "noisier", children: "noisier" },
        ],
    },
    {
        type: "radio",
        name: "grammer-4",
        component: Radio,
        description: "Look at Emma! She ... a blue skirt today!",
        commonProps: {
            name: "grammer-4",
        },

        list: [
            { value: "wearing", children: "wearing" },
            { value: "is-wearing", children: "is wearing" },
            { value: "is-wear", children: "is wear" },
        ],
    },
    {
        type: "radio",
        name: "listening-2",
        component: Radio,
        audio: {
            source: intermediate,
            description: "Прослухай аудіо і відміть правильну відповідь",
        },
        description: "Nina was shy that is why she didn’t give her telephone number.",
        commonProps: {
            name: "listening-2",
        },
        list: [
            { value: "yes2", children: "yes" },
            { value: "no2", children: "no" },
        ],
    },
    {
        type: "radio",
        name: "grammer-5",
        component: Radio,
        description: "There must be ... coffee left in the coffee-pot.",
        commonProps: {
            name: "grammer-5",
        },

        list: [
            { value: "a-few", children: "a few" },
            { value: "few", children: "few" },
            { value: "some", children: "some" },
        ],
    },
    {
        type: "radio",
        name: "grammer-6",
        component: Radio,
        description: "Bill ... a present if he had remembered it was Anna’s birthday.",
        commonProps: {
            name: "grammer-6",
        },

        list: [
            { value: "would-have-sent", children: "would have sent" },
            { value: "would-send", children: "would send" },
            { value: "sent", children: "sent" },
        ],
    },
    {
        type: "radio",
        name: "reading-2",
        component: Radio,
        text:
            "Stress can be caused by any type of physical or emotional stimulus usually without us noticing it. Different factors can be the reason for stress, starting from social and financial problems ending with illness and family discord. Stress can result in mood changes, poor health and even depression.",
        description: "According to the paragraph...",
        commonProps: {
            name: "reading-2",
        },
        list: [
            { value: "answer-1-2", children: "People know all the causes of stress." },
            { value: "answer-2-2", children: "Stress does not worsen people’s health." },
            { value: "answer-3-2", children: "Stress can “hit” us from everywhere." },
        ],
    },
    {
        type: "radio",
        name: "grammer-7",
        component: Radio,
        description: "You ... me!",
        commonProps: {
            name: "grammer-7",
        },

        list: [
            { value: "criticize-always", children: "criticize always" },
            { value: "are-always-criticizing", children: "are always criticizing" },
            { value: "always-are-criticizing", children: "always are criticizing" },
        ],
    },
    {
        type: "radio",
        name: "listening-3",
        component: Radio,
        audio: {
            source: advanced,
            description: "Прослухай аудіо і відміть правильну відповідь",
        },
        description: "Which word most fits the description of a person?",
        commonProps: {
            name: "listening-3",
        },
        list: [
            { value: "critical", children: "critical" },
            { value: "cruel", children: "cruel" },
            { value: "arrogant", children: "arrogant" },
            { value: "deceitful", children: "deceitful" },
        ],
    },
    {
        type: "radio",
        name: "grammer-8",
        component: Radio,
        description: "Alice won’t be able to buy that car ... she saves some money.",
        commonProps: {
            name: "grammer-8",
        },

        list: [
            { value: "unless", children: "unless" },
            { value: "if", children: "if" },
            { value: "as-long-as", children: "as long as" },
        ],
    },
    {
        type: "radio",
        name: "reading-3",
        component: Radio,
        text:
            "The amount of information on offer is so considerable that along with an abundance of distractions like advertisements and tempting news blocks the choice of that needed piece of information virtually becomes a torture for many. Users go online with an intention of receiving knowledge but end up purposelessly roaming from site to site losing their time and temper occasionally.",
        description: "According to the paragraph...",
        commonProps: {
            name: "reading-3",
        },
        list: [
            { value: "answer-1-3", children: "How much violence there can be on the Net." },
            {
                value: "answer-2-3",
                children: "How people struggle to find valuable and useful information.",
            },
            {
                value: "answer-3-3",
                children: "How much time people waste on reading pop-up advertisements.",
            },
        ],
    },
    {
        type: "radio",
        name: "grammer-9",
        component: Radio,
        description: "Steven ... the wallet.",
        commonProps: {
            name: "grammer-9",
        },

        list: [
            { value: "admitted-to-steal", children: "admitted to steal" },
            { value: "admitted-steal", children: "admitted steal" },
            { value: "admitted-stealing", children: "admitted stealing" },
        ],
    },
    {
        type: "radio",
        name: "grammer-10",
        component: Radio,
        description: "She’ll have to wait because the breakfast ...",
        commonProps: {
            name: "grammer-10",
        },

        list: [
            { value: "is-just-making", children: "is just making" },
            { value: "is-just-being-made", children: "is just being made" },
            { value: "is-just-being-making", children: "is just being making" },
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
            { name: "firstName", label: "Ім'я", className: "mt-n2" },
            {
                name: "phoneNumber",
                label: "Номер телефону",
                className: "mb-3",
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
