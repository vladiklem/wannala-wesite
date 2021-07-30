import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cx from "classnames";

import { Button, ProgressBar } from "components/index";
import { Check } from "components/Icons/Check";

import styles from "./QuizForm.module.scss";

import { StepItem } from "../StepItem/StepItem";

export const QuizForm = ({ stepList, onFinish, onSubmit, lastSlideNode }) => {
    const { handleSubmit, register } = useForm();
    const [step, setStep] = useState(0);

    const stepItem = useMemo(() => stepList[step] || {}, [step, stepList]);
    const len = useMemo(() => stepList.length, [stepList]);

    const onNext = useCallback(
        (e) => {
            e.target.type === "submit" && e.preventDefault();
            setTimeout(() => {
                step + 1 === len && handleSubmit(onSubmit)();
                !lastSlideNode && onFinish && onFinish();
                !!lastSlideNode && step === len && onFinish && onFinish();
                setStep((step) => step + 1);
            }, 350);
        },
        [setStep, step, len, handleSubmit, onSubmit, onFinish, lastSlideNode],
    );

    const onPrev = useCallback(
        (e) => {
            e.target.type === "submit" && e.preventDefault();
            step > 0 && setStep((step) => step - 1);
        },
        [step],
    );

    const buttonOnClick = useMemo(() => (step < len - 1 ? onPrev : onNext), [
        onNext,
        onPrev,
        step,
        len,
    ]);

    useEffect(() => {
        stepItem.focus && setTimeout(() => document.getElementById(stepItem.focus).focus(), 100);
    }, [stepItem]);

    console.log(step);

    return (
        <form
            className={cx(
                styles.form,
                "d-flex flex-column justify-content-between border border-transparent rounded-xl p-4 bg-white-new",
            )}
        >
            <div className="flex-grow-1">
                {stepItem.description && <h2 className="h3 mb-3">{stepItem.description}</h2>}
                <div className="mb-3">
                    {stepList.map(({ component, commonProps = {}, ...item }, index) => (
                        <StepItem
                            {...item}
                            commonProps={commonProps}
                            component={component}
                            isHidden={step !== index}
                            register={register}
                            onClick={item.type === "radio" ? onNext : undefined}
                            key={index + item.name}
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
                <Button
                    block
                    className={cx(
                        "d-flex align-items-center justify-content-center rounded-lg font-weight-semibold",
                        {
                            "shadow-none": step !== len - 1,
                        },
                    )}
                    size="lg"
                    color="primary-new"
                    onClick={buttonOnClick}
                    type="submit"
                    href={step === 0 ? "/" : undefined}
                >
                    {step === len - 1 && "Відправити"}
                    {step === len - 1 && <Check className="ml-2" fill="#fff" />}
                    {step < len - 1 && "👈 Назад"}
                    {step === len && "На головну 👀"}
                </Button>
                <ProgressBar current={step} goal={len} className="mt-3" />
            </div>
        </form>
    );
};
