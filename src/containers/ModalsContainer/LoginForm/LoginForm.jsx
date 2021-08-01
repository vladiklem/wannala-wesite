import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal, ModalFooter } from "reactstrap";

import { Input, Button } from "components/";
import { appAdminAuth } from "store/app/actions";
import { adminPasswordCheck } from "utils/password";

const LoginForm = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { handleSubmit, register } = useForm();

    const toAdmin = useCallback(
        (data) => {
            dispatch(appAdminAuth(data));
            history.push("/admin/dashboard");
            toggle();
        },
        [dispatch, history, toggle],
    );

    const onSubmit = useCallback(
        (data) => {
            const admin = adminPasswordCheck(data);
            admin && toAdmin(admin);
        },
        [toAdmin],
    );

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="px-5 py-4">
                    <Input name="login" label="Логін" ref={register({ required: true })} />
                    <Input
                        name="password"
                        label="Пароль"
                        type="password"
                        ref={register({ required: true })}
                    />
                </div>
                <ModalFooter>
                    <Button type="submit">Завалитись в адмінку</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};

export default LoginForm;
