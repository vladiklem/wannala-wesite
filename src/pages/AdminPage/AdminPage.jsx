import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";

import { buttonColorEnum, SideBar, Button } from "components/index";
import { ArrowRightLong } from "components/Icons/ArrowRightLong";
import { scrollToTop } from "helpers/general";
import { mediaBreakpointsEnum } from "constants/enums";
import { CustomRoute } from "containers/RootContainer/CustomRoute/CustomRoute";
import { selectAdmin } from "store/app/selectors";

import { UsersPanel } from "./UsersPanel/UsersPanel";
import { GroupsPanel } from "./GroupsPanel/GroupsPanel";
import { CustomersPanel } from "./CustomersPanel/CustomersPanel";

import styles from "./AdminPage.module.scss";
import { GeneralDashboard } from "./GeneralDashboard/GeneralDashboard";
import { BudgetDashboard } from "./BudgetDashboard/BudgetDashboard";

const AdminPage = () => {
    const { url, path } = useRouteMatch();
    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });
    const [isOpen, setIsOpen] = useState(!isPortable);
    const admin = useSelector(selectAdmin);

    const isBudgetVisible = useMemo(() => admin.roles.some((role) => role === "org"), [admin]);

    const toggleSidebar = useCallback(() => {
        setIsOpen((open) => !open);
    }, [setIsOpen]);

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <>
            <SideBar isOpen={isOpen} title="wannablab">
                <Button
                    className="px-3 py-2 mx-2 mt-3"
                    color={buttonColorEnum.UNSTYLED}
                    onClick={toggleSidebar}
                >
                    закрити
                </Button>
                <ul className="pt-3 px-2">
                    <li className="px-3 py-2">
                        <Link onClick={toggleSidebar} to={`${url}/dashboard`}>
                            Дашборд
                        </Link>
                    </li>
                    <li className="px-3 py-2">
                        <Link onClick={toggleSidebar} to={`${url}/users`}>
                            Блабери
                        </Link>
                    </li>
                    <li className="px-3 py-2">
                        <Link onClick={toggleSidebar} to={`${url}/groups`}>
                            Групи
                        </Link>
                    </li>
                    <li className="px-3 py-2">
                        <Link onClick={toggleSidebar} to={`${url}/customers`}>
                            Ліди
                        </Link>
                    </li>
                    {admin.roles.some((role) => role === "org") && (
                        <li className="px-3 py-2">
                            <Link onClick={toggleSidebar} to={`${url}/budget`}>
                                Бюджет
                            </Link>
                        </li>
                    )}
                </ul>
            </SideBar>
            <div>
                <div className="container mb-4 mt-4">
                    <Button color={buttonColorEnum.UNSTYLED} onClick={toggleSidebar}>
                        меню <ArrowRightLong height={24} />
                    </Button>
                </div>
                <div className={cx(styles.container, { [styles.isDektop]: !isPortable })}>
                    <Switch>
                        <Route exact path={`${path}/dashboard`}>
                            <GeneralDashboard isPortable={isPortable} />
                        </Route>
                        <Route path={`${path}/customers`}>
                            <CustomersPanel isPortable={isPortable} />
                        </Route>
                        <Route path={`${path}/users`}>
                            <UsersPanel />
                        </Route>
                        <Route path={`${path}/groups`}>
                            <GroupsPanel />
                        </Route>
                        <CustomRoute isVisible={isBudgetVisible} path={`${path}/budget`}>
                            <BudgetDashboard />
                        </CustomRoute>
                    </Switch>
                </div>
            </div>
        </>
    );
};

export default AdminPage;
