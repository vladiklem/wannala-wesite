import React, { useState } from "react";

import { CollapseGroupItem } from "./CollapseGroupItem/CollapseGroupItem";

export const CollapseGroup = ({
    className,
    defaultOpenedCollapseId = 0,
    list = [],
    getCollapseProps,
}) => {
    const [openCollapseId, setOpenCollapseId] = useState(defaultOpenedCollapseId);

    return (
        <div className={className}>
            {list.map((item, index, array) => (
                <CollapseGroupItem
                    hasArrow
                    isControlled
                    index={index}
                    array={array}
                    item={item}
                    openCollapseId={openCollapseId}
                    setOpenCollapseId={setOpenCollapseId}
                    getCollapseProps={getCollapseProps}
                    key={index}
                />
            ))}
        </div>
    );
};
