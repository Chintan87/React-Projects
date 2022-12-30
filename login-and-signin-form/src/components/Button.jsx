import React from "react";

const Button = ({ buttonText, buttonStyles, configClassNames }) => {
  return (
    <div className={`${configClassNames}`}>
      <button className={`${buttonStyles}`}>{buttonText}</button>
    </div>
  );
};

export default Button;
