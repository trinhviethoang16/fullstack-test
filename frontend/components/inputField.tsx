import React from "react";

interface InputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  const { id, name, placeholder, onChange } = props;
  return (
    <input type="text" className="form-control" id={id} name={name} placeholder={placeholder} onChange={onChange}/>
  );
};
export default InputField;