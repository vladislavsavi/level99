import { FC } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux_store";
import { Table, tableTypes } from "../../components";
import { TableModel } from "../../redux_store/models";

import "./adjective-table.scss";

export const AdjectiveTables: FC = () => {
  const tableList: Array<Partial<TableModel>[]> = useSelector(
    (store: RootState) => store.tableList
  );
  return (
    <>
      {tableList.map((items, index) => (
        <Table
          className="adjective-table"
          tableType={tableTypes.ADJECTIVE}
          items={items}
          tabIndex={index}
        />
      ))}
    </>
  );
};
