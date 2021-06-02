import React from "react";

function Button({ children, color2, click }) {
  return (
    <button
      className="btn"
      onClick={click}
      style={{ color: color2, backgroundColor: "yellow" }}
    >
      {children}
    </button>
  );
}

export default Button;
