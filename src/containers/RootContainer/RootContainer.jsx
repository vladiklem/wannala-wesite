import React, { useEffect, useCallback, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { ModalsContainer } from "containers/ModalsContainer/ModalsContainer";
import { Header, Footer } from "components/index";
import { firebaseService } from "services/firebaseService";
import { initApp } from "store/app/actions";
import { selectAdmin, selectHeaderSettings } from "store/app/selectors";
import { toggleModal } from "store/modals/actions";
import { modalNamesEnum, mediaBreakpointsEnum } from "constants/enums";

import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

import styles from "./RootContainer.module.scss";
import "assets/styles/index.scss";

const Home = lazy(() => import("pages/Home/Home"));
const AdminPage = lazy(() => import("pages/AdminPage/AdminPage"));
const CoursePage = lazy(() => import("pages/CoursePage/CoursePage"));
const QuizPage = lazy(() => import("pages/QuizPage/QuizPage"));
const MentorPage = lazy(() => import("pages/MentorPage/MentorPage"));
const ChecklistPage = lazy(() => import("pages/ChecklistPage/ChecklistPage"));
const TestPage = lazy(() => import("pages/TestPage/TestPage"));
const ItTeamCoursePage = lazy(() => import("pages/ItTeamCoursePage/ItTeamCoursePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

firebaseService.init();

export const RootContainer = () => {
    const dispatch = useDispatch();
    const admin = useSelector(selectAdmin);
    const headerSettings = useSelector(selectHeaderSettings);

    const isPortable = useMediaQuery({ maxWidth: mediaBreakpointsEnum.MD });

    const openLoginModal = useCallback(() => dispatch(toggleModal(modalNamesEnum.LOGIN)), [
        dispatch,
    ]);

    const renderRoute = useCallback(
        ({ routeComponent: Component, props: outerProps }) => (props) => (
            <Component {...props} {...outerProps} />
        ),
        [],
    );

    useEffect(() => {
        dispatch(initApp());
    }, [dispatch]);

    return (
        <Suspense fallback={() => <span>"loading"</span>}>
            <Router>
                <Header isPortable={isPortable} isVisible={headerSettings.isVisible} />
                <main className={styles.background}>
                    <ModalsContainer />
                    <Switch>
                        <Route path="/" render={renderRoute({ routeComponent: Home })} exact />
                        <Route
                            path="/course/:slug"
                            render={renderRoute({ routeComponent: CoursePage })}
                        />
                        <Route
                            path="/mentor/:slug"
                            render={renderRoute({ routeComponent: MentorPage })}
                        />
                        <Route
                            path="/check-list"
                            render={renderRoute({ routeComponent: ChecklistPage })}
                        />
                        <Route
                            path="/it"
                            render={renderRoute({
                                routeComponent: ItTeamCoursePage,
                                props: { isPortable },
                            })}
                        />
                        <Route path="/test" render={renderRoute({ routeComponent: TestPage })} />
                        <Route
                            path="/quiz/:slug"
                            render={renderRoute({ routeComponent: QuizPage })}
                        />
                        <PrivateRoute
                            path="/admin"
                            isLoading={admin.isLoading}
                            hasAccess={admin.isAdmin}
                            component={AdminPage}
                            selector={selectAdmin}
                        />
                        <Route component={NotFoundPage} />
                    </Switch>
                </main>
                <Footer handleLogin={openLoginModal} isPortable={isPortable} />
            </Router>
        </Suspense>
    );
};
