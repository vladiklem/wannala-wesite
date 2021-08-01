import React from "react";
import cx from "classnames";

import { valuesList } from "../Home.constants";
import { objToArray } from "utils/converters";

import { ValueItem } from "./ValueItem/ValueItem";

export const ValuesSection = ({ isPortable, className }) => (
    <section id="wannablab-values" className={cx("container", className)}>
        <h2 className="h2 mb-4 font-weight-bold">Наші цінності</h2>
        {objToArray(valuesList).map(({ Icon, ...valueProps }, index) => (
            <ValueItem
                icon={<Icon height={64} width={64} />}
                className="mb-3"
                isPortable={isPortable}
                index={index}
                key={valueProps.title}
                {...valueProps}
            />
        ))}
    </section>
);
