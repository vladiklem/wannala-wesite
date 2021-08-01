import React, { useCallback } from "react";
import cx from "classnames";

import { Team } from "components/Icons/Team";
import { ScrollableItem, Button, List } from "components/";

import styles from "./GroupScrollableItem.module.scss";

export const GroupScrollableItem = ({ item: { id, title, members }, index, array, onClick }) => {
    const handleClick = useCallback(() => {
        onClick({ id, title });
    }, [onClick, title, id]);

    return (
        <ScrollableItem
            className={cx("shadow-soft transition-250 rounded-xl bg-white p-4", styles.container, {
                "mr-3": index !== array.length - 1,
            })}
        >
            <h3 className="h3 font-weight-bold mb-2">{title}</h3>
            <div className="flex-grow-1">
                <List className="mb-1" list={["Понеділок, 19:00", "Середа, 19:00"]} />
                <div className="d-flex align-items-center">
                    <Team height={32} width={32} />
                    <h3 className="ml-2 h3">{`${members.length}/4`}</h3>
                </div>
            </div>
            <Button
                block={true}
                onClick={handleClick}
                color="vibing-new"
                className="rounded-lg mt-4 text-highlighted font-weight-semibold"
            >
                записатися
            </Button>
        </ScrollableItem>
    );
};
