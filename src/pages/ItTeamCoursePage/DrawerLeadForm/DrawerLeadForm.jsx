import React, { lazy, useMemo } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import { selectLeadFormState } from "store/leads/selectors";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";

const LeadForm = lazy(() => import("forms/LeadForm/LeadForm"));
const Drawer = lazy(() => import("components/Drawer/Drawer"));

const DrawerLeadForm = ({ isPortable, isOpen, onToggle, strings }) => {
    const { isLoading, isSuccess } = useSelector(selectLeadFormState);

    const isCoverVisible = useMemo(() => isLoading || isSuccess, [isLoading, isSuccess]);

    return (
        <Drawer
            width={isPortable ? "95%" : "80%"}
            isOpen={isOpen}
            contentClassName="d-flex justify-content-center"
            className={cx(
                { "px-3": isCoverVisible, "px-4": !isCoverVisible },
                "transition-250 py-3",
            )}
            components={{
                Header: () => (
                    <div
                        className="d-flex align-items-center px-2_5 py-2 cursor-pointer"
                        onClick={onToggle}
                    >
                        <ArrowRightLong height={24} width={24} className="mr-3 rotate-180" />
                        <h2 className="h2 font-weight-normal">
                            {strings.itRegistrationSection.drawer.heading}
                        </h2>
                    </div>
                ),
            }}
            onClose={onToggle}
        >
            <LeadForm
                className="text-gray-900 p-0"
                description={strings.itRegistrationSection.form.description}
                afterWord={strings.itRegistrationSection.form.afterWord}
                styleType="drawer"
                // redirectUrl="https://t.me/eng_wannablab_bot?start=ZGw6NDAzMzc"
                type="it"
            />
        </Drawer>
    );
};

export default DrawerLeadForm;
