import React, { useCallback, useEffect, lazy } from "react";
import { useForm, Controller } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Input, Button, CustomSelect } from "components/index";
import { objWithId } from "utils/converters";
import { initialGroup } from "constants/initialValues";
import { mentorOptions } from "constants/options";
import { formModeEnum, formSubmitButtonEnum } from "constants/enums";

const Select = lazy(() => import("components/Select/Select"));

export const GroupForm = ({
    mode = formModeEnum.CREATE,
    initialValue = initialGroup,
    userOptions,
    isOpen,
    toggle,
    onSubmit,
    onDelete,
}) => {
    const { control, reset, register, handleSubmit, errors } = useForm({
        defaultValues: initialValue,
    });

    const submitMiddleware = useCallback(
        (data) => {
            onSubmit(objWithId(data, initialValue.id));
            toggle();
        },
        [toggle, onSubmit, initialValue],
    );

    const handleDelete = useCallback(() => {
        onDelete(initialValue.id);
        toggle();
    }, [toggle, initialValue, onDelete]);

    useEffect(() => {
        reset(initialValue);
    }, [reset, initialValue]);

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Новий івент</ModalHeader>
            <form onSubmit={handleSubmit(submitMiddleware)}>
                <ModalBody>
                    <Input
                        label="Назва"
                        name="title"
                        ref={register({
                            required: true,
                            minLength: 3,
                        })}
                        errorMessage={errors.title && "Невалідна назва"}
                    />
                    <CustomSelect
                        label="Ментор"
                        name="mentor"
                        options={mentorOptions}
                        ref={register}
                    />
                    <Controller
                        control={control}
                        name="members"
                        render={({ onChange, onBlur, value, name, ref }) => (
                            <Select
                                className="mb-2"
                                isMulti={true}
                                options={userOptions}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                name={name}
                                ref={ref}
                                closeMenuOnSelect={false}
                                placeholder="Блабери..."
                            />
                        )}
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
                    {mode === formModeEnum.EDIT && (
                        <Button className="mr-3" onClick={handleDelete}>
                            Видалити
                        </Button>
                    )}
                    <Button type="submit">{formSubmitButtonEnum[mode]}</Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};
