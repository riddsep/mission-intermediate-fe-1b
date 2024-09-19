import "../styles/Button.css";
function Button(props) {
  const { className, label, icon } = props;
  return (
    <button className={className}>
      {icon}
      {label}
    </button>
  );
}
export default Button;
