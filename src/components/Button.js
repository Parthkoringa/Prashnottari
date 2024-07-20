import "./button.css";

function Button({ children, color = "primary", onBtnClick, fill }) {
  return (
    <button class={fill ? "button-20" : "button-23"} onClick={onBtnClick}>
      {children}
    </button>
  );
}

export default Button;
