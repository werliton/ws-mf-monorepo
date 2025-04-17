const Button = () => {
  const alerting = () => {
    alert("oI SOU FEDERADO");
  };
  return (
    <button type="button" onClick={alerting}>
      Button federal {Date.now()}
    </button>
  );
};
export default Button;
