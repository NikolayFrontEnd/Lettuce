import type { ReactNode } from "react";
import style from "./FormInput.module.css";

interface FormInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  icon?: ReactNode;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function FormInput({
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  onFocus,
  onBlur,
}: FormInputProps) {
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div className={style.signin__forminputblock}>
      {icon && <div className={style.signin__forminputicon}>{icon}</div>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={style.signin__forminput}
      />
    </div>
  );
}
