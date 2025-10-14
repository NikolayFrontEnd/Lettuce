import style from "./PageSizeSelector.module.css";

type PageSizeSelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export const PageSizeSelector = ({
  value,
  onChange,
}: PageSizeSelectorProps) => (
  <div className={style.toolbar__selectWrapper}>
    <select
      className={style.toolbar__customselect}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
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
