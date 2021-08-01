import React, { useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "components/";
import { addGroup, deleteGroup, updateGroup } from "store/groups/actions";
import { usersToSelectOptions } from "utils/converters";
import { initialGroup } from "constants/initialValues";
import { formModeEnum } from "constants/enums";

import { GroupsList } from "./GroupsList/GroupsList";
import { GroupForm } from "./GroupForm/GroupForm";

const submitActions = {
    CREATE: addGroup,
    EDIT: updateGroup,
};

export const GroupsPanel = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.users.data);
    const groups = useSelector((store) => store.groups.data);

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formMode, setFormMode] = useState(formModeEnum.CREATE);
    const [formInitialValue, setFormInitialValue] = useState(initialGroup);

    const userOptions = useMemo(() => usersToSelectOptions(users), [users]);

    const toggleForm = useCallback(() => setIsFormOpen((isOpen) => !isOpen), [setIsFormOpen]);

    const onAdd = useCallback(() => {
        setFormMode(formModeEnum.CREATE);
        setFormInitialValue(initialGroup);
        toggleForm();
    }, [toggleForm]);

    const onFormSubmit = useCallback((data) => dispatch(submitActions[formMode](data)), [
        formMode,
        dispatch,
    ]);

    const onDelete = useCallback((id) => dispatch(deleteGroup(id)), [dispatch]);

    const onEdit = useCallback(
        (group) => {
            setFormMode(formModeEnum.EDIT);
            setFormInitialValue(group);
            toggleForm();
        },
        [toggleForm],
    );

    return (
        <div className="container mt-4">
            <Button className="mb-3" onClick={onAdd}>
                add group
            </Button>
            <GroupsList onEdit={onEdit} groups={groups} onDelete={onDelete} />
            <GroupForm
                isOpen={isFormOpen}
                toggle={toggleForm}
                mode={formMode}
                initialValue={formInitialValue}
                onSubmit={onFormSubmit}
                userOptions={userOptions}
            />
        </div>
    );
};
