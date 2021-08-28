import React, { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import { toggleHeader } from "store/app/actions";

import { QuizTypes } from "./QuizPage.constants";

const LeadQuiz = lazy(() => import("./quizes/LeadQuiz/LeadQuiz"));
const HomeWorkOne = lazy(() => import("./quizes/HW1Quiz/HW1Quiz"));
const HomeWorkTwo = lazy(() => import("./quizes/HW2Quiz/HW2Quiz"));
const HomeWorkThree = lazy(() => import("./quizes/HW3Quiz/HW3Quiz"));
const HomeWorkFour = lazy(() => import("./quizes/HW4Quiz/HW4Quiz"));
const MarathonOne = lazy(() => import("./quizes/MarathonHW1/MarathonHW1"));

const QuizPage = () => {
    const dispatch = useDispatch();
    const { slug = QuizTypes.LEAD } = useParams();

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    switch (slug) {
        case QuizTypes.HW1:
            return <HomeWorkOne />;
        case QuizTypes.HW2:
            return <HomeWorkTwo slug={slug} />;
        case QuizTypes.HW3:
            return <HomeWorkThree slug={slug} />;
        case QuizTypes.HW4:
            return <HomeWorkFour slug={slug} />;
        case QuizTypes.MHW1:
            return <MarathonOne slug={slug} />;
        default:
            return <LeadQuiz />;
    }
};

export default QuizPage;
