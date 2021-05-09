import { FC, useReducer } from "react";
import { Row, Col } from "react-grid-system";

import {
  FirstFormAdditions,
  FirstFormData,
  SecondFormAdditions,
  SecondFormData,
} from "../../components";

import "./add-widget.scss";

interface Action {
  type: keyof FirstFormData | keyof SecondFormData;
  value: string | number;
}

const reducer = (
  state: Partial<FirstFormData> | Partial<SecondFormData>,
  action: Action
) => {
  return { ...state, ...{ [action.type]: action.value } };
};

export const AdditionForms: FC<{}> = () => {
  const [state, dispatch] = useReducer(reducer, {});

  const onChange = (
    key: keyof FirstFormData | keyof SecondFormData,
    value: string | number
  ) => {
    dispatch({
      type: key,
      value,
    });
  };

  return (
    <Row className="add-widget">
      <Col md={6} sm={12}>
        <FirstFormAdditions
          className="add-widget__item left-form"
          formData={state}
          onChange={onChange}
        />
      </Col>
      <Col md={6} sm={12}>
        <SecondFormAdditions
          className="add-widget__item right-form"
          formData={state}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
