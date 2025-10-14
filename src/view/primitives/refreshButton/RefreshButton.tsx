import RefreshIcon from "../icons/RefreshIcon";
import style from "./RefreshButton.module.css";

export const RefreshButton = () => (
  <button className={style.toolbar__refreshbutton}>
    <RefreshIcon />
    <div className={style.toolbar__refreshText}>Refresh</div>
  </button>
);
