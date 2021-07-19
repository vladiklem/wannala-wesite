import React, { useCallback, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";

import { modalNamesEnum } from "constants/enums";
import { toggleModal } from "store/modals/actions";

const LoginForm = lazy(() => import("./LoginForm/LoginForm"));

const ModalsContainer = () => {
    const dispatch = useDispatch();
    const { name, modalProps = {}, isOpen } = useSelector((store) => store.modals);

    const toggle = useCallback(() => dispatch(toggleModal(name)), [dispatch, name]);

    switch (name) {
        case modalNamesEnum.LOGIN:
            return <LoginForm isOpen={isOpen} toggle={toggle} {...modalProps} />;
        default:
            return null;
    }
};

export default ModalsContainer;
