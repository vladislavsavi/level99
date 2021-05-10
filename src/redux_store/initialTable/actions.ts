import { TableModel } from "../models";

export const add_row = (payload: Partial<TableModel>) =>
  ({ type: "ADD_ROW", payload } as const);

export const delete_row_init = (payload: Partial<TableModel>) =>
  ({ type: "DELETE_ROW_FROM_INITIAL", payload } as const);
