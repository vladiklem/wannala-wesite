import React, { lazy } from "react";

const FeedbackScrollable = lazy(() =>
    import("components/styled/FeedbackScrollable/FeedbackScrollable"),
);

export const FeedbackSection = () => {
    return (
        <section id="wannablab-feedback" className="mb-4 pt-4 container">
            <div>
                <FeedbackScrollable
                    components={{
                        Header: (
                            <h2 className="h2-responsive font-weight-bold">Відгуки студентів</h2>
                        ),
                    }}
                />
            </div>
        </section>
    );
};
