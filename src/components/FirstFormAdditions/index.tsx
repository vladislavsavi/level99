import { FC, HTMLAttributes } from "react";
import { Card, Button } from "antd";

import { Input } from "../Input";

import "./first-form.scss";

export interface FirstFormData {
  name: string;
  surname: string;
  age: number;
  city: string;
}

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  onChange: (key: keyof FirstFormData, value: string | number) => void;
  formData: Partial<FirstFormData>;
  addRow?: () => void;
}

export const FirstFormAdditions: FC<Props> = ({
  onChange,
  formData,
  className,
  addRow,
}) => {
  return (
    <Card className={`first-form ${className}`}>
      <Input
        className="first-form__input"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <Input
        className="first-form__input"
        type="text"
        placeholder="Surname"
        value={formData.surname}
        onChange={(e) => onChange("surname", e.target.value)}
      />
      <Input
        className="first-form__input"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={(e) => onChange("age", e.target.value)}
      />
      <Input
        className="first-form__input"
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => onChange("city", e.target.value)}
      />
      <Button onClick={addRow} className="first-form__button" type="primary">
        ADD
      </Button>
    </Card>
  );
};
