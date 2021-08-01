import React, { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { toggleHeader } from "store/app/actions";

import { QuizTypes } from "./QuizPage.constants";

const LeadQuiz = lazy(() => import("./quizes/LeadQuiz/LeadQuiz"));
const HomeWorkOne = lazy(() => import("./quizes/HW1Quiz/HW1Quiz"));

const QuizPage = () => {
    const dispatch = useDispatch();
    const { slug = QuizTypes.LEAD } = useParams();

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    switch (slug) {
        case QuizTypes.HW1:
            return <HomeWorkOne />;
        default:
            return <LeadQuiz />;
    }
};

export default QuizPage;
