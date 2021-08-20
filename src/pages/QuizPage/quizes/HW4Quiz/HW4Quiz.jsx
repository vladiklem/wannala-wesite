import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { localStorageService } from "services/localStorageService";

import { sendHomework } from "store/users/actions";

import questions from "./HW4Quiz.constants";
import { QuizForm } from "../../components/QuizForm/QuizForm";
import { ThankYouSlide } from "./ThankYouSlide/ThankYouSlide";

const name = localStorageService.getItem("user").firstName;

const HW4Quiz = ({ slug }) => {
    const dispatch = useDispatch();

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
    }, []);

    return (
        <div className="container mt-4">
            <QuizForm
                stepList={questions}
                onSubmit={onSubmit}
                onNext={onNext}
                lastSlideNode={<ThankYouSlide />}
            />
        </div>
    );
};

export default HW4Quiz;
