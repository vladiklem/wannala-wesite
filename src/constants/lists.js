import groupCover from "assets/images/group-cover.webp";

export const coursesList = [
    {
        title: "Basiс - для веселого навчання",
        slug: "basic-plan",
        quoteId: 1,
        name: "Basic",
        description:
            "2 групових заняття в тиждень, вічна підписка на Netflix, командний перегляд серіалів англійською",
        imgSrc: groupCover,
        lessonsCount: 8,
        price: {
            old: 1270,
            new: 970,
        },
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
        title: `Курс "English in the IT team"`,
        slug: "it",
        name: "it-course",
        lessonsCount: 16,
        price: {
            old: 4970,
            new: 3970,
        },
        actionButtonLabel: "Детальніше",
        list: ["4 essential теми для IT", "16 занять", "командний перегляд серіалів англійською"],
        status: {
            id: "start-soon",
            date: "29 липня",
        },
    },
];
