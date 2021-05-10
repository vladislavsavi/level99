import { Space, Button } from "antd";
import { useDispatch } from "react-redux";
import { delete_row_init } from "../../redux_store/initialTable/actions";
import { delete_row_addi } from "../../redux_store/tableList/actions";
import { TableModel } from "../../redux_store/models";
import { tableTypes } from "./tableTypes";

export const useColumns = (tableType: string, tabIndex: number) => {
  const dispatch = useDispatch();

  const removeRow = (row: TableModel) => {
    if (tableType === tableTypes.INITIAL) {
      dispatch(delete_row_init(row));
      return;
    }

    dispatch(delete_row_addi({ row, tabIndex }));
  };

  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "",
      key: "action",
      align: "right",
      render: (_text: string, row: any, _index: number) => (
        <Space size="middle">
          <Button type="link">Edit</Button>
          <Button onClick={() => removeRow(row)} type="link" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
};
