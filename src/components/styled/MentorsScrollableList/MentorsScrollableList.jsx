import React, { useMemo } from "react";

import { Scrollable } from "components/";
import mentorsList from "constants/lists/mentorsList"

import { MentorScrollableItem } from "./MentorScrollableItem/MentorScrollableItem";

export const MentorsScrollableList = ({ toMentor, list = mentorsList, className, isPortable }) => {
    const offset = useMemo(() => (isPortable ? 250 : 556), [isPortable]);

    return (
        <Scrollable
            containerClassName={className}
            hasArrows={true}
            isScrollbarVisible={false}
            offset={offset}
            components={{
                Header: <h2 className="h2-responsive font-weight-bold">Наші ментори</h2>,
            }}
        >
            {list.map(({ name, ...itemProps }, index) => (
                <MentorScrollableItem
                    index={index}
                    array={list}
                    key={name}
                    name={name}
                    onClick={toMentor}
                    isPortable={isPortable}
                    {...itemProps}
                />
            ))}
        </Scrollable>
    );
};
