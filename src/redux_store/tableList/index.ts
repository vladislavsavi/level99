import * as _ from "lodash";
import { InferValueType, TableModel } from "../models";
import * as actions from "./actions";

type ActionsType = ReturnType<InferValueType<typeof actions>>;

type State = Array<Partial<TableModel>[]>;

export const tableList = (state: State = [], action: ActionsType) => {
  switch (action.type) {
    case "ADD_TABLE":
      state.push(action.table);
      return _.cloneDeep(state);
    case "DELETE_TABLE":
      _.remove(state, (i) => {
        return i === action.table;
      });
      return _.cloneDeep(state);
    case "DELETE_ROW_ADDITION":
      const targtTable = state[action.payload.tabIndex];
      _.remove(targtTable, (i) => {
        return i === action.payload.row;
      });

      return _.cloneDeep(state);
    default:
      return state;
  }
};
