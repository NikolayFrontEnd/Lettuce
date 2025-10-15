import { useEffect, useState } from "react";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { MembershipExecutedTable } from "../../components/membershipExecutedTableFolder/membershipExecutedTable/MembershipExecutedTable";
import { Paginator } from "../../components/paginator/Paginator";
import { ScrollToTopButton } from "../../primitives/scrollToTopButton/ScrollToTopButton";
import style from "./ExecutedMembershipCancellation.module.css";
import type { DataPage } from "../../../domain/entities/DataPage";
import type { ExecutedMembershipCancelation } from "../../../domain/entities/MembershipCansellationExecutedEntity";
import { executedMembershipService } from "../../../domain/services/ExecutedMembershipService";

export const ExecutedMembershipCancellation = () => {
  const { showButton, scrollToTop } = useScrollToTop();
  const [table, setTable] = useState({
    currentPage: 1,
    pageSize: 10,
  });

  const [data, setData] =
    useState<DataPage<ExecutedMembershipCancelation> | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await executedMembershipService.getAllCustomers(
          table.currentPage,
          table.pageSize,
        );
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [table.currentPage, table.pageSize]);

  console.log(data);

  const handleTableChange = (page: number) => {
    setTable((prev) => ({ ...prev, currentPage: page }));
  };

  const handleTablePageSizeChange = (pageSize: number) => {
    setTable({ currentPage: 1, pageSize });
  };
  return (
    <div className={style.MainBlockConteiner}>
      <div className={style.toolbarNumber}>
        <div className={style.toolbar__controls}>
          <Paginator
            pageCount={data?.pageCount ?? 0}
            currentPage={table.currentPage}
            onPageChange={handleTableChange}
            onPageSizeChange={handleTablePageSizeChange}
            pageSize={table.pageSize}
            totalItems={data?.itemCount ?? 0}
          />
        </div>
      </div>

      <MembershipExecutedTable data={data?.items ?? []} />
      <ScrollToTopButton visible={showButton} onClick={scrollToTop} />
    </div>
  );
};
