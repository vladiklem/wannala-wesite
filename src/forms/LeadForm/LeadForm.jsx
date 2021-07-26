import React, { useCallback, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import MaskedInput from "react-input-mask";
import cx from "classnames";

import { Button, Input } from "components/";
import { fireAnalyticsEvent } from "analytics/";
import { addLead } from "store/leads/actions";
import { selectLeadFormState } from "store/leads/selectors";
import events from "analytics/events";

import translations from "./LeadForm.translations";
import styles from "./LeadForm.module.scss";

const SuccessCover = lazy(() => import("./SuccessCover/SuccessCover"));

const strings = translations.ua;

const LeadForm = ({
    className,
    description = "",
    actionButtonProps,
    afterWord = "Наш кастомер ловер Марина зателефонує вам протягом 15-ти хвилин ❤️",
    type = "regular",
    styleType = "regular",
    redirectUrl = "",
    onSubmit: cb,
    ...props
}) => {
    const dispatch = useDispatch();
    const { isLoading, isSuccess } = useSelector(selectLeadFormState);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = useCallback(
        (data) => {
            dispatch(addLead({ ...data, type, timestamp: Date.now() }));
            fireAnalyticsEvent(
                events.LEAD_FORM_SUBMIT(
                    type === "it" ? "IT landing" : "Lead Form",
                    `${type} Lead Submitted`,
                ),
            );
            redirectUrl && setTimeout(() => window.stringsation.replace(redirectUrl), 500);
            cb && cb();
        },
        [dispatch, type, redirectUrl, cb],
    );

    return (
        <form
            className={cx(
                { "shadow rounded-xl bg-white": styleType === "regular" },
                "position-relative overflow-hidden d-flex flex-column",
                styles.form,
                className,
            )}
            onSubmit={handleSubmit(onSubmit)}
            {...props}
        >
            <div className="flex-grow-1">
                <h3 className="h3 font-weight-normal mb-2">{description}</h3>
                <Input
                    className="mx-2"
                    name="name"
                    label={strings.nameField.label}
                    ref={register({ required: true })}
                />
                <MaskedInput
                    mask="+38 (\099) 999 9999"
                    maskChar="_"
                    alwaysShowMask={false}
                    name="phoneNumber"
                >
                    {(inputProps) => (
                        <Input
                            type="tel"
                            name="phoneNumber"
                            label={strings.phoneField.label}
                            className="mx-2"
                            ref={register({
                                required: true,
                            })}
                            errorMessage={
                                errors.phoneNumber &&
                                errors.phoneNumber.type === "pattern" &&
                                strings.errors.phone
                            }
                            {...inputProps}
                        />
                    )}
                </MaskedInput>
            </div>
            <Button
                bstringsk
                color="primary-new"
                className="rounded-circle mt-4"
                size="lg"
                type="submit"
                isRounded
                isBold
                isLoading={isLoading}
                {...actionButtonProps}
            >
                {strings.actionButtonLabel}
            </Button>
            <SuccessCover isSuccess={isSuccess} strings={strings} afterWord={afterWord} />
        </form>
    );
};

export default LeadForm;
