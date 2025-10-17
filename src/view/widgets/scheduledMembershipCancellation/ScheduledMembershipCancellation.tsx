import { useEffect, useState } from "react";
import { Paginator } from "../../components/paginator/Paginator";
import { Popup } from "../../components/popup/Popup";
import style from "./ScheduledMembershipCancellation.module.css";
import { useScrollToTop } from "../../../hooks/useScrollToTop";
import { ScrollToTopButton } from "../../primitives/scrollToTopButton/ScrollToTopButton";
import { scheduledMembershipService } from "../../../domain/services/ScheduledMembershipService";
import type { DataPage } from "../../../domain/valueObject/DataPage";
import type { ScheduledMembershipCancellation } from "../../../domain/entities/ScheduledMembershipCancellation";
import { MembershipScheduledTable } from "../../components/membershipScheduledTable/MembershipScheduledTable";

export const ScheduledMembershipCancellationWidget = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { showButton, scrollToTop } = useScrollToTop();

  const handleCloseModal = () => setModalOpen(false);
  const handleConfirmModal = () => {
    setModalOpen(false);
  };

  const [table, setTable] = useState({
    currentPage: 1,
    pageSize: 10,
  });
  const [data, setData] =
    useState<DataPage<ScheduledMembershipCancellation> | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const result = await scheduledMembershipService.getAllCustomers(
          table.currentPage,
          table.pageSize,
        );
        setData(result);
      } catch (err) {
        console.error("Error fetching customers:", err);
      }
    };

    fetchCustomers();
  }, [table.currentPage, table.pageSize]);


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

      <MembershipScheduledTable data={data?.items ?? []} />

      <ScrollToTopButton visible={showButton} onClick={scrollToTop} />

      <Popup
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmModal}
        title="Are you sure you want to abort this Scheduled Membership Cancellation?"
        confirmText="Abort"
        cancelText="Cancel"
      />
    </div>
  );
};
