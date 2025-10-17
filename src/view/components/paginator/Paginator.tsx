import { PageSizeSelector } from "../../primitives/pageSizeSelector/PageSizeSelector";
import { PaginationControl } from "../../primitives/paginationControls/PaginationConstrol";
import { PaginationInfo } from "../../primitives/paginatorInfo/PaginatorInfo";

type PaginatorProps = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
};

export const Paginator = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
  pageCount,
}: PaginatorProps) => {
  return (
    <>
      <PaginationControl
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
      <PageSizeSelector value={pageSize} onChange={onPageSizeChange} />
      <PaginationInfo current={pageSize} total={totalItems} />
    </>
  );
};
