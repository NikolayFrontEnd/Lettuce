import style from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
  visible: boolean;
  errorLogPas: string;
}
export const ErrorMessage = ({
  message,
  visible,
  errorLogPas,
}: ErrorMessageProps) => {
  if (!visible) return null;
  return (
    <div className={style.signin__forminputBlock__errormessage}>
      {errorLogPas} {message}
    </div>
  );
};