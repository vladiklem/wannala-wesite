import React, { useMemo, useCallback } from "react";
import { Collapse } from "components/";

export const CollapseGroupItem = ({
    item,
    index,
    array,
    setOpenCollapseId,
    openCollapseId,
    getCollapseProps,
}) => {
    const onToggle = useCallback(
        () => (index === openCollapseId ? setOpenCollapseId(null) : setOpenCollapseId(index)),
        [openCollapseId, index, setOpenCollapseId],
    );

    const isOpen = useMemo(() => openCollapseId === index, [openCollapseId, index]);

    const collapseProps = useMemo(() => getCollapseProps(item, index, array), [
        getCollapseProps,
        index,
        item,
        array,
    ]);

    return (
        <Collapse hasArrow isControlled onToggle={onToggle} isOpen={isOpen} {...collapseProps} />
    );
};
