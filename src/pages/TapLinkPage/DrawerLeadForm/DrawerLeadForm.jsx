import React, { lazy, useMemo } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

import { selectLeadFormState } from "store/leads/selectors";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";
import leraAvatar from "assets/images/lera_it_avatar.jpeg";
import vladAvatar from "assets/images/vlad_it_avatar.jpeg";

const LeadForm = lazy(() => import("forms/LeadForm/LeadForm"));
const Drawer = lazy(() => import("components/Drawer/Drawer"));

const DrawerLeadForm = ({ isPortable, isOpen, onToggle }) => {
    const { isLoading, isSuccess } = useSelector(selectLeadFormState);

    const isCoverVisible = useMemo(() => isLoading || isSuccess, [isLoading, isSuccess]);

    return (
        <Drawer
            width={isPortable ? "95%" : "80%"}
            isOpen={isOpen}
            contentClassName="d-flex flex-column"
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
                        <h2 className="h2 font-weight-normal">назад</h2>
                    </div>
                ),
            }}
            onClose={onToggle}
        >
            <div className="d-flex align-items-center justify-content-center mb-4">
                <img className="rounded-circle shadow-medium mr-4" height={100} width={100} src={leraAvatar} alt="" />
                <img className="rounded-circle shadow-medium" height={100} width={100} src={vladAvatar} alt="" />
            </div>
            <LeadForm
                className="text-gray-900 p-0"
                description="Залиш свій контакт і Лєра або Влад зателефонують тобі найближчим часом 😃"
                afterWord="Дякуємо, що вирішили займатися з нами ❤️"
                styleType="drawer"
                type="it"
            />
        </Drawer>
    );
};

export default DrawerLeadForm;
