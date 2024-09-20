import "../styles/AuthForm.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import Button from "../components/Button";
import { useState } from "react";

function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <main className="container">
      <div className="wrapper">
        <div className="header">
          <img src="/images/Logo.png" alt="" className="logo" />
          <h1 className="title">Masuk</h1>
          <p className="paragraph">Selamat datang kembali!</p>
        </div>
        {isRegister ? <RegisterForm /> : <LoginForm />}
        <p className="call-to-action">
          <span>
            {isRegister ? "Sudah punya akun?" : "Belum punya akun?"}
            <span
              className="register"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? " Masuk" : " Daftar"}
            </span>
          </span>
          <span href="" className="forget-password">
            {!isRegister ? "Lupa kata sandi?" : ""}
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
export default AuthForm;
