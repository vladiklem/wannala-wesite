import React, { lazy } from "react";

const LeadForm = lazy(() => import("forms/LeadForm/LeadForm"));

const LeadSection = ({ isPortable, strings, isHidden }) => (
    <section
        id="wannablab-it-course-registration"
        className="py-5 mb-5 full-height container d-flex flex-column align-items-center"
        name="itRegistrationSection"
    >
        <h2 className="h0 mb-4">{strings.itRegistrationSection.h2}</h2>
        <div
            id="wannablab-it-course-registration-inner-container"
            className="d-flex align-items-center justify-content-center flex-column"
        >
            <div className={isPortable ? "col-8" : "col-4"}>
                <img
                    className="image"
                    src={strings.itRegistrationSection.img.src}
                    alt={strings.itRegistrationSection.img.alt}
                />
            </div>
            {!isHidden && (
                <LeadForm
                    className="text-gray-900"
                    description={strings.itRegistrationSection.form.description}
                    afterWord={strings.itRegistrationSection.form.afterWord}
                    type="it"
                />
            )}
        </div>
    </section>
);

export default LeadSection;
