import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  const { id, name, placeholder, type, onChange } = props;
  return (
    <input
      type={type}
      className="form-control"
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default InputField;
