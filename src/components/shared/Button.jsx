import React from "react";

const Button = ({ label, classCss, type, onClickEvent }) => {
  return (
    <button
      className={`btn ${classCss}`}
      type={type || "button"}
      onClick={onClickEvent}
    >
      {label}
    </button>
  );
};

export default Button;
