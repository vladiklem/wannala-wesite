import React, { useCallback } from "react";
import { Button, buttonColorEnum } from "components/index";

export const NavItem = ({ id, children, onClick, ...props }) => {
    const handleClick = useCallback(() => onClick(id), [onClick, id]);

    return (
        <li>
            <Button
                href={`#${id}`}
                className="bg-white text-gray-900 py-2 px-4 text-decoration-none shadow-soft mr-3 rounded border transition-250"
                color={buttonColorEnum.UNSTYLED}
                onClick={handleClick}
                {...props}
            >
                {children}
            </Button>
        </li>
    );
};
