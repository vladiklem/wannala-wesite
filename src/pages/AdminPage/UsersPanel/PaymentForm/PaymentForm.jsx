import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Input, Button } from "components/";
import { initialPayment } from "constants/initialValues";

export const PaymentForm = ({ userId, isOpen, toggle, onSubmit }) => {
    const { reset, register, handleSubmit, errors } = useForm({
        defaultValues: {
            ...initialPayment,
            userId,
        },
    });

    const submitMiddleware = useCallback(
        (data) => {
            onSubmit(data);
            toggle();
        },
        [toggle, onSubmit],
    );

    useEffect(() => {
        reset(initialPayment);
    }, [reset, isOpen]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Новий івент</ModalHeader>
            <form onSubmit={handleSubmit(submitMiddleware)}>
                <ModalBody>
                    <Input
                        label="Сума"
                        name="sum"
                        type="number"
                        ref={register({
                            required: true,
                            min: 1,
                        })}
                        errorMessage={errors.title && "Невалідна сума"}
                    />
                    <Input
                        label="Дата"
                        name="date"
                        type="datetime-local"
                        ref={register({ required: true })}
                        errorMessage={errors.startDate && "Дата платежу обов'язкова"}
                    />
                    <Input
                        label="Опис"
                        name="description"
                        ref={register({ maxLength: 500 })}
                        tag="textarea"
                        errorMessage={errors.description && "Максимальна довжина - 500 символів"}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">Додати</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};
