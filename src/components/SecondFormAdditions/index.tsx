import { FC, HTMLAttributes } from "react";
import { Card, Button } from "antd";
import { Row, Col } from "react-grid-system";

import { Input } from "../Input";

import "./second-form.scss";

export interface SecondFormData {
  name: string;
  surname: string;
  age: number;
  city: string;
}

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (key: keyof SecondFormData, value: string | number) => void;
  formData: Partial<SecondFormData>;
}

export const SecondFormAdditions: FC<Props> = ({
  onChange,
  formData,
  className,
}) => {
  return (
    <Card className={`second-form ${className}`}>
      <Row className="second-form__input-group">
        <Col sm={6}>
          <Input
            className="second-form__input"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </Col>

        <Col sm={6}>
          <Input
            className="second-form__input"
            type="text"
            placeholder="Surname"
            value={formData.surname}
            onChange={(e) => onChange("surname", e.target.value)}
          />
        </Col>
      </Row>
      <Row className="second-form__input-group">
        <Col sm={6}>
          <Input
            className="second-form__input"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => onChange("age", e.target.value)}
          />
        </Col>
        <Col sm={6}>
          <Input
            className="second-form__input"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => onChange("city", e.target.value)}
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col md={6} sm={12}>
          <Button className="second-form__button" type="primary">
            ADD
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
