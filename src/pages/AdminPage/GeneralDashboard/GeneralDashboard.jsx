import React from "react";
import { useSelector } from "react-redux";

import { selectUsers } from "store/users/selectors";
import { selectInstagramInfo, selectTelegramInfo } from "store/app/selectors";
import { Button } from "components/index";

import { ProgressItem } from "./ProgressItem/ProgressItem";

export const GeneralDashboard = ({ isPortable }) => {
    const blabers = useSelector(selectUsers);
    const telegram = useSelector(selectTelegramInfo);
    const instagram = useSelector(selectInstagramInfo);

    const activeUsersGoal = 75;
    const feedbackGoal = 25;
    const instagramGoal = 2000;
    const telegramGoal = 1000;

    return (
        <article className="container">
            <section className="mb-5">
                <h2 className="h2 mb-3">Цілі</h2>
                <div className="row">
                    <ProgressItem
                        current={blabers.length}
                        goal={activeUsersGoal}
                        isPortable={isPortable}
                        className="mb-4 col-md-6 col-sm-12"
                    >
                        Кількість активних клієнтів <strong>до 1 вересня</strong>
                    </ProgressItem>
                    <ProgressItem
                        current={0}
                        goal={feedbackGoal}
                        isPortable={isPortable}
                        className="mb-4 col-md-6 col-sm-12"
                    >
                        Кількість відгуків <strong>до 1 вересня</strong>
                    </ProgressItem>
                    <ProgressItem
                        current={instagram.count}
                        goal={instagramGoal}
                        isPortable={isPortable}
                        className="mb-4 col-md-6 col-sm-12"
                    >
                        Ціль по підписникам в інстаграмі <strong>до 1 серпня</strong>
                    </ProgressItem>
                    <ProgressItem
                        current={telegram.count}
                        goal={telegramGoal}
                        isPortable={isPortable}
                        className="col-md-6 col-sm-12"
                    >
                        Ціль по підписникам в телеграмі <strong>до 1 серпня</strong>
                    </ProgressItem>
                </div>
            </section>
            <section className="mb-5">
                <h2 className="h2 mb-3">Проблеми, ідеї та плани 🚧 work in progress 🚧</h2>
                <Button color="primary-new" outline>
                    Відрепортити
                </Button>
            </section>
        </article>
    );
};
