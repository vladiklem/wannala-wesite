import React, { useCallback, useEffect, useState, lazy } from "react";
import { useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { Input, Button, CustomSelect } from "components/index";
import { objWithId, groupsToSelectOptions } from "utils/converters";
import { initialEvent } from "constants/initialValues";
import { eventTypeOptions, mentorOptions } from "constants/options";
import { formModeEnum, formSubmitButtonEnum, eventTypesEnum } from "constants/enums";

const Select = lazy(() => import("components/Select/Select"));

export const EventForm = ({
    mode = formModeEnum.CREATE,
    initialValue = initialEvent,
    userOptions,
    isOpen,
    toggle,
    onSubmit,
    onDelete
}) => {
    const [type, setType] = useState(eventTypesEnum.GROUP_LESSON);
    const { control, reset, register, handleSubmit, errors } = useForm({
        defaultValues: initialValue,
    });
    const groupOptions = groupsToSelectOptions(useSelector((state) => state.groups.data));

    const submitMiddleware = useCallback(
        (data) => {
            onSubmit(objWithId(data, initialValue.id));
            toggle();
        },
        [toggle, onSubmit, initialValue],
    );

    const onTypeChange = useCallback((e) => setType(e.target.value), [setType]);

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
                            maxLength: 20,
                        })}
                        errorMessage={errors.title && "Невалідна назва"}
                    />
                    <CustomSelect
                        label="Тип івенту"
                        name="type"
                        options={eventTypeOptions}
                        ref={register}
                        onChange={onTypeChange}
                    />
                    <Input
                        label="Початок"
                        name="startDate"
                        type="datetime-local"
                        ref={register({ required: true })}
                        errorMessage={errors.startDate && "Дата початку обов'язкова"}
                    />
                    <Input
                        label="Кінець"
                        name="endDate"
                        type="datetime-local"
                        ref={register({ required: true })}
                        errorMessage={errors.endDate && "Дата завершення обов'язкова"}
                    />
                    {type === eventTypesEnum.PRIVATE_LESSON && (
                        <CustomSelect
                            label="Ментор"
                            name="mentor"
                            options={mentorOptions}
                            ref={register}
                        />
                    )}
                    {type === eventTypesEnum.GROUP_LESSON && (
                        <CustomSelect
                            label="Група"
                            name="groupId"
                            options={groupOptions}
                            ref={register}
                        />
                    )}
                    {(type === eventTypesEnum.WATCH || type === eventTypesEnum.WEBINAR) && (
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
                    )}
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
