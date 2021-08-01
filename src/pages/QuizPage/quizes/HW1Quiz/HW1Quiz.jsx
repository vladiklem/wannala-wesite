import React, { useCallback, useState } from "react";

import { localStorageService } from "services/localStorageService";

import questions from "./HW1Quiz.constants";
import { QuizForm } from "../../components/QuizForm/QuizForm";
import { ThankYouSlide } from "./ThankYouSlide/ThankYouSlide";

const name = localStorageService.getItem("user").firstName;

const HW1Quiz = () => {
    const [theme, setTheme] = useState(null);

    const onSubmit = useCallback((data) => {
        console.log(name ? { ...data, firstName: name } : data);
    }, []);

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

export default HW1Quiz;
