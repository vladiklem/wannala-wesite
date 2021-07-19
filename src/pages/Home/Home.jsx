import React, { useCallback, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";

import { mediaBreakpointsEnum } from "constants/enums";

import { GreetingsSection } from "./GreetingsSection/GreetingsSection";
import { InteractionSections } from "./InteractionSections/InteractionSections";
import { FeedbackSection } from "./FeedbackSection/FeedbackSection";
import { fireAnalyticsEvent } from "analytics";
import events from "analytics/events";
import { ValuesSection } from "./ValuesSection/ValuesSection";

const LeadForm = lazy(() => import("components/styled/LeadForm/LeadForm"));

const Home = () => {
    const history = useHistory();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const onOrderClick = useCallback(() => {
        document.getElementById("wannablab-lead-form").scrollIntoView();

        fireAnalyticsEvent(events.CALL_LATER);
        setTimeout(() => document.getElementById("name").focus(), 750);
    }, []);

    // const onGroupSelect = useCallback(
    //     (item) => {
    //         setDescription(`Ви записуєтесь в группу \n\n "${item.title}" 🎉 `);
    //         onOrderClick();
    //     },
    //     [setDescription, onOrderClick],
    // );
    // const onMentorSelect = useCallback(
    //     ({ name }) => {
    //         setDescription(`Ви записуєтесь на приватні заняття до \n\n "${name}" 🎉 `);
    //         fireAnalyticsEvent(events.CALL_LATER);
    //         onOrderClick();
    //     },
    //     [setDescription, onOrderClick],
    // );

    const toCourse = useCallback(
        (slug) => {
            history.push(`/course/${slug}`);
            fireAnalyticsEvent(events.READ_MORE_ABOUT_COURSE, slug);
        },
        [history],
    );

    const toMentor = useCallback(
        (slug) => {
            history.push(`/mentor/${slug}`);
            fireAnalyticsEvent(events.READ_MORE_ABOUT_TEACHER, slug);
        },
        [history],
    );

    return (
        <article className="mt-4">
            <h1 className="hidden-element">
                Навчаємо розмовній англійській онлайн для професійних цілей. Професійна англійська,
                англійська для IT, практика, speaking club. Учить английский, разговорный
                английский, практика английского языка.
            </h1>
            <GreetingsSection
                onOrderClick={onOrderClick}
                isPortable={isPortable}
                toCourse={toCourse}
                className="mb-4"
            />
            <ValuesSection className="mb-5 pt-4" isPortable={isPortable} />
            <InteractionSections
                toMentor={toMentor}
                // onMentorSelect={onMentorSelect}
                // onGroupSelect={onGroupSelect}
                isPortable={isPortable}
            />
            <FeedbackSection isPortable={isPortable} />
            <section id="wannablab-lead-form" className="full-screen-height bg-secondary-new-70">
                <div className="container d-flex flex-column align-items-center">
                    <h2 className="h2 mt-5 mb-5 text-center text-white text-highlighted">
                        Вже <strong>44 людини</strong> вивчили англійську з нами
                    </h2>
                    <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <LeadForm description="Залиште свої контакти і ми самі перетелефонуємо 😃" />
                    </div>
                </div>
            </section>
        </article>
    );
};

export default Home;
