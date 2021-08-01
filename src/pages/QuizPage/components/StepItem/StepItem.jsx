import React, { useMemo } from "react";
import cx from "classnames";
import MaskedInput from "react-input-mask";

const renderTag = (renderChildren, maskProps) =>
    maskProps ? (
        <MaskedInput {...maskProps}>
            {(maskedInputProps) => renderChildren({ ...maskedInputProps })}
        </MaskedInput>
    ) : (
        renderChildren()
    );

export const StepItem = ({
    component,
    list,
    isHidden = true,
    commonProps,
    register,
    onClick,
    validScheme = {},
    isPortable = false,
    isRendered = false,
    renderEmpty = () => null,
}) => {
    const Tag = useMemo(() => component, [component]);

    return (
        <div
            className={cx("transition-250 row", {
                "hidden-element text-white-new": isHidden,
            })}
        >
            {isRendered
                ? list.map(({ maskProps, ...tagProps }, index) =>
                      renderTag(
                          (props) => (
                              <div className="col-sm-12 col-md-6" key={index}>
                                  <Tag
                                      className="mb-3"
                                      labelClassName={cx({ "font-small": isPortable })}
                                      onClick={onClick}
                                      {...tagProps}
                                      {...commonProps}
                                      {...props}
                                      ref={register(validScheme)}
                                  />
                              </div>
                          ),
                          maskProps,
                      ),
                  )
                : renderEmpty()}
        </div>
    );
};
