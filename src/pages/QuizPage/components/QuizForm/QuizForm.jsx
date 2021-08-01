import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cx from "classnames";
import { useMediaQuery } from "react-responsive";

import { mediaBreakpointsEnum } from "constants/enums";
import { ProgressBar } from "components/";

import styles from "./QuizForm.module.scss";

import { StepItem } from "../StepItem/StepItem";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const QuizForm = ({
    stepList,
    onFinish = () => {},
    onSubmit,
    onNext: nextCb,
    startSlideNode,
    lastSlideNode,
}) => {
    const { handleSubmit, register, watch } = useForm();
    const [step, setStep] = useState(0 - !!startSlideNode);

    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const stepItem = useMemo(() => stepList[step] || {}, [step, stepList]);
    const len = useMemo(() => stepList.length, [stepList]);
    const isLast = useMemo(() => step + 1 === len, [step, len]);
    const isFinish = useMemo(() => step === len - 1 + !!lastSlideNode, [step, len, lastSlideNode]);

    const onNext = useCallback(
        (e) => {
            e.target.type === "submit" && e.preventDefault();
            nextCb(watch());
            setTimeout(() => {
                isLast && handleSubmit(onSubmit)();
                isFinish && onFinish();
                !isFinish && setStep((step) => step + 1);
            }, 220);
        },
        [setStep, isFinish, isLast, handleSubmit, onSubmit, onFinish, watch, nextCb],
    );

    useEffect(() => {
        stepItem.focus && setTimeout(() => document.getElementById(stepItem.focus).focus(), 100);
    }, [stepItem]);

    return (
        <form
            className={cx(
                styles.form,
                "d-flex flex-column justify-content-between border border-transparent rounded-xl p-4 bg-white-new",
            )}
        >
            <div className="flex-grow-1">
                {stepItem.title && (
                    <h2
                        className={cx(
                            {
                                h3: !isPortable,
                                "regular font-weight-semibold": isPortable,
                            },
                            "mb-2",
                        )}
                    >
                        {stepItem.title}
                    </h2>
                )}
                {stepItem.description && (
                    <p className={cx({ h4: !isPortable, regular: isPortable }, "mb-3")}>
                        {stepItem.description}
                    </p>
                )}
                <div className="mb-3">
                    {!!startSlideNode && (
                        <div className={cx({ "hidden-element": step === -1 || !startSlideNode })}>
                            {startSlideNode}
                        </div>
                    )}
                    {stepList.map(({ component, commonProps = {}, ...item }, index) => (
                        <StepItem
                            isRendered={step >= index}
                            {...item}
                            commonProps={commonProps}
                            component={component}
                            isHidden={step !== index}
                            register={register}
                            onClick={item.type === "radio" ? onNext : undefined}
                            key={index}
                            isPortable={isPortable}
                            step={step}
                        />
                    ))}
                    <div
                        className={cx("transition-250", {
                            "hidden-element": len !== step,
                            "d-none": !lastSlideNode,
                        })}
                    >
                        {lastSlideNode}
                    </div>
                </div>
            </div>
            <div>
                <SubmitButton
                    onClick={onNext}
                    {...stepItem.submitButtonProps}
                    type={isLast ? "submit" : undefined}
                />
                <ProgressBar current={step} goal={len} className="mt-3" />
            </div>
        </form>
    );
};
