import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import cx from "classnames";
import { fireAnalyticsEvent } from "analytics";

import { Button, buttonColorEnum, ProgressBar } from "components/index";
import { Check } from "components/Icons/Check";
import { scrollToTop } from "helpers/general";
import events from "analytics/events";
import { questionsList } from "constants/lists";
import { telNumber } from "constants/social";
import { addLead } from "store/leads/actions";

import { TestItem } from "./TestItem/TestItem";
import styles from "./TestPage.module.scss";

const elementaryLimit = 10;
const preIntermediateLimit = 18;
const intermediateLimit = 28;

const testResults = {
    "listening-1": {
        answer: "no1",
        hit: 1,
    },
    "grammer-1": {
        answer: "go",
        hit: 1,
    },
    "grammer-2": {
        answer: "from",
        hit: 1,
    },
    "reading-1": {
        answer: "answer-2-1",
        hit: 1,
    },
    "grammer-3": {
        answer: "noisier",
        hit: 2,
    },
    "grammer-4": {
        answer: "is-wearing",
        hit: 2,
    },
    "listening-2": {
        answer: "no2",
        hit: 3,
    },
    "grammer-5": {
        answer: "some",
        hit: 3,
    },
    "grammer-6": {
        answer: "would-have-sent",
        hit: 3,
    },
    "reading-2": {
        answer: "answer-3-2",
        hit: 3,
    },
    "grammer-7": {
        answer: "always-are-criticizing",
        hit: 3,
    },
    "listening-3": {
        answer: "arrogant",
        hit: 4,
    },
    "grammer-8": {
        answer: "unless",
        hit: 4,
    },
    "reading-3": {
        answer: "answer-2-3",
        hit: 4,
    },
    "grammer-9": {
        answer: "admitted-stealing",
        hit: 4,
    },
    "grammer-10": {
        answer: "is-just-being-made",
        hit: 4,
    },
};

const TestPage = () => {
    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const [test, setTest] = useState(0);
    const [level, setLevel] = useState("");
    const [resultCounter, setResultCounter] = useState(0);

    useEffect(() => {
        fireAnalyticsEvent(events.JOIN_LEVEL_TEST);
    }, []);

    const testItem = useMemo(() => questionsList[test] || {}, [test]);

    const onSubmit = useCallback(
        (data) => {
            dispatch(addLead({ ...data, level, status: "new-level-test" }));
        },
        [level, dispatch],
    );

    const calculateLevel = useCallback(() => {
        if (resultCounter >= intermediateLimit) {
            setLevel("Upper Intermediate");
        } else if (resultCounter >= preIntermediateLimit) {
            setLevel("Intermediate");
        } else if (resultCounter >= elementaryLimit) {
            setLevel("Pre Inermediate");
        } else {
            setLevel("Elementary");
        }
    }, [resultCounter]);

    const isLastQuestion = useMemo(() => test + 1 === questionsList.length, [test]);

    const onNext = useCallback(
        (e) => {
            const answer = e.target.value;

            !isLastQuestion &&
                answer === testResults[e.target.name].answer &&
                setResultCounter(resultCounter + testResults[e.target.name].hit);

            test + 2 === questionsList.length && calculateLevel();

            e.target.type === "button" && e.preventDefault();
            setTimeout(() => {
                isLastQuestion && handleSubmit(onSubmit)();
                setTest((test) => test + 1);
                scrollToTop();
            }, 350);
        },
        [
            setTest,
            test,
            handleSubmit,
            onSubmit,
            resultCounter,
            setResultCounter,
            calculateLevel,
            isLastQuestion,
        ],
    );

    const onPrev = useCallback(() => {
        setTest((test) => test - 1);
    }, []);

    const buttonOnClick = useMemo(() => (test < questionsList.length - 1 ? onPrev : onNext), [
        onNext,
        onPrev,
        test,
    ]);

    useEffect(() => {
        testItem.focus && setTimeout(() => document.getElementById(testItem.focus).focus(), 100);
    }, [testItem]);

    return (
        <div className={cx(styles.container, "container pt-4 mb-4")}>
            <form
                className={cx(
                    styles.form,
                    "d-flex flex-column justify-content-between border border-transparent rounded-xl p-4 bg-white-new",
                )}
            >
                <Button
                    color={buttonColorEnum.UNSTYLED}
                    onClick={onPrev}
                    className="align-self-start pr-2 mb-2"
                    disabled={test === 0}
                >
                    👈 Назад
                </Button>
                <div className="flex-grow-1">
                    {testItem.audio && (
                        <div className="mb-3">
                            <h1 className="regular mb-2">{testItem.audio.description}</h1>
                            <audio preload="auto" controls>
                                <source src={testItem.audio.source} />
                            </audio>
                        </div>
                    )}
                    {testItem.text && <p className="mb-2">{testItem.text}</p>}
                    {testItem.description && <h2 className="h3 mb-3">{testItem.description}</h2>}
                    <div className="mb-3">
                        {questionsList.map(({ component, commonProps = {}, ...item }, index) => (
                            <TestItem
                                {...item}
                                commonProps={commonProps}
                                component={component}
                                isHidden={test !== index}
                                register={register}
                                onClick={item.type === "radio" ? onNext : undefined}
                                key={item.name}
                            />
                        ))}
                        <div
                            className={cx("transition-250", {
                                "hidden-element": questionsList.length !== test,
                            })}
                        >
                            <h2 className="h3 mb-3">Дякуємо 😊</h2>
                            <h3 className="regular">
                                Ми проаналізуємо відповіді та повідомимо вам результат. Наш менеджер
                                Марина зв'яжеться з вами найближчим часом з цього номеру <br />
                                <a href={`tel:${telNumber.short}`}>{telNumber.long}</a> 😉
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        block
                        className="d-flex align-items-center justify-content-center bg-primary-new rounded-lg font-weight-semibold"
                        size="lg"
                        onClick={buttonOnClick}
                        disabled={test === 0}
                        type="button"
                    >
                        {test === questionsList.length - 1 && "Відправити"}
                        {test === questionsList.length - 1 && (
                            <Check className="ml-2" fill="#fff" />
                        )}
                        {test < questionsList.length - 1 && "👈 Назад"}
                        {test === questionsList.length && "На головну 👀"}
                    </Button>
                    <ProgressBar current={test} goal={questionsList.length} className="mt-3" />
                </div>
            </form>
        </div>
    );
};

export default TestPage;
