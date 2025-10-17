import { Button } from "../../primitives/buttonForm/Button";
import { ErrorMessage } from "../../primitives/errorMessage/ErrorMessage";
import FormInput from "../../primitives/formInput/FormInput";
import LockIcon from "../../primitives/icons/LockIcon";
import style from "./SignInForm.module.css";

interface SigninFormProps {
  email: string;
  password: string;
  error: boolean;
  isFocused: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  errorLogPas: boolean;
}

export const SignInForm = ({
  email,
  password,
  error,
  errorLogPas,
  isFocused,
  onSubmit,
  onEmailChange,
  onPasswordChange,
  onFocus,
  onBlur,
}: SigninFormProps) => {
  return (
    <>
      <form onSubmit={onSubmit} className={style.signin__form}>
        <div className={style.signin__formtitle}>Sign in</div>
        <FormInput
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          type="password"
          icon={<LockIcon />}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <FormInput
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <ErrorMessage
          errorLogPas=""
          message="Invalid login format!"
          visible={error}
        />

        <ErrorMessage
          errorLogPas="Incorrect login or password!"
          message=""
          visible={errorLogPas}
        />

        <Button text="Sign in" activeBtn={isFocused} />
      </form>
    </>
  );
};
