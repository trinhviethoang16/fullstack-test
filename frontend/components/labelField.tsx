import React from "react";

interface LabelFieldProps {
  htmlFor: string;
  name: string;
  className?: string;
}

const LabelField = (props: LabelFieldProps) => {
  const { htmlFor, name, className } = props;
  return (
    <label htmlFor={htmlFor} className={className}>
      {name}
    </label>
  );
};
export default LabelField;
