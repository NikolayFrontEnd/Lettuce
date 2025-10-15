import style from "./Paginator.module.css";

type PaginationInfoProp = {
  current: number;
  total: number;
};

export const PaginationInfo = ({ current, total }: PaginationInfoProp) => (
  <div className={style.toolbar__amount}>
    <div className={style.toolbar__blockWithNumber}>{current}</div>
    <div>of</div>
    <div>{total}</div>
  </div>
);
