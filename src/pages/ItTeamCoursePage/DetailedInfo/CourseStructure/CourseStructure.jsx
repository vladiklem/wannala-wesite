import React, { useState } from "react";
import { Collapse, List } from "components/index";

import cx from "classnames";

const structure = [
    {
        title: "Часопис англійською",
        titleEng: "Basic tenses",
        lessons: [
            "Past Simple — після уроку ти навчишся правильно розповідати про свій досвід роботи, формулювати речення у минулому швидко і використовувати умовні конструкції",
            "Present Simple — під час уроку розберемо чому говорити she don`t та I am agree - не ок, а згодом ти зможеш будувати свої речення в теперішньому часі корректно, розповідати про свої звички та обов’язки на роботі з впевненістю",
            "Future Simple (Your Future plan + goals)",
            "Спікінг клаб",
        ],
        description:
            "Базові часи - Past Simple, Present Simple, Future Simple. По уроку на кожний та спікінг клаб в кінці.",
        emoji: "🕑",
    },
    {
        title: "",
        titleEng: "Dealing with people",
        lessons: [
            "Asking smth (I would/ some modal verbs)",
            "Suggestions (how to make and react) - linkers and I think",
            "Criticism",
            "Спікінг клаб",
        ],
        description: "",
        emoji: "🤝",
    },
    {
        title: "",
        lessons: [
            "Plans for a new product (how to plan and make plans)",
            "Changes and how to respond to them",
            "Feedback (respond and provide)",
            "Спікінг клаб",
        ],
        titleEng: "Projects",
        description: "",
        emoji: "⚙️",
    },
    {
        title: "",
        titleEng: "Meetings",
        lessons: [
            "Brainstorming the idea",
            "Present an idea and report on what you did",
            "Dealing with misunderstandings",
            "Спікінг клаб",
        ],
        description: "",
        emoji: "🧑‍💻",
    },
];

export const CourseStructure = ({ className }) => {
    const [openCollapseId, setOpenCollapseId] = useState(0);

    return (
        <div className={className}>
            {structure.map(({ lessons, titleEng, emoji }, index, array) => (
                <Collapse
                    togglerClassName="font-weight-semibold text-left px-3"
                    togglerContent={`${emoji}  ${titleEng}`}
                    className={cx("border border-primary-new border-width-2 rounded-xl", {
                        "mb-3": index + 1 !== array.length,
                    })}
                    contentClassName="px-3 pb-3"
                    hasArrow
                    isControlled
                    isOpen={openCollapseId === index}
                    onToggle={() =>
                        index === openCollapseId
                            ? setOpenCollapseId(null)
                            : setOpenCollapseId(index)
                    }
                >
                    <List list={lessons} type="primary-new" />
                </Collapse>
            ))}
        </div>
    );
};
