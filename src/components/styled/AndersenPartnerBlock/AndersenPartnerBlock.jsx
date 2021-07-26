import React from "react";
import cx from "classnames";

import styles from "./AndersenPartnerBlock.module.scss";
import andersenLogo from "assets/images/andersen-logo.png";

const AndersenPartnerBlock = ({ className }) => (
    <div className={cx("position-absolute", styles.container, className)}>
        <span role="presentation" className={cx(styles.text, "font-weight-bold")}>
            Партнер
        </span>
        <span role="presentation" className={cx(styles.text, "font-weight-bold")}>
            Продукту
        </span>
        <a href="https://www.andersenlab.com/">
            <img
                role="presentation"
                width={150}
                className="image"
                src={andersenLogo}
                alt="IT компанія Andersen"
            />
        </a>
    </div>
);

export default AndersenPartnerBlock;
