import GoUpIcon from "../icons/GoUpIcon";
import style from "./ScrollToTopButton.module.css";
type ScrollToTopButtonProps = {
  visible: boolean;
  onClick: () => void;
};

export const ScrollToTopButton = ({
  visible,
  onClick,
}: ScrollToTopButtonProps) => {
  if (!visible) return null;

  return (
    <div onClick={onClick} className={style.MainBlockConteiner__circleArrow}>
      <GoUpIcon />
    </div>
  );
};
