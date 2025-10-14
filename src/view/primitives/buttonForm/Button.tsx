import style from './Button.module.css';

interface ButtonProp{
    text:string,
    activeBtn:boolean;
}

export const Button = ({text, activeBtn}:ButtonProp) => {
    
    return (
        <>
        <button
      type="submit"
      className={
        activeBtn ? style.signin__formbutton__active : style.signin__formbutton
      }
    >
      {text}
    </button>
        </>
    )
}