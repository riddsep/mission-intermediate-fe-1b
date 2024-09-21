import Input from "./Input";

function RegisterForm() {
  return (
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
      <label htmlFor="password" className="form__label password--register">
        Kata Sandi
        <Input
          type="password"
          className={"form__input"}
          placeholder="Masukkan kata sandi"
          id="password"
        />
        <img src="/images/hide-icon.svg" alt="" className="hide-icon" />
      </label>
      <label htmlFor="password-confirm" className="form__label password">
        Konfirmasi Kata Sandi
        <Input
          type="password"
          className={"form__input"}
          placeholder="Masukkan kata sandi"
          id="password-confirm"
        />
        <img src="/images/hide-icon.svg" alt="" className="hide-icon" />
      </label>
    </form>
  );
}
export default RegisterForm;
