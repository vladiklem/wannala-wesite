import React, { useMemo, useCallback } from "react";

import { Button, Collapse } from "components/";

export const GroupItem = ({ group, onEdit, onDelete }) => {
    const { title, description } = group;

    const togglerContent = useMemo(
        () => (
            <span className="d-flex align-items-center">
                <h3 className="ml-3 mb-0">{title}</h3>
            </span>
        ),
        [title],
    );

    const handleEdit = useCallback(() => onEdit(group), [group, onEdit]);

    const handleDelete = useCallback(() => onDelete(group.id), [group, onDelete]);

    return (
        <li className="mb-4">
            <Collapse togglerContent={togglerContent} className="w-100 bg-white-new border rounded">
                <div>{description}</div>
                <div>
                    <Button onClick={handleEdit} color="primary" className="mr-3">
                        Змінити
                    </Button>
                    <Button onClick={handleDelete} color="danger">
                        Видалити
                    </Button>
                </div>
            </Collapse>
        </li>
    );
};
