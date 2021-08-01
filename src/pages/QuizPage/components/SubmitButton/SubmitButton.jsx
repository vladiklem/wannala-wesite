import React, { useCallback } from "react";
import cx from "classnames";

import { Button } from "components/";
import { Check } from "components/Icons/Check";

export const SubmitButtonVariantType = {
    SEND: "SEND",
    BACK: "BACK",
    HOME: "HOME",
    NEXT: "NEXT",
};

export const SubmitButton = ({
    className,
    onClick,
    href,
    variant = SubmitButtonVariantType.NEXT,
    ...props
}) => {
    const handleClick = useCallback(
        (e) => {
            e.preventDefault();

            onClick(e);
        },
        [onClick],
    );

    return (
        <Button
            block
            className={cx(
                "d-flex align-items-center justify-content-center rounded-lg font-weight-semibold",
                className,
            )}
            size="lg"
            color="primary-new"
            onClick={handleClick}
            variant="button"
            href={href}
            {...props}
        >
            {variant === SubmitButtonVariantType.SEND && (
                <>
                    <span>Відправити</span>
                    <Check className="ml-2" fill="#fff" />
                </>
            )}
            {variant === SubmitButtonVariantType.BACK && "👈 Назад"}
            {variant === SubmitButtonVariantType.NEXT && "Далі"}
            {variant === SubmitButtonVariantType.HOME && "На головну 👀"}
        </Button>
    );
};
