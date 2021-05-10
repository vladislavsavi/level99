import * as _ from "lodash";
import { InferValueType, TableModel } from "../models";
import * as actions from "./actions";

type ActionsType = ReturnType<InferValueType<typeof actions>>;

type State = Partial<TableModel>[];

export const initialTable = (state: State = [], action: ActionsType) => {
  switch (action.type) {
    case "ADD_ROW":
      return _.concat(state, action.payload);
    case "DELETE_ROW_FROM_INITIAL":
      _.remove(state, (i) => {
        return i === action.payload;
      });
      return _.cloneDeep(state);
    default:
      return state;
  }
};
