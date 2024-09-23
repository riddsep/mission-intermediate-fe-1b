import "../styles/Dashboard.css";
import Button from "../components/atomic/Button";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  return (
    <main className="container__dashboard">
      <nav className="nav__dashboard">
        <img src="/images/logo.svg" className="nav__logo__dashboard" />
        <Button
          className={"btn--primary"}
          label={"Sign in"}
          onClick={() => navigate("/accounts/register")}
        />
      </nav>
      <div className="hero__container">
        <h1 className="hero__title__dashboard">
          Create unforgettable moments. Watch together now!
        </h1>
        <p className="hero__paragraph__dashboard">
          Sign up for a 30-day free trial. Watch free of charge!
        </p>
        <div className="hero__input-container">
          <Button
            className={"btn--primary"}
            label={"Get started"}
            onClick={() => navigate("/accounts/login")}
          />
        </div>
      </div>
    </main>
  );
}
export default Dashboard;
