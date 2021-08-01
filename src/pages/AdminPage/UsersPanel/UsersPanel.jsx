import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "components/";
import { addUser, deleteUser, editUser, addPayment } from "store/users/actions";
import { initialUser } from "constants/initialValues";
import { formModeEnum } from "constants/enums";

import { UsersList } from "./UsersList/UsersList";
import { UserForm } from "./UserForm/UserForm";
import { PaymentForm } from "./PaymentForm/PaymentForm";

const submitActions = {
    CREATE: addUser,
    EDIT: editUser,
};

export const UsersPanel = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.data);

    const [isUserFormOpen, setIsUserFormOpen] = useState(false);
    const [formMode, setFormMode] = useState(formModeEnum.CREATE);
    const [userFormInitialValue, setFormInitialValue] = useState(initialUser);
    const [userId, setUserId] = useState(null);
    const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false);

    const toggleForm = useCallback(() => setIsUserFormOpen((isOpen) => !isOpen), [
        setIsUserFormOpen,
    ]);
    const onAdd = useCallback(() => {
        setFormMode(formModeEnum.CREATE);
        setFormInitialValue(initialUser);
        toggleForm();
    }, [toggleForm]);
    const onFormSumit = useCallback((data) => dispatch(submitActions[formMode](data)), [
        formMode,
        dispatch,
    ]);
    const onDelete = useCallback((id) => dispatch(deleteUser(id)), [dispatch]);
    const onEdit = useCallback(
        (user) => {
            setFormMode(formModeEnum.EDIT);
            setFormInitialValue(user);
            toggleForm();
        },
        [toggleForm],
    );

    const togglePaymentForm = useCallback(() => setIsPaymentFormOpen((isOpen) => !isOpen), []);

    const onPay = useCallback(
        (id) => {
            setUserId(id);
            togglePaymentForm();
        },
        [togglePaymentForm],
    );

    const onPaymentSubmit = useCallback(
        (payment) => {
            dispatch(addPayment({ userId, ...payment }));
        },
        [dispatch, userId],
    );

    return (
        <div className="container mt-3">
            <Button className="mb-2" onClick={onAdd}>
                add user
            </Button>
            <UserForm
                mode={formMode}
                isOpen={isUserFormOpen}
                toggle={toggleForm}
                onSubmit={onFormSumit}
                initialValue={userFormInitialValue}
            />
            <PaymentForm
                userId={userId}
                isOpen={isPaymentFormOpen}
                toggle={togglePaymentForm}
                onSubmit={onPaymentSubmit}
            />
            <UsersList users={users} onDelete={onDelete} onEdit={onEdit} onPay={onPay} />
        </div>
    );
};
