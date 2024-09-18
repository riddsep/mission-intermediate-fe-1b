import "../styles/Dashboard.css";
import Button from "../components/Button";
function Dashboard() {
  return (
    <main className="container">
      <nav className="nav">
        <img src="/images/Logo.png" className="nav__logo" />
        <Button />
      </nav>
      <div className="hero">
        <h1 className="hero__title">
          Bikin momen tak terlupakan. Tonton bersama sekarang!
        </h1>
        <p className="hero__paragraph">
          Daftar untuk uji coba gratis selama 30 hari. Tonton tanpa biaya!
        </p>
      </div>
    </main>
  );
}
export default Dashboard;
