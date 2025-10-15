import style from "./PageSizeSelector.module.css";

export const PageSizeSelector = () => (
  <div className={style.toolbar__selectWrapper}>
    <select
      className={style.toolbar__customselect}
      value={0}
    >
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={40}>40</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </select>
  </div>
);
