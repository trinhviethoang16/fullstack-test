import React from "react";

interface LabelFieldProps {
  htmlFor: string;
  name: string;
}

const LabelField = (props: LabelFieldProps) => {
  const { htmlFor, name } = props;
  return (
    <label htmlFor={htmlFor} className="form-label">{name}</label>
  )
}
export default LabelField;