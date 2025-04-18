import React from "react";

interface ButtonProps {
  text?: string;
}

const Button = ({ text }: ButtonProps) => {
  const [msg, setMsg] = React.useState("");

  const alerting = () => {
    setMsg("Cuidado com a Federal. #ARROCHA!");
  };
  return (
    <div className="federado">
      <span className="alert">{msg}</span>
      <button type="button" onClick={alerting}>
        Button federado {Date.now()} {text}
      </button>
    </div>
  );
};
export default Button;
