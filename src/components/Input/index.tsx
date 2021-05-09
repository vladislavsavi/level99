import { FC } from "react";
import { Input as AntdInput, InputProps } from "antd";
import CSS from "csstype";

interface Props extends InputProps {}

const style: CSS.Properties = {
  borderRadius: "5px",
  padding: "10px 15px",
};

export const Input: FC<Props> = (props) => {
  return <AntdInput style={style} {...props} />;
};
