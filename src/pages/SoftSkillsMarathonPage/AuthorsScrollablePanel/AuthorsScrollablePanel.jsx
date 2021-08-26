import React, { useCallback } from "react";

import { Animated } from "components/Animated/Animated";
import { Scrollable, ScrollableItem } from "components/";
import { Instagram, LinkedIn } from "components/Icons/social";

const socialIcons = {
    instagram: Instagram,
    linkedin: LinkedIn,
};

const getSocialIcon = (slug, link) => {
    const Tag = socialIcons[slug];

    return (
        <a href={link} className="mr-3">
            <Tag height={36} width={36} style={{ backgroundColor: "#fff", borderRadius: 6 }} />
        </a>
    );
};

export const authors = [
    {
        nameArray: ["Marta", "Chaykovska"],
        description: (
            <>
                <span>Хей, я твій ментор на цьому марафоні.</span> <br /> <br />{" "}
                <span>
                    За рік роботи у wannablab я провела понад 1500 занять та вивела більш ніж 80
                    учнів зі ступору англійської мови. Будеш наступним?
                </span>
                ,
            </>
        ),
        social: {
            instagram: "https://www.instagram.com/marta_chaykovskaya/",
        },
    },
    {
        nameArray: ["Valeriia", "Mykhalova"],
        description: (
            <>
                <span>Привіт! Зараз я працюю, як мобільний розробник в шведському стартапі.</span>{" "}
                <br /> <br />{" "}
                <span>
                    Можу розповісти про все, що стосується роботи в продуктовій компанії та про
                    особливості роботи з європейцями.
                </span>
                ,
            </>
        ),
        social: {
            instagram: "https://www.instagram.com/mykhalove/",
            linkedin: "https://www.linkedin.com/in/valeriia-mykhalova-334924168/",
        },
    },
    {
        nameArray: ["Vladyslav", "Baliuk"],
        description: (
            <>
                <span>Йо, я працюю в аусторс проектах вже більше 5 років</span> <br /> <br />{" "}
                <span>
                    з яких 2 були міжнародні проекти різних країн. Підскажу як потрібно будувати
                    відносини із англомовним замовником, щоб отримувати бажану зп.
                </span>
                ,
            </>
        ),
        social: {
            instagram: "https://www.instagram.com/vlad_lem_/",
            linkedin: "https://www.linkedin.com/in/vlad-baliuk/",
        },
    },
];

export const AuthorsScrollablePanel = () => {
    const setTrailTextConfig = useCallback(
        () => ({
            config: { duration: 300 },
        }),
        [],
    );

    return (
        <Scrollable
            offset={document.documentElement.clientWidth - 48}
            hasArrows
            arrowsProps={{ fill: "#fff" }}
            isScrollbarVisible={false}
            isLocked={false}
            containerClassName="px-4"
        >
            {authors.map(({ nameArray, description, social }) => (
                <ScrollableItem className="mx-4" key={social.instagram || description}>
                    <div>
                        <h2 className="h3 mt-2 mb-3 d-flex align-items-center">
                            <span className="text-alternative-tertiary font-weight-bold mr-2">
                                Meet
                            </span>{" "}
                            <Animated getConfig={setTrailTextConfig}>
                                <Animated.TrailText delay={200} items={nameArray} />
                            </Animated>
                            <span className="h2 ml-1">👋</span>
                        </h2>
                        <h3 className="regular">{description}</h3>
                        <div
                            style={{ height: 2, width: "20vw", backgroundColor: "white" }}
                            className="mt-3 mb-4"
                        />
                        <div className="d-flex">
                            {Object.keys(social).map((slug) => getSocialIcon(slug, social[slug]))}
                        </div>
                    </div>
                </ScrollableItem>
            ))}
        </Scrollable>
    );
};
