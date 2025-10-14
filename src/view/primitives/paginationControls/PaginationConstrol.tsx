import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import FirstIcon from "../icons/FirstIcon";
import LastIcon from "../icons/LastIcon";
import style from "./PaginationControl.module.css";

type PaginationControlsProps = {
  currentPage: number;

  pageCount: number;
  onPageChange: (page: number) => void;
};

export const PaginationControl = ({
  currentPage,
  onPageChange,
  pageCount,
}: PaginationControlsProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const goPrev = () => onPageChange(currentPage - 1);
  const goNext = () => onPageChange(currentPage + 1);
  const goFirst = () => onPageChange(1);
  const goLast = () => onPageChange(pageCount);

  return (
    <div className={style.toolbar__buutonsSwitch}>
      <button
        onClick={goFirst}
        className={style.toolbar__buttonChange}
        disabled={isFirstPage}
      >
        <FirstIcon />
      </button>
      <button
        onClick={goPrev}
        className={style.toolbar__buttonChange}
        disabled={isFirstPage}
      >
        <ArrowLeftIcon />
      </button>
      <button
        onClick={goNext}
        className={style.toolbar__buttonChange}
        disabled={isLastPage}
      >
        <ArrowRightIcon />
      </button>
      <button
        onClick={goLast}
        className={style.toolbar__buttonChange}
        disabled={isLastPage}
      >
        <LastIcon />
      </button>
    </div>
  );
};
