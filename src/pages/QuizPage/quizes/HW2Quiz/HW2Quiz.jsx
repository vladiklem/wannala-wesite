import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { localStorageService } from "services/localStorageService";

import { sendHomework } from "store/users/actions";

import questions from "./HW2Quiz.constants";
import { QuizForm } from "../../components/QuizForm/QuizForm";
import { ThankYouSlide } from "./ThankYouSlide/ThankYouSlide";

const name = localStorageService.getItem("user").firstName;

const HW2Quiz = ({ slug }) => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(null);

    const onSubmit = useCallback(
        (data) => {
            const hw = name ? { ...data, firstName: name, slug } : { ...data, slug };
            dispatch(sendHomework(hw));
        },
        [dispatch, slug],
    );

    const onNext = useCallback((fields) => {
        !name &&
            fields.firstName &&
            localStorageService.insertObjectField("user", { firstName: fields.firstName });
        fields.ans5 && setTheme(fields.ans5);
    }, []);

    return (
        <div className="container mt-4">
            <QuizForm
                stepList={questions}
                onSubmit={onSubmit}
                onNext={onNext}
                lastSlideNode={<ThankYouSlide theme={theme} />}
            />
        </div>
    );
};

export default HW2Quiz;
