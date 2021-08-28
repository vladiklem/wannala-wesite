import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import cx from "classnames";

import { Button } from "components/";
import { StudentHatIcon } from "components/Icons/StudentHatIcon";
import { toggleHeader } from "store/app/actions";
import martaItAvatar from "assets/images/marta_it_avatar.webp";
import vladItAvatar from "assets/images/vlad_it_avatar.webp";
import leraItAvatar from "assets/images/lera_it_avatar.jpeg";
import fistEmoji from "assets/images/fist_emoji.webp";
import loveEyesEmoji from "assets/images/love_eyes_emoji.webp";
import blinkEyeEmoji from "assets/images/blink_eye_emoji.webp";

import styles from "./SoftSkillsMarathonPage.module.scss";
import { Animated } from "components/Animated/Animated";
import { AuthorsScrollablePanel } from "./AuthorsScrollablePanel/AuthorsScrollablePanel";
import translations from "components/styled/FeedbackScrollable/FeedbackScrollable.translations";
import { MarathonStructureItem } from "./MarathonStructureItem/MarathonStructureItem";
import { localStorageService } from "services/localStorageService";

const feedbacks = translations.ua;

const BOT_LINK = "https://t.me/it_blab_bot?start=ZGw6NDM0NTk";

const structure = [
    {
        title: <>English interview</>,
        description: (
            <>
                Ти дізнаєшся кілька практичних порад, які допоможуть тобі підготуватись до
                співбесіди англійською. А ще ми розглянемо найпоширеніші запитання на співбесідах в
                міжнародні компанії і як на них краще давати відповідь.
            </>
        ),
        emojiSrc: loveEyesEmoji,
    },
    {
        title: <>How to ask and answer</>,
        description: (
            <>
                Навіщо вміти ставити питання правильно, якщо і так зрозуміло, що я кажу? Це потрібно
                для того, щоб ефективно побудувати комунікацію з клієнтом або ненароком не образити
                його неформальним виразом. А ще, так ти зможеш швидше дізнаватись потрібну
                інформацію і не витрачати час на додаткові роз’яснення.
            </>
        ),
        emojiSrc: blinkEyeEmoji,
    },
    {
        title: <>Small Talks</>,
        description: (
            <>
                Ти дізнаєшся, що таке small talk і навіщо він потрібен. Тут буде декілька загальних
                тем для коротких розмов, аби ти не губився, коли залишишся наодинці з клієнтом. А ще
                ми розповімо, про що краще не говорити з англомовним замовником.
            </>
        ),
        emojiSrc: fistEmoji,
    },
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const socialProof = localStorageService.getItem("socialProof");

const SoftSkillsMarathonPage = ({ isPortable }) => {
    const dispatch = useDispatch();

    const setMove250 = useCallback(
        (isVisible) => ({
            loop: false,
            config: { duration: isPortable ? 500 : 800 },
            from: { x: 0 },
            to: { x: isVisible ? (isPortable ? window.innerWidth / 2 - 55 : (1140 - 48) / 2) : 0 },
        }),
        [isPortable],
    );

    const setMoveBack = useCallback(
        (isVisible) => ({
            loop: false,
            config: { duration: 300 },
            delay: 100,
            from: { x: 10 },
            to: { x: isVisible ? -10 : 0, opacity: isVisible ? 1 : 0 },
        }),
        [],
    );

    const setFeedbackConfig = useCallback(
        (isVisible) => ({
            loop: false,
            config: { duration: 300 },
            from: { opacity: 0, scale: 0.7 },
            to: { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.7 },
        }),
        [],
    );

    const videoHeight = useMemo(() => (isPortable ? 200 : 480), [isPortable]);
    const feedbackAvatarHeight = useMemo(() => (isPortable ? 56 : 56), [isPortable]);
    const randomNumber = useMemo(() => getRandomNumber(1, 100), []);
    const isCountNew = useMemo(
        () =>
            !socialProof.timestamp ||
            !socialProof.count ||
            (socialProof.timestamp && (Date.now() - socialProof.timestamp) / 60000 >= 1),
        [],
    );
    const count = useMemo(() => (isCountNew ? randomNumber : socialProof.count), [
        isCountNew,
        randomNumber,
    ]);

    useEffect(() => {
        dispatch(toggleHeader());
    }, []);

    useEffect(() => {
        isCountNew &&
            localStorageService.setItem("socialProof", {
                timestamp: Date.now(),
                count: randomNumber,
            });
    }, [isCountNew, randomNumber]);

    return (
        <article className="">
            <section className="pt-6 mb-4 container full-height">
                <section className={cx(styles.bottomBorderElement, "py-3")}>
                    <h1 className="h2 mb-3 font-weight-bold">
                        Free Марафон <br />
                        «Boost your soft skills» 🚀
                    </h1>
                    <div className="row no-gutters mt-2 align-items-center">
                        <img
                            className="rounded-lg mr-2"
                            width={56}
                            height={56}
                            src={martaItAvatar}
                            alt="Марта Чайковська - одна з авторів та головний вчитель марафону."
                        />
                        <img
                            className="rounded-lg mr-2"
                            width={56}
                            height={56}
                            src={leraItAvatar}
                            alt="Валерія Михальова - одна з авторів марафону."
                        />
                        <img
                            className="rounded-lg mr-2"
                            width={56}
                            height={56}
                            src={vladItAvatar}
                            alt="Влад Балюк - один з авторів марафону."
                        />
                        <h2 className={cx("regular mt-2", { "ml-3": !isPortable })}>
                            by wannablab
                        </h2>
                    </div>
                    <h2
                        className={cx("mt-3", {
                            "h4 font-weight-normal": !isPortable,
                            regular: isPortable,
                        })}
                    >
                        Хочеш бути впевненим у <br />{" "}
                        <strong>розмовній англійській на роботі</strong>?
                    </h2>
                    <br />
                    <p
                        className={cx("mt-3_5", {
                            "w-50 h4 font-weight-normal": !isPortable,
                            regular: isPortable,
                        })}
                    >
                        Тоді приєднуйся до нашого 3-денного марафону, працюй над{" "}
                        <strong>англійскою</strong> та <strong>soft skills</strong> і збільшуй свої{" "}
                        <strong>доходи</strong>.
                    </p>
                </section>
                <section className="pt-3_5">
                    <div className="d-flex align-items-center">
                        <StudentHatIcon
                            className={cx({ "w-100": isPortable })}
                            width={80}
                            height={80}
                        />
                        <p className={cx("ml-3 font-small", { "w-50": !isPortable })}>
                            <span className="font-weight-semibold">
                                Вже більше 100 наших студентів
                            </span>{" "}
                            отримали омріяну роботу і будують кар’єру на міжнародному ринку.
                        </p>
                    </div>
                    <div className="d-flex p-3 mt-3 align-items-center justify-content-center">
                        <Button
                            className={cx(styles.joinButton, "font-weight-bold rounded-circle")}
                            href={BOT_LINK}
                        >
                            <div className="d-flex">
                                <div className={styles.content}>Приєднатися</div>
                                <div className={styles.append}>Free</div>
                            </div>
                        </Button>
                    </div>
                </section>
            </section>
            <section className={cx(styles.alternativeBlackBack, "py-4")}>
                <div className="container text-white">
                    <Animated isOnce getConfig={setMove250}>
                        <Animated.Node>
                            <h2
                                className={cx("h1 font-weight-semibold", {
                                    h1: isPortable,
                                    h0: !isPortable,
                                })}
                            >
                                Як?
                            </h2>
                        </Animated.Node>
                    </Animated>
                    <Animated className="mb-4">
                        <Animated.TrailText
                            tagClassName={cx({ "w-75": !isPortable })}
                            items={[
                                "Ми, засновники wannablab, працюємо в",
                                "IT вже більше 4 років в autosource та продуктових",
                                "компаніях. Багато хто думає, що для роботи",
                                "з європейським клієнтом потрібна advanced англійська,",
                                "але насправді ні: тобі лише потрібні навички комунікації в певних темах і soft skills.",
                            ]}
                        />
                    </Animated>
                    <div className="mb-2">
                        <LazyLoad height={videoHeight} className="mr-2">
                            <iframe
                                className="w-100 rounded-xl border border-width-2 p-1"
                                title="Команда авторів курсу"
                                height={videoHeight}
                                src="https://www.youtube.com/embed/Tw0KU99vdB0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullFcreen
                            ></iframe>
                        </LazyLoad>
                    </div>
                    <Animated>
                        <Animated.TrailText
                            tagClassName={cx({ "w-75": !isPortable })}
                            items={[
                                "А Марта — вчитель з 3 роками досвіду",
                                "та 200-ма+ успішними учнями. ",
                                "Вона проведе тебе за року по",
                                "хащам перемовин англійською.",
                            ]}
                        />
                    </Animated>
                </div>
            </section>
            <section>
                <div className="container pt-4 pb-4">
                    <h2 className="h1 mb-4">Чому ти навчишся?</h2>
                    <ul>
                        {structure.map((item, index) => (
                            <MarathonStructureItem
                                setMoveBack={setMoveBack}
                                isPortable={isPortable}
                                index={index}
                                className={cx({ "mb-4": !isPortable })}
                                {...item}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="h1 mb-4">Що ти отримаєш після марафону?</h2>
                <ul>
                    <li>Базу для проходження співбесід та спілкування с замовником англійською</li>
                    <li>Цілу торбу корисних подарунків (за умови виконання домашки)</li>
                    <li>-Тест рівня англійської</li>
                    <li>-Спікінг клаб з американцем</li>
                    <li>-Знижку 10% на програму тренування англійської English for IT teams</li>
                </ul>
            </section>
            <section className={cx(styles.alternativeBlackBack, "pt-4 pb-5")}>
                <div className={cx({ container: !isPortable }, "text-white")}>
                    <AuthorsScrollablePanel isPortable={isPortable} />
                </div>
            </section>
            <section className="container py-4">
                <h2 className="h2 font-weight-bold mt-3 mb-4">
                    <span className="text-alternative-tertiary">Більше 100-та студентів</span>{" "}
                    <Animated isOnce getConfig={() => ({ delay: 300 })}>
                        <Animated.TrailText
                            items={["отримали омріяну роботу!", "Почитай, що вони говорять"]}
                        />
                    </Animated>
                </h2>
                <div className={cx({ "row flex-wrap justify-content-center": !isPortable })}>
                    {feedbacks.map(({ name, avatar, instUsername, alt, description }) => (
                        <Animated
                            className={cx({ "col-6 mb-4_5": !isPortable, "mb-3": isPortable })}
                            isOnce
                            getConfig={setFeedbackConfig}
                        >
                            <Animated.Node>
                                <div
                                    className={cx(styles.card, { [styles.isPortable]: isPortable })}
                                >
                                    <div className="row mb-4">
                                        <div
                                            className={cx({
                                                "col-3": isPortable,
                                                "col-2": !isPortable,
                                            })}
                                        >
                                            <img
                                                src={avatar}
                                                height={feedbackAvatarHeight}
                                                width={feedbackAvatarHeight}
                                                alt={alt}
                                                className="rounded-circle image"
                                            />
                                        </div>
                                        <div className="col-9 d-flex flex-column justify-content-center pl-0">
                                            <h3 className="regular font-weight-bold">{name}</h3>
                                            <a
                                                href="https://www.instagram.com/volodymyr_shyshko_/"
                                                className="text-alternative-tertiary"
                                            >
                                                {instUsername}
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </Animated.Node>
                        </Animated>
                    ))}
                </div>
            </section>
            <section className="container mb-5">
                <Animated>
                    <Animated.Number
                        val={count}
                        prepandNode="✍️ "
                        appendNode=" однодумців записуються разом с тобою прямо зараз!"
                        className="h3 px-2 mb-5"
                    />
                </Animated>
                <div
                    className={cx(
                        styles.banner,
                        "p-4 pb-5 rounded-xl text-white d-flex flex-column align-items-center",
                    )}
                >
                    <h2 className="h3 text-center font-weight-bold mb-5">
                        Запишись на марафон і почни піднімати вартість своїх послуг вже сьогодні!
                    </h2>
                    <Button
                        className={cx(
                            styles.joinButton,
                            "font-weight-bold rounded-circle text-alternative-tertiary h3",
                        )}
                        href={BOT_LINK}
                    >
                        <div className={styles.content}>Приєднатися</div>
                    </Button>
                </div>
            </section>
            <Button
                className={cx(
                    styles.joinButton,
                    styles.sm,
                    styles.fixed,
                    "font-weight-bold rounded-circle",
                    { [styles.fixedDesktop]: !isPortable },
                )}
                href={BOT_LINK}
            >
                <div className={styles.content}>Приєднатися</div>
            </Button>
        </article>
    );
};

export default SoftSkillsMarathonPage;
