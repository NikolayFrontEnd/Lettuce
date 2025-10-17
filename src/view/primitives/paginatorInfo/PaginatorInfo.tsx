import style from "./Paginator.module.css";

type PaginationInfoProps = {
  current: number;
  total: number;
};

export const PaginationInfo = ({ current, total }: PaginationInfoProps) => (
  <div className={style.toolbar__amount}>
    <div className={style.toolbar__blockWithNumber}>{current}</div>
    <div>of</div>
    <div>{total}</div>
  </div>
);
