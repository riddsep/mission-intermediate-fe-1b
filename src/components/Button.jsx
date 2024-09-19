import "../styles/Button.css";
function Button(props) {
  const { className, label } = props;
  return <button className={className}>{label}</button>;
}
export default Button;
