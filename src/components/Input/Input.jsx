import React, { forwardRef } from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

export const inputTypeEnum = {
    DEFAULT: "default",
    ALTERNATIVE: "alternative",
    NEW: "new-design-system",
};

export const Input = forwardRef(
    (
        {
            className,
            labelClassName,
            tag: Tag = "input",
            label,
            id,
            name,
            invalid,
            errorMessage,
            alternative = false,
            inputType = inputTypeEnum.DEFAULT,
            inputClassName = "",
            ...props
        },
        ref,
    ) => {
        return alternative || inputType === inputTypeEnum.ALTERNATIVE ? (
            <div>
                <Tag
                    className={cx(styles.alternativeInput, className)}
                    id={id || name}
                    name={name}
                    {...props}
                />
            </div>
        ) : (
            <div className={cx(className, styles.customFormGroup)}>
                <Tag
                    id={id || name}
                    name={name}
                    placeholder={label}
                    ref={ref}
                    className={cx(
                        styles.customFormInput,
                        {
                            [styles.invalid]: invalid || errorMessage,
                            [styles.textarea]: Tag === "textarea",
                            [styles.new]: inputType === inputTypeEnum.NEW,
                        },
                        inputClassName,
                    )}
                    {...props}
                />
                {!!label && (
                    <label
                        className={cx(
                            styles.customFormLabel,
                            {
                                "bg-white-new": inputType === inputTypeEnum.NEW,
                            },
                            labelClassName,
                        )}
                        htmlFor={id || name}
                    >
                        {label}
                    </label>
                )}
                <span className={styles.customErrorMessage}>{errorMessage}</span>
            </div>
        );
    },
);
