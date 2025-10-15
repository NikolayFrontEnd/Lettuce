import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import FirstIcon from "../icons/FirstIcon";
import LastIcon from "../icons/LastIcon";
import style from "./PaginationControl.module.css";


export const PaginationControl = () => {



  return (
    <div className={style.toolbar__buutonsSwitch}>
      <button
        className={style.toolbar__buttonChange}
      >
        <FirstIcon />
      </button>
      <button
        className={style.toolbar__buttonChange}
      >
        <ArrowLeftIcon />
      </button>
      <button
        className={style.toolbar__buttonChange}
      >
        <ArrowRightIcon />
      </button>
      <button
        className={style.toolbar__buttonChange}
      >
        <LastIcon />
      </button>
    </div>
  );
};
