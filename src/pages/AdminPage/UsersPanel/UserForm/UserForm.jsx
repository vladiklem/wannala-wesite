import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

import { Input, CustomSelect } from "components/";
import { objWithId } from "utils/converters";
import { initialUser } from "constants/initialValues";
import { formModeEnum, formSubmitButtonEnum } from "constants/enums";
import { levelOptions, sourceOptions } from "constants/options";

import styles from "./UserForm.module.scss";

export const UserForm = ({
    mode = formModeEnum.CREATE,
    initialValue = initialUser,
    isOpen,
    toggle,
    onSubmit,
}) => {
    const { reset, register, handleSubmit, errors } = useForm({ defaultValues: initialValue });

    const submitMiddleware = useCallback(
        (data) => {
            onSubmit(objWithId(data, initialValue.id));
            toggle();
        },
        [toggle, onSubmit, initialValue],
    );

    useEffect(() => {
        reset(initialValue);
    }, [reset, initialValue]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>Новий блабер</ModalHeader>
            <form onSubmit={handleSubmit(submitMiddleware)}>
                <ModalBody className={styles.modalBody}>
                    <Input
                        label="Повне ім'я"
                        name="fullName"
                        id="fullName"
                        ref={register({
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        })}
                        errorMessage={errors.fullName && "Невалідне ім'я"}
                    />
                    <Input
                        label="Нік"
                        name="username"
                        id="username"
                        ref={register({
                            required: true,
                            minLength: 3,
                            maxLength: 20,
                        })}
                        errorMessage={errors.username && "Невалідний нік"}
                    />
                    <Input
                        label="E-мило"
                        name="email"
                        id="email"
                        ref={register({
                            pattern: /(|^)[\w\d._%+-]+@(?:[\w\d-]+\.)+(\w{2,})(|$)/i,
                        })}
                        errorMessage={errors.email && "Невалідне Е-мило"}
                    />
                    <Input
                        label="Номер телефону"
                        name="phoneNumber"
                        id="phoneNumber"
                        ref={register({
                            pattern: /((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))/,
                        })}
                        errorMessage={errors.phoneNumber && "Невалідний номер телефону"}
                    />
                    <CustomSelect
                        name="engLevel"
                        ref={register}
                        options={levelOptions.map((item) => ({ label: item, value: item }))}
                        label="Рівень наразі"
                    />
                    <CustomSelect
                        name="source"
                        ref={register}
                        options={sourceOptions}
                        label="Звідки прийшов"
                    />
                    <Input label="Дата наступної оплати" name="chargeDate" type="date" />
                    <Input label="Сума до сплати" name="chargeSum" type="number" />
                    <Input
                        label="Опис"
                        name="description"
                        id="description"
                        ref={register({ maxLength: 500 })}
                        tag="textarea"
                        errorMessage={errors.description && "Максимальна довжина - 500 символів"}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button type="submit">{formSubmitButtonEnum[mode]}</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};
