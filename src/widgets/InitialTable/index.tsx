import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux_store";
import { Table, tableTypes } from "../../components";
import { TableModel } from "../../redux_store/models";

import "./initial-table.scss";

export const InitialTable: FC<{}> = () => {
  const items: Partial<TableModel>[] = useSelector(
    (store: RootState) => store.initialTable
  );
  return (
    <Table
      className="initial-table"
      tableType={tableTypes.INITIAL}
      items={items}
    />
  );
};
