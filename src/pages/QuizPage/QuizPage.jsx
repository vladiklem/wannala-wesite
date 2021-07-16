import React, { useCallback, useEffect, useMemo } from "react";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fireAnalyticsEvent } from "analytics";
import events from "analytics/events";

import { addLead } from "store/leads/actions";
import { telNumber } from "constants/social";
import { quizQuestionsObj } from "constants/lists";

import { QuizForm } from "./QuizForm/QuizForm";
import styles from "./QuizPage.module.scss";

const QuizPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { slug } = useParams();

    useEffect(() => {
        fireAnalyticsEvent(events.JOIN_QUIZ);
    }, []);

    const onSubmit = useCallback(
        (data) => {
            dispatch(addLead({ ...data, status: "new-quiz" }));
        },
        [dispatch],
    );

    const toHome = useCallback(() => {
        history.push(`/`);
    }, [history]);

    const stepList = useMemo(() => quizQuestionsObj[slug], [slug]);

    return (
        <div className={cx(styles.container, "container mt-4")}>
            <QuizForm
                stepList={stepList}
                onFinish={toHome}
                onSubmit={onSubmit}
                lastSlideNode={
                    <>
                        <h2 className="h3 mb-3">Дякуємо 😊</h2>
                        <h3 className="regular">
                            Наш кастомер ловер Марина заретелефонує тобі найближчим часом, або ти
                            можеш зробити це сам і отримати{" "}
                            <span className="font-weight-semibold">знижку 10%</span> <br /> Тисни{" "}
                            <a href={`tel:${telNumber.short}`}>{telNumber.long}</a> 😉
                        </h3>
                    </>
                }
            />
        </div>
    );
};

export default QuizPage;
