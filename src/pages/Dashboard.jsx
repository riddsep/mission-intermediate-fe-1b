import "../styles/Dashboard.css";
import "../styles/Button.css";
import Button from "../components/Button";
import Input from "../components/Input";
function Dashboard() {
  return (
    <main className="container__dashboard">
      <nav className="nav">
        <img src="/images/Logo.png" className="nav__logo" />
        <Button className={"btn--primary"} label={"Sign in"} />
      </nav>
      <div className="hero">
        <h1 className="hero__title">
          Create unforgettable moments. Watch together now!
        </h1>
        <p className="hero__paragraph">
          Sign up for a 30-day free trial. Watch free of charge!
        </p>
        <div className="hero__input-container">
          <Input type={"text"} className={"input input--hero"} />
          <Button className={"btn--primary"} label={"Get started"} />
        </div>
      </div>
    </main>
  );
}
export default Dashboard;
