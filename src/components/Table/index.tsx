import { FC } from "react";
import { useDispatch } from "react-redux";
import { Row, Col } from "react-grid-system";
import { CloseOutlined } from "@ant-design/icons";
import { Space, Button, Table as AntTabler } from "antd";

import { TableModel } from "../../redux_store/models";
import { add_table, delete_table } from "../../redux_store/tableList/actions";
import { useColumns } from "./useColumns";
import { tableTypes } from "./tableTypes";

import "./app-table.scss";

interface Props {
  items: Partial<TableModel>[];
  tableType: string;
  tabIndex?: number;
  className: string;
}

const Table: FC<Props> = ({ items, tabIndex, tableType, className }) => {
  const columns: any = useColumns(tableType, tabIndex as number);
  const dispatch = useDispatch();

  const onCopyTable = () => {
    dispatch(add_table([...items]));
  };

  const onDelete = () => {
    dispatch(delete_table(items));
  };

  return (
    <Row className={className}>
      <Col>
        <Space className="app-table__actions">
          <Button onClick={onCopyTable} type="primary">
            Copy Table
          </Button>
          {tableType === tableTypes.ADJECTIVE && (
            <Button
              onClick={onDelete}
              icon={<CloseOutlined />}
              type="link"
              danger
            />
          )}
        </Space>
        <AntTabler
          bordered
          pagination={false}
          className="app-table"
          columns={columns}
          dataSource={items}
        />
      </Col>
    </Row>
  );
};

export { Table, tableTypes };
