import React, { useCallback } from "react";
import cx from "classnames";
import moment from "moment";

import { Collapse, Button } from "components/index";
import { isNewLead } from "helpers/general";

import styles from "./LeadItem.module.scss";

export const LeadItem = ({
    id,
    status,
    name,
    phoneNumber,
    firstName,
    onUpdate,
    onDelete,
    isPortable,
    ...props
}) => {
    const handleUpdate = useCallback(() => onUpdate({ id, status: "touched", name, phoneNumber }), [
        id,
        name,
        phoneNumber,
        onUpdate,
    ]);

    const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

    return (
        <Collapse
            className={cx("border rounded mb-3 px-4 position-relative", styles.container, {
                [styles.isNew]: isNewLead(status),
            })}
            togglerContent={
                <div className="text-left">
                    <div>
                        <span className="font-weight-semibold">Ім'я: </span> {name || firstName}
                        {props.type && <span className="badge badge-primary ml-2">IT</span>}
                    </div>
                    <br />
                    <div>
                        <span className="font-weight-semibold">Тел: </span> {phoneNumber}
                    </div>
                    <div>
                        {props.timestamp && (
                            <>
                                <span className="font-weight-semibold">Дата:</span>{" "}
                                {moment(props.timestamp).format("MMM DD, HH:mm")}
                            </>
                        )}
                    </div>
                </div>
            }
            contentClassName="d-flex align-items-center justify-content-between row pb-4 pt-2"
        >
            <span className="col-6">
                <Button
                    className="rounded-lg text-highlighted font-weight-semibold"
                    onClick={handleUpdate}
                >
                    {isPortable ? "набрала" : "Набрала та додала в таблицю"}
                </Button>
            </span>
            <span className="col-6">
                <Button onClick={handleDelete} color="red">
                    Видалити
                </Button>
            </span>
        </Collapse>
    );
};
