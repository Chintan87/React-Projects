import React from "react";

const Input = ({ inputConfig, inputContainerStyles }) => {
  console.log(inputConfig);

  return (
    <div className={`${inputContainerStyles}`}>
      <input {...inputConfig} />
    </div>
  );
};

export default Input;
