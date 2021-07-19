import { all } from "redux-saga/effects";

import { usersSaga } from "./users/saga";
import { groupsSaga } from "./groups/saga";
import { leadsSaga } from "./leads/saga";
import { appSaga } from "./app/saga";

export const rootSaga = function* () {
    yield all([
        ...usersSaga,
        ...groupsSaga,
        ...leadsSaga,
        ...appSaga,
    ]);
};
