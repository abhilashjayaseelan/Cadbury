import { combineReducers } from "redux";
import dashboardDataReducer from "./dashboardDataSlice";

const rootReducer = combineReducers({
    dashboardDetails: dashboardDataReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;