import { combineReducers } from "redux";

import { usersReducer } from "./users/reducer";
import { groupsReducer } from "./groups/reducer";
import { leadsReducer } from "./leads/reducer";
import { appReducer } from "./app/reducer";
import { modalsReducer } from "./modals/reducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    groups: groupsReducer,
    leads: leadsReducer,
    app: appReducer,
    modals: modalsReducer,
});
