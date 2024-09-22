import "../styles/AuthForm.css";
import Input from "./atomic/Input";
import Button from "./atomic/Button";

function LoginForm() {
  return (
    <main className="container">
      <div className="wrapper">
        <div className="header">
          <img src="./images/logo.svg" alt="" className="logo" />
          <h1 className="title">Masuk</h1>
          <p className="paragraph">Selamat datang kembali!</p>
        </div>
        <form className="form">
          <label htmlFor="username" className="form__label username">
            Username
            <Input
              type="email"
              className={"form__input"}
              placeholder="Masukkan username"
              id="username"
            />
          </label>
          <label htmlFor="password" className="form__label password">
            Kata Sandi
            <Input
              type="password"
              className={"form__input"}
              placeholder="Masukkan kata sandi"
              id="password"
            />
            <img src="/images/hide-icon.svg" alt="" className="hide-icon" />
          </label>
        </form>
        <p className="call-to-action">
          <span>
            Belum punya akun?
            <span className="register">Daftar</span>
          </span>
          <span href="" className="forget-password">
            Lupa kata sandi?
          </span>
        </p>
        <Button className={"btn--secondary"} label={"Masuk"} />
        <p className="or">Atau</p>
        <Button
          className={"btn--secondary--outline flex"}
          label={
            <>
              <img src="/images/google-icon.svg" className="google-icon" />
              Masuk dengan Google
            </>
          }
        />
      </div>
    </main>
  );
}
export default LoginForm;
