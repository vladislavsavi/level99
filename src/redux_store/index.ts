import { createStore, combineReducers } from "redux";

import { tableList } from "./tableList";
import { initialTable } from "./initialTable";

export const rootReducer = combineReducers({
  tableList,
  initialTable,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
