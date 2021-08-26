import React, { useCallback, useEffect } from "react";
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

const feedbacks = translations.ua;

const BOT_LINK = "https://t.me/it_blab_bot?start=ZGw6NDM0NTk";

const SoftSkillsMarathonPage = () => {
    const dispatch = useDispatch();

    const setMove250 = useCallback(
        (isVisible) => ({
            loop: false,
            config: { duration: 500 },
            from: { x: 0 },
            to: { x: isVisible ? window.innerWidth / 2 - 55 : 0 },
        }),
        [],
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

    useEffect(() => {
        dispatch(toggleHeader());
    }, []);

    return (
        <article className="">
            <section className="pt-6 mb-4 container full-screen-height">
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
                        <h2 className="regular mt-2">by wannablab</h2>
                    </div>
                    <h2 className="regular mt-3">
                        Хочеш <br /> працювати <br /> <strong>на міжнародних проектах</strong>?
                    </h2>
                    <br />
                    <p className="regular mt-3_5">
                        Тоді приєднуйся до нашого 3-денного марафону, працюй з{" "}
                        <strong>англомовними</strong> клієнтами і збільшуй свої{" "}
                        <strong>доходи</strong>.
                    </p>
                </section>
                <section className="pt-3_5">
                    <div className="d-flex align-items-center">
                        <StudentHatIcon className="w-100" width={80} height={80} />
                        <p className="ml-3 font-small">
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
                            <h2 className="h1 font-weight-semibold">Як?</h2>
                        </Animated.Node>
                    </Animated>
                    <h3 className="regular font-weight-bold mb-1">
                        За допомогою англійської <br /> та soft skills!
                    </h3>
                    <Animated className="mb-4">
                        <Animated.TrailText
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
                        <LazyLoad height={240} className="mr-2">
                            <iframe
                                className="w-100 rounded-xl border border-width-2 p-1"
                                title="Команда авторів курсу"
                                height="240"
                                src="https://www.youtube.com/embed/Tw0KU99vdB0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullFcreen
                            ></iframe>
                        </LazyLoad>
                    </div>
                    <Animated>
                        <Animated.TrailText
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
                    <h2 className="h1 mb-3">Чому ти навчишся?</h2>
                    <ul>
                        <li className="row">
                            <div className="col-8 pr-2">
                                <span className="h3 font-weight-bold mb-1">01</span>
                                <h3 className="h2 font-weight-bold text-alternative-secondary mb-2">
                                    How to ask and answer
                                </h3>
                                <h4 className="font-small">
                                    Ти дізнаєшся кілька практичних порад, які допоможуть тобі
                                    підготуватись до співбесіди англійською. А ще ми розглянемо
                                    найпоширеніші запитання на співбесідах в міжнародні компанії і
                                    як на них краще давати відповідь.
                                </h4>
                                <br />
                            </div>
                            <Animated className="col-4 pl-2" isOnce getConfig={setMoveBack}>
                                <Animated.Node>
                                    <img
                                        alt="Marta's love emoji"
                                        src={loveEyesEmoji}
                                        className="image"
                                    />
                                </Animated.Node>
                            </Animated>
                        </li>
                        <li className="row mb-3">
                            <div className="col-8 pr-2">
                                <span className="h3 font-weight-bold mb-1">02</span>
                                <h3 className="h2 font-weight-bold text-alternative-secondary mb-2">
                                    English interview
                                </h3>
                                <h4 className="font-small">
                                    Навіщо вміти ставити питання правильно, якщо і так зрозуміло, що
                                    я кажу? Це потрібно для того, щоб ефективно побудувати
                                    комунікацію з клієнтом або ненароком не образити його
                                    неформальним виразом. А ще, так ти зможеш
                                </h4>
                                <br />
                            </div>
                            <Animated className="col-4 pl-2" isOnce getConfig={setMoveBack}>
                                <Animated.Node>
                                    <img
                                        alt="Marta's emoji"
                                        src={blinkEyeEmoji}
                                        className="image"
                                    />
                                </Animated.Node>
                            </Animated>
                        </li>
                        <li className="row mb-3">
                            <div className="col-8 pr-2">
                                <span className="h3 font-weight-bold mb-1">03</span>
                                <h3 className="h2 font-weight-bold text-alternative-secondary mb-2">
                                    Small talks
                                </h3>
                                <h4 className="font-small">
                                    Ти дізнаєшся, що таке small talk і навіщо він потрібен. Тут буде
                                    декілька загальних тем для коротких розмов, аби ти не губився,
                                    коли залишишся наодинці з клієнтом. А ще ми розповімо, про що
                                    краще не говорити з англомовним замовником.
                                </h4>
                                <br />
                            </div>
                            <Animated className="col-4 pl-2" isOnce getConfig={setMoveBack}>
                                <Animated.Node>
                                    <img alt="Marta's emoji" src={fistEmoji} className="image" />
                                </Animated.Node>
                            </Animated>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={cx(styles.alternativeBlackBack, "py-4")}>
                <div className="text-white">
                    <AuthorsScrollablePanel />
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
                <div>
                    {feedbacks.map(({ name, avatar, instUsername, alt, description }) => (
                        <Animated isOnce getConfig={setFeedbackConfig}>
                            <Animated.Node>
                                <div className={cx(styles.card, "mb-3")}>
                                    <div className="row mb-4">
                                        <div className="col-3">
                                            <img
                                                src={avatar}
                                                height={56}
                                                width={56}
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
            <section className="container mt-4 mb-5">
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
                )}
                href={BOT_LINK}
            >
                <div className={styles.content}>Приєднатися</div>
            </Button>
        </article>
    );
};

export default SoftSkillsMarathonPage;
