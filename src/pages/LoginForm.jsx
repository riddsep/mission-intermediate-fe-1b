import Button from "../components/Button";
import Input from "../components/Input";
import "../styles/LoginForm.css";

function LoginForm() {
  return (
    <main className="container__login">
      <div className="wrapper__login">
        <div className="login__header">
          <img src="/images/Logo.png" alt="" className="login__logo" />
          <h1 className="login__title">Masuk</h1>
          <p className="login__paragraph">Selamat datang kembali!</p>
        </div>

        <form className="form">
          <label htmlFor="username" className="form__label username">
            Username
            <Input
              type={"email"}
              className={"form__input"}
              placeholder={"Masukkan username"}
              id="username"
            />
          </label>
          <label htmlFor="password" className="form__label password">
            Kata Sandi
            <Input
              type={"password"}
              className={"form__input"}
              placeholder={"Masukkan kata sandi"}
              id="password"
            />
          </label>
          <p className="call-to-action">
            <span>
              Belum punya akun?{" "}
              <a href="" className="register">
                Daftar
              </a>
            </span>
            <a href="" className="forget-password">
              Lupa kata sandi?
            </a>
          </p>
          <Button className={"btn--secondary"} label={"Masuk"} />
        </form>
      </div>
    </main>
  );
}
export default LoginForm;
