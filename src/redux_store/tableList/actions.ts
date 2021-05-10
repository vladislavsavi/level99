import { TableModel } from "../models";

export const add_table = (table: Partial<TableModel>[]) =>
  ({ type: "ADD_TABLE", table } as const);

export const delete_table = (table: Partial<TableModel>[]) =>
  ({ type: "DELETE_TABLE", table } as const);

export const delete_row_addi = (payload: {
  row: Partial<TableModel>;
  tabIndex: number;
}) => ({ type: "DELETE_ROW_ADDITION", payload } as const);
