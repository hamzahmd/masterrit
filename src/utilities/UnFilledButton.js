import React from "react";
import "./style.css";

const UnFilledButton = ({ buttonText, buttonFn, width }) => {
  return (
    <button className="grounded-radiants" style={{ width: `${width}` }}>
      {buttonText}
    </button>
  );
};

export default UnFilledButton;
