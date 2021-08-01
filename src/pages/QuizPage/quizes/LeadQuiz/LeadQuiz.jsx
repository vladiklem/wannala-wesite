import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fireAnalyticsEvent } from "analytics";

import events from "analytics/events";
import { addLead } from "store/leads/actions";

import questions from "./LeadQuiz.constants";
import { QuizForm } from "../../components/QuizForm/QuizForm";
import { ThankYouSlide } from "./ThankYouSlide/ThankYouSlide";

const QuizPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        fireAnalyticsEvent(events.LEAD_QUIZ_VISITED);
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

    return (
        <div className="container mt-4">
            <QuizForm
                stepList={questions}
                onFinish={toHome}
                onSubmit={onSubmit}
                lastSlideNode={<ThankYouSlide />}
            />
        </div>
    );
};

export default QuizPage;
