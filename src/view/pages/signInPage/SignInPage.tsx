import { useState } from "react";
import { SignInForm } from "../../components/signInForm/SignInForm";
import style from "./SignInPage.module.css";
import { useNavigate } from "react-router-dom";
import SignInLogoIcon from "../../primitives/icons/SignInLogoIcon";

export const SignInPage = () => {
    const navigate = useNavigate();
   const [isFocused, setIsFocused] = useState<boolean>(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorLogPas, setErrorLogPas] = useState(false);
  const VALID_EMAIL = "admin@example.com";
  const VALID_PASSWORD = "temppass1!";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const regex = /^\S+@\S+\.\S+$/;

    if (!regex.test(email) || password.length < 6) {
      setError(true);
      setErrorLogPas(false);
    } else if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      setError(false);
      setErrorLogPas(true);
    } else {
      setError(false);
      setErrorLogPas(false);
             navigate("/main");
       
    }
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(false);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(false);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className={style.signIn}>
      <div className={style.signin__logo}>
        <SignInLogoIcon />
      </div>
      <SignInForm
        email={email}
        password={password}
        error={error}
        errorLogPas={errorLogPas}
        isFocused={isFocused}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
