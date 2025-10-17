import style from "./Button.module.css";

interface ButtonProps {
  text: string;
  activeBtn: boolean;
}

export const Button = ({ text, activeBtn }: ButtonProps) => {
  return (
    <>
      <button
        type="submit"
        className={
          activeBtn
            ? style.signin__formbutton__active
            : style.signin__formbutton
        }
      >
        {text}
      </button>
    </>
  );
};
