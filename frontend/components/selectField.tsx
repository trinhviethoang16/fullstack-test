import React from "react";
import { Shape } from "../utils/enum";

interface SelectFieldProps<T> {
  name: string;
  id: string;
  value: Shape | undefined;
  options: { value: Shape; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectField<T>(props: SelectFieldProps<T>) {
  const { name, id, value, options, onChange } = props;
  return (
    <select name={name} id={id} className="form-select" value={value} onChange={onChange}>
      <option value="">Choose shape</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default SelectField;